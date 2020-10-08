import { Product } from "./types.ts";
import productService from "./product.service.ts";

// @desc    get all products
// @route   GET /api/v1/product
const query = async ({ response: res }: { response: any }) => {
  const products: Product[] = await productService.query();
  res.status = 200;
  res.body = products;
};

// @desc    get all products
// @route   GET /api/v1/product
const add = async (
  { request: req, response: res }: { request: any; response: any },
) => {
  const product = await req.body().value;
  if (!req.hasBody) {
    res.status = 404;
    res.body = {
      success: false,
      msg: "No data recieved",
    };
  } else {
    const addedProduct: Product = await productService.add(product);
    res.status = 200;
    res.body = {
      success: true,
      data: addedProduct,
    };
  }
};

// @desc    get single product
// @route   GET /api/v1/product/:id
const getById = async (
  { params, response: res }: { params: { id: string }; response: any },
) => {
  const productId = params.id;
  const product: Product | undefined = await productService.getById(productId);
  if (product) {
    res.status = 200;
    res.body = {
      success: true,
      data: product,
    };
  } else {
    res.status = 404;
    res.body = {
      success: false,
      msg: "No product Found",
    };
  }
};

// @desc    update single product
// @route   PUT /api/v1/product/:id
const update = async (
  { request: req, response: res }: { request: any; response: any },
) => {
  const product: Product = await req.body().value;
  if (!req.hasBody) {
    res.status = 404;
    res.body = {
      success: false,
      msg: "No data recieved",
    };
  } else {
    const updatedProduct = await productService.update(product);
    res.status = 200;
    res.body = {
      success: true,
      data: updatedProduct,
    };
  }
};

// @desc    delete single product
// @route   DELETE /api/v1/product/:id
const remove = async (
  { params, response: res }: { params: { id: string }; response: any },
) => {
  const productId = params.id;
  const products: Product[] | undefined = await productService.remove(productId);
  if (products) {
    res.status = 200;
    res.body = {
      success: true,
      msg: "Product Successfuly removed",
    };
  } else {
    res.status = 404;
    res.body = {
      success: false,
      msg: "No product Found",
    };
  }
};

export { add, getById, query, remove, update };
