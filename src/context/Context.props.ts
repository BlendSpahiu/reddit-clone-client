import { Dispatch, SetStateAction } from "react";
import { ToastrTypes } from "../enums/Toastr.enums";
import { Nullable } from "../interfaces/Nullable";
import { ToastrModel } from "../interfaces/Toastr.props";
import { UserFragment } from "../renderer/graphql/gen/graphql";

export interface AuthContextProps {
  user: Nullable<UserFragment>;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLogin: boolean;
  isRegister: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsRegister: Dispatch<SetStateAction<boolean>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export interface ToastrProps {
  toastId: number;
  type: ToastrTypes;
  title: string;
  content: string;
  timeout?: number;
}

export interface ToastrContextProps {
  toasts: Nullable<ToastrProps[]>;
  addToast: (toast: ToastrProps) => void;
  onClose: (toastId: number) => void;
}
