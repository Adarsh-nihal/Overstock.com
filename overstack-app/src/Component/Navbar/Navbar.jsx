import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  ChevronDownIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../Redux/AuthReducer/action";

export default function Navbar() {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  const { isAdmin, isAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(logoutInitiate());
  };

  console.log(data);
  React.useEffect(() => {
    if (query) {
      setTimeout(() => {
        axios
          .get(`https://stock-server.onrender.com/products?q=${query}`)
          .then((r) => {
            setData(r.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, 2000);
    }
  }, [query]);

  return (
    <div>
      <div className="header">
        <div>
          <div className="overstocklogo">
            <Link to="/">
              {" "}
              <img
                className="overstockIndex"
                src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
                alt=""
              />
            </Link>
          </div>
          <div className="class-input">
            <div>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <img src="https://i.postimg.cc/tgWqzB8p/Search-1.png" alt="" />
            </div>
          </div>
          <div id="account1" className="class-account class-account-common">
            <Link to="/login">
              {" "}
              <img src="https://i.postimg.cc/RCb3PDNz/User.png" alt="" />
            </Link>
            {/* <div onclick="window.location.href='signup.html'">Account</div> */}
            <div className="chevronup">
              <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
            </div>
            <div className="account-dropdown-content">
              <div>My Account</div>
              <div>My Orders</div>
              <div>My Reviews</div>
              <div>Gift Cards</div>
              <div>Help</div>
              {isAuth ? (
                <div onClick={handleSignout}>Sign Out</div>
              ) : (
                <div>Sign in</div>
              )}
            </div>
          </div>
          <div className="class-account class-account-common">
            <div>
              <Link to="/list">
                {" "}
                <img src="https://i.postimg.cc/B6TrjykP/Heart.png" alt="" />
              </Link>
            </div>
            {/* <div>Lists</div> */}
            <div className="chevronup">
              <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
            </div>
            <div
              className="account-dropdown-content"
              style={{ right: -100 + "%" }}
            >
              <div>Favorites</div>
              <div>Save for Later</div>
              <div>View All My Lists</div>
              <div>Find a List</div>
            </div>
          </div>
          <div id="cart1" className="class-account">
            <div
              className="Cart__Icon-Image"
              style={{ fontSize: " 25px", display: "flex", gap: "18px" }}
            >
              {/* <img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" /> */}
              <Link to="/Cart">
                {" "}
                <FaShoppingCart />
              </Link>
              <Link to="/Cart">
                {" "}
                <MdNotificationsActive />
              </Link>
            </div>

            {/* <div>Cart</div> */}
          </div>
          <div></div>
        </div>
        <div className="section-div">
          <div>
            <Link to="mug">Mugs</Link>
          </div>
          <div>
            <Link to="cookingCutters">Cooking Cutters</Link>
          </div>
          <div>
            <Link to="fryer">Air Fryers</Link>
          </div>
          <div>
            <Link to="mixers">Mixers</Link>
          </div>
          <div>
            <Link to="lamps">Lamps</Link>
          </div>
          <div>
            <Link to="towels">Towels</Link>
          </div>
          <div>
            <Link to="blankets">Blankets</Link>
          </div>
          <div>
            <Link to="tree">Tree Skirts</Link>
          </div>
          <div>
            <Link to="garland">Garlands</Link>
          </div>
          {isAdmin ? (
            <div style={{ fontWeight: "900", color: "red" }}>
              <Link to="/admin">Admin</Link>
            </div>
          ) : null}
        </div>
      </div>
      {query.length > 0 && (
        <div
          style={{
            width: "63%",
            overflow: "scroll",
            height: "600px",
            zIndex: "3",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            position: "absolute",
            left: "14%",
            top: "-12px",
            backgroundColor: "#FED7D7",
            margin: "auto",
          }}
        >
          {query.length > 0 && data.length>0 &&
            data.map((item) => (
              <div
                key={item.id}
                style={{ margin: "auto", paddingLeft: "20px" }}
              >
                <div>
                  {" "}
                  <Icon
                    className="heart"
                    cursor="pointer"
                    m="5px"
                    padding="2px"
                    w={6}
                    h={5}
                    border="1px solid grey"
                    borderRadius="50%"
                    as={FiHeart}
                  ></Icon>
                </div>
                <div style={{ margin: "auto" }}>
                  <img width="90%" src={item.image} />{" "}
                </div>
                <span>Featured</span>
                <div style={{ display: "flex" }}>
                  <h1>INR {item.price}</h1>

                  <Link to={`/products/${item.id}`}>
                    {" "}
                    <span
                      onClick={() => setData([])}
                      style={{ marginLeft: "20px" }}
                    >
                      <ChevronDownIcon />
                      More details
                    </span>
                  </Link>
                </div>
                {item.count == 2 && (
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  </div>
                )}
                {item.count == 3 && (
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  </div>
                )}
                {item.count == 4 && (
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  </div>
                )}
                {item.count == 5 && (
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  </div>
                )}

                <div style={{ paddingRight: "30px" }}>
                  <p>{item.name}</p>
                </div>
                <div>
                  <h3>
                    {" "}
                    <CheckCircleIcon />
                    Free Shipping
                  </h3>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
