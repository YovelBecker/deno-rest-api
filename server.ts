import { Application } from "https://deno.land/x/oak/mod.ts";
import productRoutes from './api/product/product.routes.ts';

const port = 3000;
let app = new Application();


app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());

console.log(`Server running on port ${port}`);
await app.listen({ port });
