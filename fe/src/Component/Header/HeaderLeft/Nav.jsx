import PropTypes from "prop-types";
import Menu from "./Menu";
import { StyledNav, StyledUl } from "./Nav.styled";

const Nav = ({
  state: { handleMouseEvent, checkIsOpen, handleSubMenuSize },
}) => {
  return (
    <StyledNav>
      <StyledUl>
        <Menu state={{ handleMouseEvent, checkIsOpen, handleSubMenuSize }} />
      </StyledUl>
    </StyledNav>
  );
};

Nav.propTypes = {
  state: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Nav;
