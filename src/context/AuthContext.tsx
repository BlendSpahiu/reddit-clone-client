import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { client } from "../graphql/client/client";
import { wsClient } from "../graphql/client/links/wsLink";
import { useGetUserByIdLazyQuery, UserFragment } from "../graphql/gen/graphql";
import { Nullable } from "../interfaces/Nullable";
import { getHasuraUserId } from "../utils/auth/jwt/getHasuraUserId";
import { AuthContextProps } from "./Context.props";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  login: (_token: string) => null,
  logout: () => null,
  isAuthenticated: false,
  isLogin: false,
  isRegister: false,
  setIsLogin: (_value) => null,
  setIsRegister: (_value) => null,
  setIsAuthenticated: (_value) => null,
});

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [user, setUser] = useState<Nullable<UserFragment>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const token = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUser(null);
    client.clearStore();
  };

  const login = (accessToken: string) => {
    setLoading(true);
    localStorage.setItem("access_token", accessToken);
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const [getAuthUser] = useGetUserByIdLazyQuery({
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: "cache-first",
    onCompleted: (data) => {
      if (data.users[0]) {
        setLoading(false);
        setUser(data.users[0]);
      } else {
        logout();
      }
    },
    onError: () => {
      logout();
    },
  });

  useEffect(() => {
    if (token || localStorage.getItem("isAuthenticated")) {
      setIsAuthenticated(true);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      if (token) {
        const userId = getHasuraUserId(token);

        if (!userId) {
          logout();
          return;
        }

        if (!isAuthenticated) {
          client.clearStore();
          wsClient.close();
        }

        if (isAuthenticated) getAuthUser({ variables: { id: userId } });
      }
    }
  }, [getAuthUser, isAuthenticated, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        login,
        loading,
        isAuthenticated,
        isLogin,
        isRegister,
        setIsLogin,
        setIsRegister,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
