import './style.css'
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards.js";
import { getCartProductFromLS } from './getCartProducts.js';
import { updateCartValue } from './updateCartValue.js';

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);