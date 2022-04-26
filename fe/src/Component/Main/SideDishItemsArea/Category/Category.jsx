import PropTypes from "prop-types";
import { CategoryWrapper, Title } from "./Category.styled";

const CategoryTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

const Category = ({ name }) => {
  return (
    <CategoryWrapper>
      <CategoryTitle name={name} />
    </CategoryWrapper>
  );
};

CategoryTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
