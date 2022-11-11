
export const Deals = ({ offers }) => {
    return (
      <div className="container-fluid universalSpacingX">
        <div className="row">
          <div className="col limitedtimeDiv">
            <div className="limitedtimeHeadingDiv">
              <h2 className="limitedtimeHeading">Limited-Time Deals</h2>
            </div>
          </div>
        </div>
  
        <div className="row universalSpacing">
          <div className="col">
            <div className="offerContainer">
              {offers.map((items) => {
                return (
                  <div className="offerCard">
                    <a
                      href="category.html"
                      className="offerCardLink"
                      onclick="page(`Rugs`)"
                    >
                      <div className="offerCardImgDiv">
                        <img
                          style={{ backgroundColor: "#FEF8E8" }}
                          className="offerCardImg"
                          src={items.src}
                          alt=""
                        />
                      </div>
                      <div className="offerCardTitleDiv">
                        <h3 className="title-xs offerCardTitle">{items.title}</h3>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };