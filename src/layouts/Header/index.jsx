import { useEffect } from "react";

import Logo from "../../data/data-layout/Header/data-Logo.js";
import MenuInfo from "../../data/data-layout/Header/data-MenuInfo.json";

import "./header.css";

import SecHeader from "./SecHeader";

import { Addshrink, moveSmooth } from "../../utils/";

const Header = () => {
  useEffect(() => {
    Addshrink();
  }, []);

  useEffect(() => {
    moveSmooth();
  }, []);

  return (
    <>
      <SecHeader Logo={Logo} MenuInfo={MenuInfo} />
    </>
  );
};

export default Header;
