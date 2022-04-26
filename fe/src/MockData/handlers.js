import { rest } from "msw";
import { event, categoryMenus, menuData } from "MockData/MockData";

const handlers = [
  rest.get(`/api/event-categories/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(event));
  }),
  rest.get(`/api/event-categories/${/[0-9]$/}/sidedishes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
  rest.get(/(img)*/, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
  rest.get(`/api/menu-categories/${/[0-9]$/}/sidedishes`, (req, res, ctx) => {
    console.log(menuData, "handlers");
    return res(ctx.status(200), ctx.delay(100), ctx.json(menuData));
  }),
];

export default handlers;
