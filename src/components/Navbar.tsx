import React from "react";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              style={styles.dropdownItem}
              onMouseEnter={(e) =>
                Object.assign((e.target as HTMLElement).style, styles.dropdownItemHover)
              }
              onMouseLeave={(e) =>
                Object.assign((e.target as HTMLElement).style, styles.dropdownItem)
              }
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
        return null;
      });

      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id="basic-nav-dropdown"
          style={styles.dropdown}
          menuVariant="dark"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          style={styles.navLink}
          onMouseEnter={(e) =>
            Object.assign((e.target as HTMLElement).style, styles.navLinkHover)
          }
          onMouseLeave={(e) =>
            Object.assign((e.target as HTMLElement).style, styles.navLink)
          }
        >
          {item.name}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <BootstrapNavbar expand="lg" style={styles.navbar}>
      <BootstrapNavbar.Brand style={styles.brand}>
        {import.meta.env.VITE_TEAM_NAME}
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle
        aria-controls="basic-navbar-nav"
        style={styles.toggle}
      />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="left-aligned" style={styles.nav}>
          {pages}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

const styles = {
  navbar: {
    background: "linear-gradient(to right, #ff0081, #ff8c00)", // Neon gradient background
    boxShadow: "0 20px 8px rgba(0, 0, 0, 0.6)", // Subtle shadow for depth
    padding: "0.5rem 2rem", // Adjust padding as needed
  },
  brand: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.8)", // Neon effect
  },
  toggle: {
    borderColor: "#fff", // Toggle border color
  },
  nav: {
    margin: "0 auto", // Center nav items
    marginLeft: "29rem",
    fontSize: "1.4rem", // Shift items slightly to the right
  },
  navLink: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "0 0 3px rgba(255, 255, 255, 0.6)", // Neon effect
    transition: "color 0.3s ease, text-shadow 0.3s ease",
    padding: "0.5rem 1rem", // Adjust padding as needed
  },
  navLinkHover: {
    color: "#ff8c00", // Change color on hover
    textShadow: "0 0 8px rgba(255, 140, 0, 1)", // Enhance the neon effect on hover
  },
  dropdown: {
    backgroundColor: "#222 !important", // Force the background color to apply
  },
  dropdownItem: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "0 0 3px rgba(255, 255, 255, 0.6)", // Neon effect
    backgroundColor: "#333 !important", // Force the background color to apply
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  dropdownItemHover: {
    backgroundColor: "#444 !important", // Darken background on hover
    color: "#ff8c00", // Change color on hover
    textShadow: "0 0 8px rgba(255, 140, 0, 1)", // Enhance the neon effect on hover
  },
};
