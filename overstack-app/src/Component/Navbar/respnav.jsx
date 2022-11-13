import React, { useState } from "react";
import "./respnav.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RespNav() {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="flex-box" style={{ display: "flex" }}>
        <div className="menu-btn">
          <button onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div
          className="overstocklogo"
         
        >
            <Link to="/"><img
            className="overstockIndex"
         src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
            alt=""
          /></Link> 
        </div>
        <div className="class-input">
          <div>
            <input type="text" placeholder="Search" />
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
          <Link to="/list">  <img src="https://i.postimg.cc/B6TrjykP/Heart.png" alt="" /></Link>
          </div>
        
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
         
          className="class-account"
        >
          <div className="Cart__Icon-Image" style={{fontSize:"25px"}}>
            {/* <img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" />
            
            */}
          <Link to="/Cart">  <FaShoppingCart/></Link>
          </div>
          {/* <p style={{ margin: "auto" }}>{0}</p> */}
        </div>
      </div>

      <div
        className={`${show ? "show-div" : "hide-div"}`}
        onClick={() => setShow(!show)}
      >
        <div>
          <Link to="/mug">Mugs</Link>
        </div>
        <div>
          <Link to="/cookingCutters">Cooking Cutters</Link>
        </div>
        <div>
          <Link to="/fryer">Air Fryers</Link>
        </div>
        <div>
          <Link to="/mixers">Mixers</Link>
        </div>
        <div>
          <Link to="/lamps">Lamps</Link>
        </div>
        <div>
          <Link to="/towels">Towels</Link>
        </div>
        <div>
          <Link to="/blankets">Blankets</Link>
        </div>
        <div>
          <Link to="/tree">Tree Skirts</Link>
        </div>
        <div>
          <Link to="/garland">Garlands</Link>
        </div>
      </div>
    </div>
  );
}
