import * as RadixToast from "@radix-ui/react-toast";
import { X, CircleAlert, CircleCheckBig } from "lucide-react";
import { ReactNode, createContext, useContext, useState } from "react";

/** Toast Context */
type OpenToastProps = {
  type: "success" | "error";
  text: ReactNode;
  /** トーストを開いてから自動で閉じるまでの待機時間 */
  duration?: number;
};

const ToastContext = createContext<{
  openToast: (props: OpenToastProps) => void;
}>({
  openToast: () => null,
});

export const useToast = () => {
  return useContext(ToastContext);
};

/** Toast Provider */
type ToastItem = {
  id: string;
  type: "success" | "error";
  text: ReactNode;
  duration?: number;
  isOpen: boolean;
};

const generateToastId = () => Math.random().toString(32).substring(2);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const openToast = (params: OpenToastProps) => {
    const id = generateToastId();
    setToasts((prev) => [...prev, { id, isOpen: true, ...params }]);
  };

  const closeToast = (id: string) => {
    setToasts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isOpen: false } : p))
    );

    setTimeout(() => setToasts((prev) => prev.filter((p) => p.id !== id)), 200);
  };

  return (
    <ToastContext.Provider value={{ openToast }}>
      {/* トーストを開いてから閉じるまでの時間のデフォルト値 = 5s */}
      <RadixToast.Provider duration={5000}>
        {children}
        {toasts.map((value) => (
          <Toast key={value.id} value={value} onClose={closeToast} />
        ))}
        <RadixToast.Viewport className="fixed bottom-0 right-0 w-[390px] max-w-full p-[25px]" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

/** Toast UI */
const Toast = ({
  value,
  onClose,
}: {
  value: ToastItem;
  onClose: (id: string) => void;
}) => {
  return (
    <RadixToast.Root
      className="flex items-center gap-2 rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
      open={value.isOpen}
      onOpenChange={(isOpen) => !isOpen && onClose(value.id)}
      duration={value.duration}
    >
      <RadixToast.Title className="flex-1">
        <div className="flex items-center gap-2">
          {value.type === "success" ? (
            <CircleCheckBig className="text-green-500" />
          ) : (
            <CircleAlert className="text-red-500" />
          )}
          <span className="flex-1">{value.text}</span>
        </div>
      </RadixToast.Title>
      <RadixToast.Close className="rounded-full p-2 text-lg hover:bg-gray-200">
        <X size={20} />
      </RadixToast.Close>
    </RadixToast.Root>
  );
};
