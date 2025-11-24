import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import EducationForm from "./EducationForm";

export default function Modal({ open, onClose, children }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
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
          backgroundColor: "white",
        }}
      >
        <div>
          <DialogPanel className="max-w-lg space-y-4 border bg-black p-12">
            <DialogTitle>Something</DialogTitle>
            {children}
            <button onClick={() => onClose(true)}>Cancel</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
