"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { MdClose } from "react-icons/md";

type PopModalProps = {
  project: any;
  open: boolean;
  onClose: () => void;
};

const PopModal = ({ project, open, onClose }: PopModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-85 transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel className="w-full max-w-lg rounded-lg bg-whiteish p-10 shadow-xl relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-secondary focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <MdClose aria-hidden="true" className="h-8 w-8" />
          </button>

          <DialogTitle as="h3" className="text-2xl font-semibold text-primary">
            {project.name}
          </DialogTitle>
          <p className="mt-4 text-lg font-light text-gray-900 text-pretty">
            {project.longBody}
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-[100px] justify-center rounded-full bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-secondary"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PopModal;
