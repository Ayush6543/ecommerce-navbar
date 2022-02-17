import React, { useEffect, useState } from "react";
import ComputerContent from "./ComputerContent";
import "./Content.css";
import IpadContent from "./IpadContent";
import MobileContent from "./MobileContent";
import SmallLaptop from "./SmallLaptop";
import { contentImages } from "./Images";

const Content = () => {
  const [device, setDevices] = useState<string>("");
  const addDevice = (value: string) => setDevices(value);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 590) {
        addDevice("mobile");
      } else if (window.innerWidth > 590 && window.innerWidth <= 870) {
        addDevice("ipad");
      } else if (window.innerWidth > 870 && window.innerWidth <= 1220) {
        addDevice("smallLaptop");
      } else {
        addDevice("computer");
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <>
      <h1 className="content-titling">deals of the day</h1>
      <div className="card">
        {device === "mobile" && <MobileContent images={contentImages} />}
        {device === "ipad" && <IpadContent images={contentImages} />}
        {device === "computer" && <ComputerContent images={contentImages} />}
        {device === "smallLaptop" && <SmallLaptop images={contentImages} />}
      </div>
    </>
  );
};

export default Content;
