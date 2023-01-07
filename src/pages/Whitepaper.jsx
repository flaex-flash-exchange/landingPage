import React from "react";

import flaexWhitepaper from "../data/flaex-whitepaper.pdf";

const Whitepaper = () => {
  return (
    <div>
      <iframe
        style={{ width: "100%", height: "1000px" }}
        src={flaexWhitepaper}
        type="application/pdf"
        title="title"
        frameborder="0"
        border="0"></iframe>
    </div>
  );
};

export default Whitepaper;
