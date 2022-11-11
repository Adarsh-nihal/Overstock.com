import "./Home.css";

export const Hero = () => {
  return (
    <div className="contianer-fluid">
      <div className="row">
        <div className="col">
          <a href="category.html">
            <div className="banner">
              <div className="bannerDiv">
                <div>
                  <img
                    className="bannerimg1"
                    src="https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-HP-A1-1400x550_INTL.webp"
                  />
                </div>
                <div>
                  <img
                    className="bannerimg2"
                    src="https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-HP-A1-1400x550_INTL.svg"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
