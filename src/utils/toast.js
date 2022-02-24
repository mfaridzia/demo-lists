import toast from "react-hot-toast";

export default function showToast (status, message) {
  if (status) {
    const notify = () => toast.success(message);
    notify();
  } else {
    const notify = () => toast.error(message);
    notify();
  }
}