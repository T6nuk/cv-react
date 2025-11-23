import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <DialogPanel className="max-w-lg space-y-4 border bg-black p-12">
            <DialogTitle>Something</DialogTitle>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
