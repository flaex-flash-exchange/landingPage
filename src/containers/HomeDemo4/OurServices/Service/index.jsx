const Service = ({ img, title, para }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="service_single_content text-center mb-100" data-aos="fade-up">
        <div className="service_icon">
          <img draggable="false" src={img} alt="" />
        </div>
        <h6>{title}</h6>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Service;
