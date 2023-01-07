import SectionHeading from "../../../components/SectionHeading";

import Service from "./Service";

const OurServices = ({ data }) => {
  return (
    <section className="our_services_area section-padding-0-0 clearfix" id="features">
      <div className="container">
        <SectionHeading
          title="Why choose us"
          text="Our Main Features"
          para="With the perfect combination of DEXes and Lending Protocols, we are able to provide a seamless Margin
            Trading Experience that has"
        />
        <div className="row">
          {data && data.map((item, key) => <Service key={key} img={item.img} title={item.title} para={item.para} />)}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
