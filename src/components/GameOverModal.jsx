import { useEffect, useRef } from 'react';

/* eslint-disable react/prop-types */
export default function GameOverModal({ isGameOver, children }) {
  const dialog = useRef();
  useEffect(() => {
    if (isGameOver) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isGameOver]);
  return (
    <dialog
      ref={dialog}
      className="modal"
    >
      {children}
    </dialog>
  );
}
