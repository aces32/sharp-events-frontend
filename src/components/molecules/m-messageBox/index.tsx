import Admin from 'assets/Icon/admin';

const Message = ({
  message,
  reply,
  status,
  name,
}: {
  message: string;
  reply: string;
  status: string;
  name: string;
}) => {
  return (
    <div className="mt-5 w-full rounded-lg bg-white px-3 py-5 lg:px-6">
      <h3 className="font-Rubik text-2xl font-bold">Message</h3>
      <hr className="py-2" />
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-start">
          <div className="max-w-md rounded-lg bg-white p-5 shadow-md">
            <p className="font-Rubik text-base font-semibold">{message} </p>
          </div>

          <div className="ml-4 flex flex-col justify-end">
            <div className="mt-2 flex items-center space-x-2">
              <Admin />
              <span className="text-sm font-semibold">{name}</span>
              <span className="text-xs text-gray-500">Today 8:00am</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <div className="max-w-md rounded-lg bg-[#F0EDFE] p-5">
              <p className="font-Rubik text-base font-semibold">{reply}</p>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <Admin />
              <span className="text-xs text-gray-500">Today 8:03am</span>
            </div>
            <div className="mt-2 flex flex-col items-end space-x-2">
              <div className="max-w-md rounded-lg bg-[#F0EDFE] p-5">
                <div className="rounded-md bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-800">
                  {status}
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <Admin />
                <span className="text-xs text-gray-500">Today 8:03am</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
