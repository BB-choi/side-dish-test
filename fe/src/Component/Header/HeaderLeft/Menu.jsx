import PropTypes from "prop-types";
import { useEffect } from "react";
import { MenuDatas } from "../../../MockData/MockData";
import SubMenuUl from "./Menu.Styled";

let maxSubMenuSize = 0;

const SubMenu = ({ subMenuDatas }) => {
  maxSubMenuSize =
    subMenuDatas.length > maxSubMenuSize ? subMenuDatas.length : maxSubMenuSize;

  const subMenuList = subMenuDatas.map((subMenuData) => (
    <li key={subMenuData.id}>{subMenuData.name}</li>
  ));

  return <SubMenuUl>{subMenuList}</SubMenuUl>;
};

const Menu = ({
  state: { handleMouseEvent, checkIsOpen, handleSubMenuSize },
}) => {
  useEffect(() => {
    handleSubMenuSize(maxSubMenuSize);
  }, [maxSubMenuSize]);

  const subMenuContents = ({ subMenu }) => {
    return checkIsOpen() ? (
      <SubMenu subMenuDatas={subMenu} handleSubMenuSize={handleSubMenuSize} />
    ) : null;
  };

  return MenuDatas.map(({ id, name, subMenu }) => (
    <li
      key={id}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      {name}
      {subMenuContents({ subMenu, handleSubMenuSize })}
    </li>
  ));
};

SubMenu.propTypes = {
  subMenuDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
