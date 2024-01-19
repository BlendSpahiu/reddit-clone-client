import { useContext } from "react";
import { ToastrContext } from "../context/ToastrContext";

export const useToast = () => useContext(ToastrContext);
