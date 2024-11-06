// FilePickerModal.js
import React from 'react';

function FilePickerModal({ isOpen, onClose, files }) {
  console.log( files)

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white p-6 rounded shadow-lg w-80 items-center justify-center">
      <h2 className="text-lg font-bold mb-4">Uploaded Files</h2>
        {/* Display selected file names and extensions */}
        {files.length > 0 && (
          <div className="mt-4">
            <ul className="list-disc pl-5">
              {files.map((file, index) => (
                <li key={index}>
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4">
          <button
            className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
          </div>
      </div>
    </div>
  );
}

export default FilePickerModal;
