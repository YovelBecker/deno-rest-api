import { Router } from "https://deno.land/x/oak/mod.ts";
import { getById, query, remove, update, add } from "./product.controller.ts";

const router = new Router();

router
  .get("/api/v1/product", query)
  .get("/api/v1/product/:id", getById)
  .put("/api/v1/product", update)
  .delete("/api/v1/product/:id", remove)
  .post("/api/v1/product", add);

export default router;
