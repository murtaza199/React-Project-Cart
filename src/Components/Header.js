import React from "react";
function Header(props) {
//   console.log("Home", props.cartData);
  return (
    <div>
      <span className="cart-count">{props.cartData.length}</span>
      <div className="add-to-cart">
        <img src="https://www.mcicon.com/wp-content/uploads/2021/06/Cart-03.jpg" />
      </div>
    </div>
  );
}
export default Header;
