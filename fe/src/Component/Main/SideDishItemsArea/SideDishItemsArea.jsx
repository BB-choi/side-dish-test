import { useState, useEffect } from "react";
import menuCategoriesApi from "Service/menuCategoriesApi";
import Category from "./Category/Category";

const SideDishItemsArea = () => {
  const [sideDishItemsData, setSideDishItemsData] = useState([]);

  const fetchSideDishDatasByCategories = async () => {
    const data = await menuCategoriesApi.getDataByMenuCategory();

    console.log(data, "menuCategories");

    const menuCategoryDatas = menuCategories.map(
      ({ menuCategoryName, sideDishes }, idx) => {
        return [{ name: menuCategoryName, id: idx }, sideDishes];
      }
    );

    console.log(menuCategoryDatas);
    setSideDishItemsData(menuCategoryDatas);
  };

  useEffect(() => {
    fetchSideDishDatasByCategories();
  }, []);

  return sideDishItemsData.map(({ name, id }) => (
    <Category name={name} key={id} />
  ));
};

export default SideDishItemsArea;
