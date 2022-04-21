import { useState } from "react";
import StyledHeader from "./Header.styled";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuSize, setSubMenuSize] = useState(0);

  const checkIsOpen = () => {
    return isOpen;
  };

  const handleMouseEvent = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuSize = (count) => {
    setSubMenuSize(count);
  };

  return (
    <StyledHeader isOpen={isOpen} subMenuSize={subMenuSize}>
      <HeaderLeft
        state={{ handleMouseEvent, checkIsOpen, handleSubMenuSize }}
      />
      <HeaderRight />
    </StyledHeader>
  );
};

export default Header;
