import React, { useState, useEffect } from "react";

interface AlertProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      // Auto-close the alert after 5 seconds (adjust the time as needed)
      const timeout = setTimeout(() => {
        setVisible(false);
        if (onClose) {
          onClose();
        }
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  const closeAlert = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  let alertClasses = "p-4 rounded-md absolute right-50 top-0 m-4 ";

  switch (type) {
    case "success":
      alertClasses += "bg-green-100 border-green-400 text-green-700 border ";
      break;
    case "info":
      alertClasses += "bg-blue-100 border-blue-400 text-blue-700 border ";
      break;
    case "warning":
      alertClasses += "bg-yellow-100 border-yellow-400 text-yellow-700 border ";
      break;
    case "error":
      alertClasses += "bg-red-100 border-red-400 text-red-700 border ";
      break;
    default:
      alertClasses += "bg-gray-100 border-gray-400 text-gray-700 border ";
  }

  return (
    <>
      {visible && (
        <div className={alertClasses} role="alert">
          <div className="flex">
            <div>
              <p className="text-sm">{message}</p>
            </div>
            <button onClick={closeAlert} className="ml-auto" aria-label="Close">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="x-circle w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
