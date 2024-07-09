import { ToastPage } from "./ToastPage";
import { ToastProvider } from "./Toast";

export const ToastPageRoot = () => {
  return (
    <ToastProvider>
      <ToastPage />
    </ToastProvider>
  );
};
