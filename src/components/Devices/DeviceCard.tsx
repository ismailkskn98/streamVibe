import React from "react";
import styles from "./styles.module.css";

type DeviceCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

const DeviceCard = ({ title, description, Icon }: DeviceCardProps) => {
  return (
    <article className="relative w-full bg-black-06 flex flex-col gap-5 md:gap-6 2xl:gap-[30px] p-6 md:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl border border-solid border-black-15">
      <div className={`${styles.devicesCard} bg-white w-full h-full absolute top-0 left-0 z-10 pointer-events-none rounded-xl`}></div>
      <div className="flex items-center gap-[10px] md:gap-3 2xl:gap-4">
        <span className="inline-block w-[44px] h-[44px] md:w-[54px] md:h-[54px] 2xl:w-[72px] 2xl:h-[72px] rounded-lg 2xl:rounded-xl p-[10px] md:p-3 2xl:p-4 bg-black-08 border border-solid border-black-12">
          <Icon className="text-red-45 w-6 h-6 md:w-[30px] md:h-[30px] 2xl:w-[40px] 2xl:h-[40px]" />
        </span>
        <h4 className="text-white text-lg md:text-xl 2xl:text-2xl font-semibold">{title}</h4>
      </div>
      <p className="text-grey-60 font-light text-sm md:text-base 2xl:text-lg">{description}</p>
    </article>
  );
};

export default DeviceCard;
