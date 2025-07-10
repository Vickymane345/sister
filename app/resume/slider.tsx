import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
interface SliderItem {
  label: string;
  value: number;
}

const sliderData: SliderItem[] = [
  { label: "Linkedin", value: 100 },
  { label: "Youtube", value: 90 },
  { label: "Podcasts", value: 80 },
  { label: "Instagram", value: 90 },
  { label: "Tiktok", value: 50 },
  { label: "X", value: 70 },
];

const SliderList: React.FC = () => {
  return (
    <div className=" space-y-16">
      {sliderData.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 w-full">
          <div
            className={`${playfair.className} w-32 font-bold uppercase text-sm`}
          >
            {item.label}
          </div>
          <div className="relative flex-1 h-2 bg-gray-200 rounded">
            <div
              className="absolute h-2 bg-red-600 rounded"
              style={{ width: `${item.value}%` }}
            />
            <div
              className="absolute -top-2 right-46 bg-white border border-gray-300 text-xs px-4 py-0.5 rounded shadow"
              style={{ left: `${item.value}%`, transform: "translateX(-50%)" }}
            >
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderList;
