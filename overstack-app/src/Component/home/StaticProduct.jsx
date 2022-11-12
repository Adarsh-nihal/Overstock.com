
import "./Home.css";

export const StaticProd = ({ prod }) => {
  return (
    <>
      <div class="row">
        <div class="col limitedtimeDiv">
          <div class="limitedtimeHeadingDiv">
            <h2 class="limitedtimeHeading">Fresh Finds In Each Category</h2>
          </div>
        </div>
      </div>

      <div class="row universalSpacing">
        <div class="col">
          <div class="categoryContainer">
            {prod.map((item) => {
              return (
                <>
                  <div class="categoryCard">
                    <a
                      href=""
                      class="categoryCardLink"
                      onclick="page(`Furniture`)"
                    >
                      <div class="categoryCardImgDiv">
                        <img class="categoryCardImg" src={item.src} alt="" />
                      </div>
                      <div class="categoryCardTitleDiv">
                        <h3 class="title-xs categoryCardTitle">{item.Title}</h3>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};