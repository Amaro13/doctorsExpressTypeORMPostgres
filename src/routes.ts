import { DoctorsController } from "./controller/DoctorsController";

export const Routes = [
  {
    method: "get",
    route: "/doctors",
    controller: DoctorsController,
    action: "all",
  },
  {
    method: "get",
    route: "/doctors/:id",
    controller: DoctorsController,
    action: "one",
  },
  {
    method: "post",
    route: "/doctors",
    controller: DoctorsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/doctors/:id",
    controller: DoctorsController,
    action: "remove",
  },
];
