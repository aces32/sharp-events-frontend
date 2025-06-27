interface ProgressBarProps {
  progress: number;
  segments?: number;
  className?: string;
}

const ProgressBar = ({ progress, segments = 4, className }: ProgressBarProps) => {
  const filledSegments = Math.round((progress / 100) * segments);

  return (
    <div className={`flex w-full justify-center gap-2 ${className}`}>
      {[...Array(segments)].map((_, index) => {
        const id = `progress-bar-segment-${index}`;
        return (
          <div
            key={id}
            className={`h-1 w-full rounded-md ${
              index < filledSegments ? 'bg-blue-500' : 'bg-gray-300'
            } transition-all duration-300 ease-in-out`}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
