interface EventInfo {
  timeText: string;
  event: {
    title: string;
    extendedProps: {
      avatars: string[];
    };
  };
  backgroundColor: string;
}

const RenderEventContent = ({ timeText, event, backgroundColor }: EventInfo) => {
  const { title, extendedProps } = event;
  const { avatars } = extendedProps;

  return (
    <div className="border-l-4 px-2 py-1" style={{ borderColor: backgroundColor }}>
      <p className="text-xs font-semibold">{timeText}</p>
      <p className="text-sm">{title}</p>
      <div className="mt-1 flex">
        {avatars?.map((avatar: string) => (
          <img
            key={avatar}
            src={avatar}
            className="-ml-1 h-5 w-5 rounded-full border border-white"
            alt="avatar"
          />
        ))}
      </div>
    </div>
  );
};

export default RenderEventContent;
