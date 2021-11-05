import React from "react";
import { Portal } from "components/Portal";

export function Modal({ children, isOpen, onClose, width = "lg" }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        onClick={() => onClose()}
        className="min-h-screen flex-center p-4 sm:p-0 backdrop"
      >
        <section
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          className={`bg-white rounded-lg p-4 w-full sm:max-w-${width} flex flex-col gap-3`}
        >
          {children}
        </section>
      </div>
    </Portal>
  );
}

function Header({ children }) {
  return (
    <header className="text-center sm:text-left text-2xl text-gray-900 font-medium">
      {children}
    </header>
  );
}

function Content({ children }) {
  return <div className="label text-center sm:text-left">{children}</div>;
}

function Action({ children, align = "end" }) {
  return (
    <footer className={`flex flex-col sm:flex-row justify-${align} gap-2`}>
      {children}
    </footer>
  );
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Action = Action;