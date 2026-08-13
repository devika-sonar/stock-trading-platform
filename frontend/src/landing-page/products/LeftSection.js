import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  mt-4 mb-5">
      <div className="row mt-5">
        <div className="col-6 p-3">
          <img src={imageURL} className="img-fluid" />
        </div>
        <div className="col-6 p-5" style={{ marginLeft: "0px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              LearnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              {" "}
              <img
                src="images/googlePlayBadge.svg"
                alt="Google Play Badge"
              />{" "}
            </a>
            <a href={appStore}>
              <img src="images/appStoreBadge.svg" alt="App Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
