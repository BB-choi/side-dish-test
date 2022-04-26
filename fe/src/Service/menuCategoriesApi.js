import axios from "axios";

const baseURL = `/api/menu-categories/`;
const client = axios.create({ baseURL });

const menuCategoriesApi = {
  getDataByMenuCategory: async () => {
    const response = await client.get();
    return response.data;
  },
};

export default menuCategoriesApi;
