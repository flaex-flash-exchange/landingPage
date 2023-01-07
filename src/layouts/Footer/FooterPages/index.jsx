import { FooterPattern, FooterLogo } from "../../../utils/allImgs";
import "../Footer.scss";

import IcoName from "../../../data/data-layout/Footer/data-IcoName.json";
import TextFooter from "../../../data/data-layout/Footer/data-TextFooter.json";

const FooterPages = () => {
  return (
    <footer className="footer-area bg-img mt-5" style={{ backgroundImage: `url(${FooterPattern})` }}>
      <div className="footer-area bg-img" style={{ backgroundImage: `url(${FooterPattern})` }}>
        <div className="footer-content-area demo">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                    <div className="footer-logo">
                      <a href="#home">
                        <img draggable="false" src={FooterLogo} alt="logo" />
                      </a>
                      <h4>flæx</h4>
                    </div>
                  </div>
                  <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                    {IcoName &&
                      IcoName.map((item, key) => (
                        <a key={key} href={item.link}>
                          <i className={item.IcoName} aria-hidden="true" />
                        </a>
                      ))}
                  </div>
                </div>
              </div>

              {TextFooter &&
                TextFooter.map((item, key) => (
                  <div key={key} className={item.classBlock}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={item.classInfo} data-wow-delay="0.3s">
                        <h5>{item.title}</h5>
                        <a href={item.link1}>
                          <p>{item.text1}</p>
                        </a>
                        <a href={item.link2}>
                          <p>{item.text2}</p>
                        </a>
                        <a href={item.link3}>
                          <p>{item.text3}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPages;
