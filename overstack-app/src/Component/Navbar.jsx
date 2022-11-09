import React from "react"
// import {Link } from "react-router-dom"
import "./navbar.css"



export default function Navbar(){
  return (
    <div className="header">
    <div>
        <div
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="menupng"
        ></div>

        <div className="overstocklogo" onClick={() => {
            window.location.href = "/"
        }}>
            <img
                className="overstockIndex"
                src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
                alt=""
            />
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
            <a href="/login">
                {" "}
                <img src="https://i.postimg.cc/RCb3PDNz/User.png" alt="" />
            </a>
            <div onclick="window.location.href='signup.html'">
                Account
            </div>
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
            <div>Lists</div>
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
        <div id="cart1" onClick={() => {
            window.location.href = "/cart"
        }} className="class-account">
            <div className="Cart__Icon-Image">
                <img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" />
            </div>
            <p style={{margin : "auto"}}>{0}</p>
            <div>Cart</div>
        </div>
    </div>
    <div className="section-div">
        <div>
            <a href="">Furniture</a>
        </div>
        <div>
            <a href="">Rugs</a>
        </div>
        <div>
            <a href="">Decor</a>
        </div>
        <div>
            <a href="">Bed & Bath</a>
        </div>
        <div>
            <a href="">Home Improvement</a>
        </div>
        <div>
            <a href="" >Kitchen</a>
        </div>
        <div>
            <a href="">Outdoor</a>
        </div>
        <div>
            <a href="">Jewelry</a>
        </div>
        <div>
            <a href="">Lighting</a>
        </div>
        <div>
            <a href="">Kids & Baby</a>
        </div>
        <div>
            <a href="">More</a>
        </div>
        <div>
            <a href="">Holiday & Gifts</a>
        </div>
        <div>
            <a href="">Sales & Deals</a>
        </div>
    </div>
    <div className="dropdown-content-main dropdown-content-part">
        <div>
            <div>
                <div className="dark-div">Living Room Furniture</div>
                <div>Sofas & Couches</div>
                <div>Sectionals</div>
                <div>Benches</div>
                <div>Ottomans & Poufs</div>
                <div>Accent Chairs</div>
                <div>Recliners</div>
                <div>Coffee & Accent Tables</div>
                <div>TV Stands</div>
            </div>
            <div>
                <div className="dark-div">Patio & Outdoor Furniture</div>
                <div>Patio Furniture Sets</div>
                <div>Sofas, Chairs & Sectionals</div>
                <div>Dining Sets</div>
                <div>Coffee & Side Tables</div>
                <div>Chaise Lounges</div>
                <div>Adirondack Chairs</div>
            </div>
        </div>
        <div>
            <div>
                <div className="dark-div">Bedroom Furniture</div>
                <div>Beds</div>
                <div>Bedroom Sets</div>
                <div>Headboards</div>
                <div>Bed Frames</div>
                <div>Dressers & Chests</div>
                <div>Nightstands</div>
                <div>Armoires & Wardrobes</div>
                <div>Mattresses</div>
                <div>Kids Beds</div>
            </div>
            <div>
                <div className="dark-div">Office Furniture</div>
                <div>Desks</div>
                <div>Office Chairs</div>
                <div>Small Space Desks</div>
                <div>Office Shelves & Storage</div>
                <div>File Cabinets</div>
            </div>
        </div>
        <div>
            <div>
                <div className="dark-div">Dining, Kitchen & Bar</div>
                <div>Kitchen & Dining Sets</div>
                <div>Kitchen & Dining Chairs</div>
                <div>Kitchen & Dining Tables</div>
                <div>Counter & Bar Stools</div>
                <div>Bar Tables</div>
                        <div>Buffets & Sideboards</div>
                        <div>Home Bars</div>
                        <div>Kitchen Islands & Carts</div>
                        <div>Kitchen Furniture</div>
                    </div>
                    <div>
                        <div className="dark-div">More</div>
                        <div>Entryway</div>
                        <div>Bathroom</div>
                        <div>Home Gym</div>
                        <div>Rec Room</div>
                        <div>Small Space Living</div>
                    </div>
                </div>
                <div>
                    <div className="dropdown-img-cont">
                        <div>
                            <img
                                src="https://i.postimg.cc/tg7z1Kz4/Warrenton-Boho-Handcrafted-2-Door-Acacia-Wood-Sideboard-by-Christopher-Knight-Home.jpg"
                                alt=""
                            />
                        </div>
                        <div>extra 15% off</div>
                        <div>Select Furniture by Christopher Knight*</div>
                    </div>
                    <div>
                        <div className="dark-div">More Ways to Shop</div>
                        <div className="red-div">Featured Sales</div>
                        <div className="red-div">New Arrivals</div>
                        <div className="red-div">Clearance</div>
                        <div className="red-div">Furniture Advice</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
