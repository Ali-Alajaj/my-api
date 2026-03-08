import express from 'express';
import products from '../arrays/products.js';
import dayjs from 'dayjs';
import url from 'url';
import path from 'path';

function generateRandomCode(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

function calculateDeliveryDate(deliveryOptionId) {
  if (deliveryOptionId === '1') {
    return {priceCents: 0, deliveryDays: 9}
  } else if (deliveryOptionId === '2') {
    return {priceCents: 499, deliveryDays: 3}
  } else if (deliveryOptionId === '3') {
    return {priceCents: 999, deliveryDays: 1}
  };
};

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const route = express.Router();

route.get('/products', (req, res, next) => {
  res.json(products);
});

route.get('/documentations', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../documentations/clickmart-doc.html'));
});

route.post('/orders', (req, res, next) => {
  const orderCart = req.body;
  if (!Array.isArray(orderCart)) {
    const error = new Error('Please send and array.')
    error.status = 400;
    return next(error);
  }

  let badData = false;
  orderCart.forEach((cartItem) => {
    if (!cartItem.id || !cartItem.quantity || !cartItem.deliveryOptionId) {
      badData = true
    }
  });

  if (badData) {
    const error = new Error('Please send all required data');
    error.status = 400;
    return next(error);
  }

  let notValidIds = false;
  for (let i = 0; i < orderCart.length; i++) {
    const orderProductId = orderCart[i].id;
    let correctId = false;

    products.forEach((product, index) => {
      if (orderProductId === product.id) {
        correctId = true;
      }
    });
    if (!correctId) {
      notValidIds = true;
      break;
    }
  }

  if (notValidIds) {
    const error = new Error('Please send correct IDs');
    error.status = 400;
    return next(error);
  }

  let badDeliveryOption = false;
  orderCart.forEach((cartItem) => {
    if ((cartItem.deliveryOptionId !== '1') && (cartItem.deliveryOptionId !== '2') && (cartItem.deliveryOptionId !== '3')) {
      badDeliveryOption = true;
    }
  });

  if (badDeliveryOption) {
    const error = new Error('Please add correct delivery options.');
    error.status = 400;
    return next(error);
  }

  let productsCost = 0;
  let totalCostCents = 0;
  let deliveryCostCents = 0;
  let totalBeforeTax = 0;
  let taxCents = 0;
  orderCart.forEach((cartItem => {
    products.forEach((product) => {
      if (product.id === cartItem.id) {
        productsCost += product.price * cartItem.quantity;
      }
    });
  }));

  let productsCostCents = productsCost * 100;

  orderCart.forEach((cartItem) => {
    const deliveryPriceCents = calculateDeliveryDate(cartItem.deliveryOptionId).priceCents;
    deliveryCostCents += deliveryPriceCents;
  });

  totalBeforeTax = productsCostCents + deliveryCostCents;
  taxCents = Math.round(totalBeforeTax / 10);
  totalCostCents = totalBeforeTax + taxCents;
  

  const devCart = [];
  orderCart.forEach((cartItem) => {
    devCart.push({
      id: cartItem.id,
      quantity: cartItem.quantity,
      estimatedDeliveryDate: dayjs().add(calculateDeliveryDate(cartItem.deliveryOptionId).deliveryDays, 'day').format()
    });
  });

  res.status(201).json({
    orderId: generateRandomCode(),
    orderTime: Math.round(dayjs() / 1000),
    totalCostCents: totalCostCents,
    products: devCart
  });
});

export default route;
