import React , {useState} from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  const[selectMenu, setSelectMenu]= useState(0);
  const[IsProfileDropdownOpen, setIsProfileDropdownOpen ]= useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!IsProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/"  onClick={()=> handleMenuClick(0)}>
            <p className={selectMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>                    
          </li>
          <li>
             <Link style={{textDecoration: "none"}} to="/Orders"  onClick={()=> handleMenuClick(1)}>
            <p className={selectMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>   
          </li>
          <li>
             <Link style={{textDecoration: "none"}} to="/Holdings"  onClick={()=> handleMenuClick(2)}>
            <p className={selectMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>   
          </li>
          <li>
             <Link style={{textDecoration: "none"}} to="/Positions"  onClick={()=> handleMenuClick(3)}>
            <p className={selectMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>   
          </li>
          <li>
             <Link style={{textDecoration: "none"}} to="/Funds"  onClick={()=> handleMenuClick(4)}>
            <p className={selectMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>   
          </li>
          <li>
             <Link style={{textDecoration: "none"}} to="/Apps"  onClick={()=> handleMenuClick(6)}>
            <p className={selectMenu===6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>   
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    // </div>
  );
};

export default Menu;
