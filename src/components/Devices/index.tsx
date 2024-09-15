import React from "react";
import DevicesTitle from "./DevicesTitle";
import styles from "./styles.module.css";
import { RiSmartphoneFill } from "react-icons/ri";
import { FaTablet } from "react-icons/fa6";
import { IoTvSharp } from "react-icons/io5";
import { BsLaptopFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";

type Device = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const Devices = () => {
  const devices: Device[] = [
    {
      title: "Akıllı Telefonlar",
      description: "StreamVibe, hem Android hem de iOS akıllı telefonlar için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: RiSmartphoneFill,
    },
    {
      title: "Tablet",
      description: "StreamVibe, hem Android hem de iOS tabletler için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: FaTablet,
    },
    {
      title: "Akıllı TV",
      description: "StreamVibe, akıllı TV'ler için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: IoTvSharp,
    },
    {
      title: "Dizüstü Bilgisayarlar",
      description: "StreamVibe, dizüstü bilgisayarlar için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: BsLaptopFill,
    },
    {
      title: "Oyun Konsolları",
      description: "StreamVibe, oyun konsolları için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: IoGameController,
    },
    {
      title: "VR Başlıkları",
      description: "StreamVibe, VR başlıkları için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
      icon: BsHeadsetVr,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-20">
      <DevicesTitle />
      <main className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-[30px]">
        {devices?.map((device, index) => (
          <article key={index} className="relative w-full bg-black-06 flex flex-col gap-[30px] p-12 rounded-xl border border-solid border-black-15">
            <div className={`${styles.devicesCard} bg-white w-full h-full absolute top-0 left-0 z-10 pointer-events-none rounded-xl`}></div>
            <div className="flex items-center gap-4">
              <span className="inline-block w-[72px] h-[72px] rounded-xl p-4 bg-black-08 border border-solid border-black-12">
                <device.icon className="text-red-45 w-[40px] h-[40px]" />
              </span>
              <h4 className="text-white text-2xl font-semibold">{device.title}</h4>
            </div>
            <p className="text-grey-60 font-light text-lg">{device.description}</p>
          </article>
        ))}
      </main>
    </section>
  );
};

export default Devices;
