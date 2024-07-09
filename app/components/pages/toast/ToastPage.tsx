import { useToast } from "./Toast";

export const ToastPage = () => {
  const { openToast } = useToast();
  return (
    <div>
      <button
        className="rounded-md bg-green-500 px-4 py-2"
        onClick={() => {
          openToast({
            type: "success",
            text: "成功!!!",
          });
        }}
      >
        open success toast
      </button>
      <button
        className="rounded-md bg-red-500 px-4 py-2"
        onClick={() => {
          openToast({
            type: "error",
            text: "失敗.....",
          });
        }}
      >
        open error toast
      </button>
    </div>
  );
};
