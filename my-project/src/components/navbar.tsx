/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Nav, NavLink, NavbarBrand } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="grid grid-cols-3 gap-1">
          <div className="button-container">
            <button className="navbar-button">HOME</button>
            <button className="navbar-button">THE STUDIO</button>
            <button className="navbar-button">PHOTOSHOOTS</button>
            <button className="navbar-button">PRODUCTS</button>
          </div>
          <div>
            <img
              src="https://www.jemmaslaterphotography.com/wp-content/uploads/2021/02/Watermark-1%28pp_w1600_h470%29.png"
              alt="logo"
              className="logo center"
              width={300}
              height={300}
            />
          </div>
          <div className="button-container">
            <button className="navbar-button">FAQ&apos;S</button>
            <button className="navbar-button">REVIEWS</button>
            <button className="navbar-button">BLOG</button>
            <button className="navbar-button">CONTACT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
