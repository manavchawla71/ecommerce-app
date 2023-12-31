import React from "react";
import "./Navbar.css";
import { Categories } from "../../Components/Index";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/index";
import { useState } from "react";
import { HamburgurMenuList } from "../../Components/Index";
export const Navbar = () => {
  const { dispatch, state } = useFilter();
  const { cartList, wishList } = state;
  const [isHamburgurOpen, setIsHamburgurOpen] = useState(false);
  const sum = (acc, curr) => (acc = acc + curr.count);
  const cartCount = cartList.length > 0 ? cartList.reduce(sum, 0) : 0;

  return (
    <>
      <nav className="nav-standard flex navigation">
        <div className="hamburger icon-badge">
          {isHamburgurOpen ? (
            <MdCancel
              className="icon-hover"
              onClick={() => setIsHamburgurOpen((prevStatus) => !prevStatus)}
            />
          ) : (
            <GiHamburgerMenu
              className="icon-hover"
              onClick={() => setIsHamburgurOpen((prevStatus) => !prevStatus)}
            />
          )}
        </div>

        <div className="min-bold nav-standard-item-sectionOne flex list">
          <Link to="/" className="ranger-ui navbar-name">
            RangerShoe
          </Link>
          <Link
            to="/product-listing"
            className="category all-category"
            onClick={() => dispatch({ type: "CLEAR_CATEGORY" })}
          >
            All
          </Link>
        </div>
        <div>
          <Categories />
        </div>
        <ul className="nav-standard-item-sectionTwo flex list">
          <li className="nav-standard-list-item min-bold">
            <div>LOGIN / SIGNUP</div>
          </li>
          <li className="nav-standard-list-item min-bold">
            <Link to="/wishlist-page">
              <button className="badge-on-icon ">
                <AiFillHeart className="icon-size icon-hover" />
                <div className="badge-on-icon-notify flex-row-center">
                  <span>{wishList.length}</span>
                </div>
              </button>
            </Link>
          </li>
          <li className="nav-standard-list-item min-bold">
            <Link to="/cart-page">
              <button className="badge-on-icon">
                <RiShoppingCart2Fill className="icon-badge icon-size icon-hover" />
                <div className="badge-on-icon-notify flex-row-center">
                  <span>{cartCount}</span>
                </div>
              </button>
            </Link>
          </li>
          <li className="nav-standard-list-item min-bold">
            <button className="button">
              <FiLogOut className="icon-size icon-hover" />
            </button>
          </li>
        </ul>
      </nav>
      {isHamburgurOpen && (
        <HamburgurMenuList
          className="hamburgur-menu"
          setIsHamburgurOpen={setIsHamburgurOpen}
        />
      )}
    </>
  );
};
