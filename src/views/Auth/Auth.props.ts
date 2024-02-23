import { Dispatch, SetStateAction } from "react";

export interface LoginModalProps {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsRegister: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface RegisterModalProps {
  isRegister: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsRegister: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
