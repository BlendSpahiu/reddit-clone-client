import { ToastrTypes } from "../enums/Toastr.enums";

export interface ToastrModel {
  toastId: number;
  type: ToastrTypes;
  title: string;
  content: string;
  onClose: (toastId: number) => void;
}
