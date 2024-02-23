import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { ToastrContextProps, ToastrProps } from "./Context.props";
import { Toastr } from "../components/common/Toastr";
import { Nullable } from "../interfaces/Nullable";

export const ToastrContext = createContext<ToastrContextProps>({
  toasts: [],
  addToast: (_toast) => null,
  onClose: (_toastId) => null,
});

export const ToastrProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [toasts, setToasts] = useState<Nullable<ToastrProps[]>>([]);

  const addToast = (toast: ToastrProps) => {
    setToasts([...(toasts || []), { ...toast, toastId: Math.random() * 100 }]);
  };

  const onClose = (toastId: number) => {
    setToasts(toasts?.filter((toast) => toast.toastId !== toastId) || []);
  };

  useEffect(() => {
    const clearToastsTimeout = setTimeout(() => {
      setToasts(toasts?.slice(0, -1) || []);
    }, 3000);

    if (toasts?.length === 0) {
      clearTimeout(clearToastsTimeout);
    }

    return () => {
      clearTimeout(clearToastsTimeout);
    };
  }, [toasts]);

  return (
    <ToastrContext.Provider value={{ toasts, addToast, onClose }}>
      {toasts?.map((toast) => (
        <Toastr
          key={toast.toastId}
          content={toast.content}
          title={toast.title}
          toastId={toast.toastId || 0}
          type={toast.type}
          onClose={onClose}
        />
      ))}

      {children}
    </ToastrContext.Provider>
  );
};
