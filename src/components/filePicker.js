// FilePickerModal.js
import React from "react";

function FilePickerModal({ isOpen, onClose, files }) {
  console.log(files);

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white p-6 rounded shadow-lg max-w-[45%] items-center justify-center">
        <h2 className="text-lg font-bold mb-4">Uploaded Files</h2>
        {/* Display selected file names and extensions */}
        {files.length > 0 && (
          <div className="mt-4">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">File Name</th>
                  <th className="px-4 py-2 border">Extension</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">
                      {file.name.split(".")[0]}
                    </td>
                    <td className="px-4 py-2 border">
                      {file.name.split(".")[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
