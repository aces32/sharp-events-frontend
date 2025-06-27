const VendorClientInfo = ({
  name,
  email,
  date,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
  date: string;
}) => {
  return (
    <div className="w-full rounded-lg bg-white px-3 py-5 lg:px-6">
      <h3 className="font-Rubik text-2xl font-bold">Client Info</h3>
      <hr className="py-1" />
      <div className="mt-4 flex w-full flex-col items-start gap-3 text-left">
        <p className="font-Rubik text-base font-bold">Client Name: {name}</p>
        <p className="font-Rubik text-base font-bold">Booking Date: {date}</p>
        <p className="font-Rubik text-base font-bold">Phone Number: {phone}</p>
        <p className="font-Rubik text-base font-bold">Email: {email}</p>
      </div>
    </div>
  );
};

export default VendorClientInfo;
