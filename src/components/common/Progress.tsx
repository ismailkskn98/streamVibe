import React from "react";

const Progress = ({ progress }: { progress: number }) => {
  return (
    <div className="min-w-20 flex items-center justify-center">
      <div className="flex w-full h-1 bg-black-10 rounded-full overflow-hidden">
        <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
};

export default Progress;
