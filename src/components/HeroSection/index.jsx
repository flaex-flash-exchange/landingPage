const SecHeroSection = ({
  ClassSec = "",
  ClassDiv = "",
  title = "",
  link1 = "",
  img = "",
  HomeDemo1Or3Or4Or5Or6 = true,
  HomeDemo1Or4Or5Or6 = true,
}) => {
  return (
    <section className={ClassSec} id="home">
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <h1>{title}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">
                  We combine the deepest liquidity of traditional DEXes with the richest Money Market of Lending
                  Protocols to create something truly remarkable!
                </p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a href="https://app.flaex.io/" className="btn more-btn mr-3">
                    {link1}
                  </a>
                </div>
              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" src={img} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHeroSection;
