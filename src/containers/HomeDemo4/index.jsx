import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { Services, OurPartnersInfo } from "../../data/data-containers/HomeDemo4/data-HomeDemo4.js";

// import PlatformIco from "../../data/data-containers/HomeDemo4/data-PlatformIco.json";
import RoadmapInfo from "../../data/data-containers/HomeDemo4/data-RoadmapInfo.json";

import { HomeDemo4Wwhitepaper, HomeDemo4About3 } from "../../utils/allImgs";

import "./style/HomeDemo4.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";

import SecHeroSection from "../../components/HeroSection";
import AboutOther from "../../components/AboutOther";
import SpreadMap from "../../components/SpreadMap";
import Roadmap from "../../components/Roadmap";
// import OurTeam from "../../components/OurTeam";
import OurPartners from "../../components/OurPartners";

import OurServices from "./OurServices";
// import OurPlatform from "./OurPlatform";

const HomeDemo4Container = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Home Template4" />
      <SecHeroSection
        ClassSec="hero-section section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        title="Decentralized Margin Trading Exchange"
        link1="Enter App"
        img={HomeDemo4About3}
      />
      <div className="clearfix" />
      <OurServices data={Services} />
      <AboutOther ClassTitle="gradient-text" />
      <SpreadMap Wwhitepaper={HomeDemo4Wwhitepaper} />
      <Roadmap data={RoadmapInfo} ClassSpanTitle="gradient-text blue" />
      {/* <OurTeam data={OurPartners} ClassSpanTitle="gradient-text blue" /> */}
      <OurPartners data={OurPartnersInfo} ClassSpanTitle="gradient-text blue" />
      {/* <Subscribe /> */}
      {/* <OurBlog data={OurBlogInfo} ClassSpanTitle="gradient-text blue" /> */}
      <FooterPages ClassSpanTitle="gradient-text blue" />
    </div>
  );
};

export default HomeDemo4Container;
