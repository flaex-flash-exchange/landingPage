const SecHeader = ({ Logo, MenuInfo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#home">
          <span>
            <img draggable="false" src={Logo} alt="logo" />
          </span>
        </a>
        <div className="overriden-text">
          <h4>flæx</h4>
          {/* flæx */}
        </div>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {MenuInfo &&
              MenuInfo.map((item, key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>
                    {item.nameLink}
                  </a>
                </li>
              ))}
            <li className="lh-55px"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
