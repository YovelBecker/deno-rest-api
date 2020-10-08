import { Product } from "./types.ts";
import { v4 } from "https://deno.land/std@0.74.0/uuid/mod.ts";


export default { query, getById, update, remove, add };

let gNextId:number = 101;
let products: Product[] = [
  {
    id: v4.generate(),
    name: "Product One",
    desc: "This is product one",
    price: 29.99,
  },
  {
    id: v4.generate(),
    name: "Product Two",
    desc: "This is product Two",
    price: 39.99,
  },
  {
    id: v4.generate(),
    name: "Product Three",
    desc: "This is product Three",
    price: 59.99,
  },
];

async function query() {
  return products;
}

async function add(product:Product){
    product.id = v4.generate();
    products.push(product);
    return product
}

async function getById(productId: string) {
  const product: Product | undefined = products.find((p) => p.id === productId);
  return product;
}

async function update(product: Product) {
  const idx: number = products.findIndex((p) => product.id === p.id);
  products = [...products.slice(0, idx), product, ...products.slice(idx + 1)];
  return product;
}

async function remove(productId: string) {
  const idx: number = products.findIndex((p) => productId === p.id);
  if(idx === -1) return
  products.splice(idx, 1);
  return products;
}
