import "./Navbar.css";
import logo from "../../images/logo.png";
import cartlight from "../../images/cart-light.png";
import flag from "../../images/india.jpg";
const NavBar = () => {
  return (
    <>
      <header>
        <div className="logo">
          {/* <div className="name">amazon</div>
        <div className="domain">.in</div> */}
          <img src={logo} alt="" height="60px" width="120px" />
          &nbsp;
        </div>
        <div className="address">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span className="country">
            Hello
            <br />
            <small>Select your Address</small>
          </span>
        </div>
        <div className="search">
          <div className="dropdown">
            <span style={{display:"flex",alignItems:"center",gap:"2px"}}>
              All<i class="fa fa-caret-down"></i>
            </span>
          </div>
          <div className="inp">
            <input type="text" name="" id="sbar" placeholder="Search Amazon" />{" "}
          </div>
          <div className="search-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className="signcard">
          <div className="language">
            <span className="flag">
              <img src={flag} height="30px" width="40px" />
            </span>
            &nbsp;
            <span className="countryname">EN</span>
          </div>
          <div className="loglogout">
            Hello,
            <br />
            sign in Account & Lists{" "}
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          <div className="returnsOrders">
            Returns <br />& Orders
          </div>
          <div className="cart">
            <span className="items">0</span>
            <img src={cartlight} height="40px" width="60px" align="left" />
            &nbsp;
            <div className="cartxt">Cart</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
