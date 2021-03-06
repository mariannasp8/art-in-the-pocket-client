import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../assets/icons/home.2.png";
import heartIcon from "../assets/icons/heart.2.png";
import collectionIcon from "../assets/icons/collection.2.png";
import profileIcon from "../assets/icons/profile.2.png";
import searchIcon from "../assets/icons/search.2.png";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNavBottom = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: rgba(100, 100, 100, 0.5);
  ${"" /* border: 1px solid white; */}
  width: 80%;
  height: 7vh;
  position: fixed;
  margin-top: 745px;
  border-radius: 24px 24px 24px 24px;
  z-index: 99;
`;

const SelectedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
`;
const NavBarLink = styled(NavLink)`
  ${"" /* border: 1px solid blue; */}
  text-decoration: none;
  color: black;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavIcons = styled.img`
  margin-bottom: 0;
  width: 8vw;
`;

function NavbarBottom() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <StyledPage>
        <StyledNavBottom>
          <NavBarLink to="/">
            <SelectedIcon>
              <NavIcons src={homeIcon} />
            </SelectedIcon>
          </NavBarLink>
          <NavBarLink to="/favorite">
            <SelectedIcon>
              <NavIcons src={heartIcon} alt="Heart Icon" />
            </SelectedIcon>
          </NavBarLink>
          <NavBarLink to="/collection">
            <SelectedIcon>
              <NavIcons src={collectionIcon} alt="Collection Icon" />
            </SelectedIcon>
          </NavBarLink>
          <NavBarLink to={`/profile`}>
            <SelectedIcon>
              <NavIcons src={profileIcon} alt="Profile Icon" />
            </SelectedIcon>
          </NavBarLink>
          <NavBarLink to="/search">
            <SelectedIcon>
              <NavIcons src={searchIcon} alt="Search Icon" />
            </SelectedIcon>
          </NavBarLink>
        </StyledNavBottom>
      </StyledPage>
    </>
  );
}

export default NavbarBottom;
