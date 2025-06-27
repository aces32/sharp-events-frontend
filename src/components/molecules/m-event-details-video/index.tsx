const EventDetailsVideo = ({ video }: { video: string }) => {
  return (
    <div className="space-y-4 py-4">
      <p className="font-Rubik text-[0.875rem] font-bold">Video</p>
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-md">
        <video src={video} controls className="h-full w-full object-cover">
          <track kind="captions" src="" label="English captions" />{' '}
        </video>
      </div>
      {/* <img src={VideoPlaceholder} alt="video placeholder" className="size-full object-cover" /> */}
    </div>
  );
};
export default EventDetailsVideo;
