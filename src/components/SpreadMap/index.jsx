const SpreadMap = ({ Wwhitepaper, SectionIcon11 }) => {
  return (
    <section className="spread-map download" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false" src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Download Our Whitepaper</h4>
              <p className="text-white">Curious to learn how we facilitate our Trading Exchange?</p>
              <a className="btn dream-btn mt-30" href="/whitepaper">
                Get Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMap;
