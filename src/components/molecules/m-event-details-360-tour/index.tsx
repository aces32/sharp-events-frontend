// import VideoPlaceholder from 'assets/images/virtual-tour.png';

const EventDetails360Tour = ({ video }: { video: string }) => {
  return (
    <div className="space-y-4 py-4">
      <p className="font-Rubik text-[0.875rem] font-bold">360&deg; Virtual tour</p>
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-md">
        <video src={video} controls className="h-full w-full object-cover">
          <track kind="captions" src="" label="English captions" />{' '}
        </video>
      </div>
    </div>
  );
};
export default EventDetails360Tour;
