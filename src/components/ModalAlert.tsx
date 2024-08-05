import React, { useState } from "react";
import Alert from "./Alert";

interface ModalAlertProps {
  mode: "delete" | "add"; // Add or Delete mode
  title?: string;
  closeModal: () => void;
  onDelete?: () => void;
  onSave?: (data: string) => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  mode,
  title,
  closeModal,
  onDelete,
  onSave,
}) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const validateCardNumber = () => {
    let errorMsg = "";

    if (!inputData) {
      errorMsg = "Card number is required.";
      setError(errorMsg);
      return false;
    } else if (inputData.length < 16) {
      errorMsg = "Card number must be at least 16 digits.";
      setError(errorMsg);
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (onSave && validateCardNumber()) {
      onSave(inputData);
      closeModal();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      closeModal();
    }
  };

  return (
    <>
      <div className="fixed bg-gray-500/50 grid h-screen place-items-center top-0 left-0 bottom-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
        {error && <Alert type="error" message={error} />}
        <div className="relative w-full max-w-lg max-h-full">
          <div className="bg-vector border border-orange-600 relative bg-white rounded-lg shadow dark-bg-gray-700">
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 ">
              {mode === "add" && (
                <h1 className="text-lg font-semibold">Add Payment Method</h1>
              )}
              {mode === "delete" && (
                <h1 className=" text-lg font-semibold">
                  Are You sure, You want to {title}
                </h1>
              )}
              <div className="my-5 ">
                {mode === "add" && (
                  <input
                    type="text"
                    id="card_number"
                    name="card_number"
                    placeholder="Enter your card number"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    value={inputData}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="text-center">
                {mode === "add" && (
                  <button
                    onClick={closeModal}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="mr-2 text-gray-500 bg-white hover-bg-gray-100 focus-ring-4 focus-outline-none focus-ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover-text-gray-900 focus-z-10 dark-bg-gray-700 dark-text-gray-300 dark-border-gray-500 dark-hover-text-white dark-hover-bg-gray-600 dark-focus-ring-gray-600"
                  >
                    Cancel
                  </button>
                )}
                {mode === "add" && (
                  <button
                    onClick={handleSave}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-orange-700 hover-bg-orange-800 focus-ring-4 focus-outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Save
                  </button>
                )}
                {mode === "delete" && (
                  <>
                    <button
                      onClick={handleDelete}
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover-bg-red-800 focus-ring-4 focus-outline-none focus-ring-red-300 dark-focus-ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I am sure
                    </button>

                    <button
                      onClick={closeModal}
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover-bg-gray-100 focus-ring-4 focus-outline-none focus-ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover-text-gray-900 focus-z-10 dark-bg-gray-700 dark-text-gray-300 dark-border-gray-500 dark-hover-text-white dark-hover-bg-gray-600 dark-focus-ring-gray-600"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAlert;
