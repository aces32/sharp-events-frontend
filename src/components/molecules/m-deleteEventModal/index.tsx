import { FaExclamationTriangle } from 'react-icons/fa';

interface DeleteEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEventId: null | string;
  onDelete: (id: string) => void;
}
const DeleteEventModal = ({
  isOpen,
  onClose,
  selectedEventId,
  onDelete,
}: DeleteEventModalProps) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-xs rounded-2xl bg-white p-10 shadow-lg">
            <div className="flex w-full flex-col items-center justify-center gap-7 py-2 text-center ">
              <FaExclamationTriangle className="text-2xl text-red-500" />
              <h4 className="font-Rubik text-2xl font-bold">Delete Event Center</h4>
              <p className="font-Rubik text-base font-medium">
                Are you sure you want to delete this event center?
              </p>
              <div className="grid w-full grid-cols-2 gap-3">
                <button
                  type="button"
                  aria-label="close"
                  onClick={onClose}
                  className="rounded-lg bg-[#008000] py-4 font-Rubik text-xs font-semibold text-white"
                >
                  No, Keep it
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#FF0000] py-4 font-Rubik text-xs font-semibold text-white"
                  aria-label="close"
                  onClick={() => {
                    if (selectedEventId) {
                      onDelete(selectedEventId);
                      onClose();
                    }
                  }}
                >
                  Yes, delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteEventModal;
