import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {FaShoppingCart} from "react-icons/fa"

export default function Navbar() {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleFilter = (e) => {
    setQuery(e.target.value);
    // console.log(query)
  };
  console.log(data);
  React.useEffect(() => {
    if (query) {
      axios
        .get("http://localhost:8080/mugs", {
          params: {
            q: query,
          },
        })
        .then((r) => {
          setData(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [query]);

  return (
    <div>
      <div className="header">
        <div>
         
          <div
            className="overstocklogo"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img
              className="overstockIndex"
              src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
              alt=""
            />
          </div>
          <div className="class-input">
            <div>
              <input
                value={query}
                onChange={handleFilter}
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <img src="https://i.postimg.cc/tgWqzB8p/Search-1.png" alt="" />
            </div>
          </div>
          <div id="account1" className="class-account class-account-common">
            <a href="/login">
              {" "}
              <img src="https://i.postimg.cc/RCb3PDNz/User.png" alt="" />
            </a>
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
              <div>Sign Out</div>
            </div>
          </div>
          <div className="class-account class-account-common">
            <div>
              <img src="https://i.postimg.cc/B6TrjykP/Heart.png" alt="" />
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
          <div
            id="cart1"
            onClick={() => {
              window.location.href = "/cart";
            }}
            className="class-account"
          >
            <div className="Cart__Icon-Image" style={{fontSize:" 25px"}}>
              {/* <img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" /> */}
              <FaShoppingCart/>
            </div>
            
            {/* <div>Cart</div> */}
          </div>
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
        </div>
      </div>
      {/* {data.length>0 && <div style={{width:"70%", position:"absolute",left:"20%",height:"500px",margin:"auto",backgroundColor:"red",border:"1px solid red"}} >

</div>} */}
    </div>
  );
}
