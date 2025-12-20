import { Dialog, DialogPanel } from "@headlessui/react";
import "../App.css";

export default function Modal({ open, onClose, children }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-50">
        <div className="dialog-panel">
          <DialogPanel>{children}</DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
