const ViewEventFacilites = ({
  facilities,
}: {
  facilities: { facilities: { id: string; facility: { name: string } }[] };
}) => {
  return (
    <div>
      <h3 className="font-Rubik text-2xl font-bold">Amenities</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facilities?.facilities?.map((item: { id: string; facility: { name: string } }) => {
          return (
            <ul key={item.id} className="pl-5">
              <li className="list-disc font-Rubik text-base font-bold">{item.facility.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ViewEventFacilites;
