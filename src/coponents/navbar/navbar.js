import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

import logo from "./Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        style={{ backgroundColor: "#e3f2fd", padding: 0, position: "fixed", display: "flex", width: "100vw",}}
      >
        <MDBContainer style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <MDBNavbarBrand href="#" style={{ padding: 0 }}>
              <img
                src={logo}
                style={{
                  height: "30px",
                  width: "60px",
                }}
                onClick={() => navigate("/")}
              />
            </MDBNavbarBrand>
            <div style={{ flex: 1, textAlign: "center", padding: 0 }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Student Council 2023-2024
              </h3>
            </div>
            {/* <MDBNavbarBrand href="#" style={{ padding: 0 }}>
              <a
                onMouseOver={(e) => {
                  e.currentTarget.style.textDecoration = "underline"; // Add underline on hover
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.textDecoration = "none"; // Remove underline on mouse out
                }}
                onClick={() => navigate("/")}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                  }}
                >
                  VOTING APP
                </span>
              </a>
            </MDBNavbarBrand> */}
            <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' 
            style={{
              borderRadius:'5rem',
              height: "1px",
              fontSize: "12px"
            }}/>
          </form>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
