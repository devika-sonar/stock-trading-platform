import React from 'react';
function RightSection({imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {

        
  return (
    <div className="container  mt-4">
      <div className="row mt-5 mb-5">
        
        <div className="col-6 p-5" style={{ marginLeft: "0px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            

            <a
              href={learnMore}
              style={{  textDecoration: "none" }}
            >
              LearnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
           
              
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
     );
}

export default RightSection;