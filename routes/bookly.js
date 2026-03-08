import express from 'express';
import properties from '../arrays/properties.js';
import dayjs from 'dayjs';

const route = express.Router();

function generateRandomCode(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

route.get('/properties', (req, res, next) => {
  res.json(properties);
});

// https://68dae67223ebc87faa318cfc.mockapi.io/bookedProperties
route.post('/book', (req, res, next) => {
  const bookedProperty = req.body;
  if (!bookedProperty.checkinDate || !bookedProperty.checkoutDate || !bookedProperty.guests || !bookedProperty.propertyId) {
    const error = new Error('Please send all the required data.');
    error.status = 400;
    return next(error);
  }

  if (!(typeof bookedProperty.guests) === 'object' || Array.isArray(bookedProperty.guests)) {
    const error = new Error('"guests" must be an object.');
    error.status = 400;
    return next(error);
  }

  let incorrectPropertyId = true;
  properties.forEach((property) => {
    if (property.id === bookedProperty.propertyId) {
      incorrectPropertyId = false;
    }
  });

  if (incorrectPropertyId) {
    const error = new Error('Please add a correct property ID.');
    error.status = 400;
    return next(error);
  }

  let totalAmount = 0;
  let propertyPricePerNight;
  // const diffDays = d2.diff(d1, 'day');
  const nights = dayjs(bookedProperty.checkoutDate).diff(
    dayjs(bookedProperty.checkinDate), 'day'
  );

  let matchingProperty;
  properties.forEach((property) => {
    if (property.id === bookedProperty.propertyId) {
      matchingProperty = property;
    }
  });

  propertyPricePerNight = matchingProperty.pricePerNight;
  totalAmount = nights * propertyPricePerNight + 75;

  res.status(201).json({
    bookingId: generateRandomCode(),
    bookingDate: Math.round(dayjs() / 1000),
    totalAmount: totalAmount,
    checkInDate: bookedProperty.checkinDate,
    checkoutDate: bookedProperty.checkoutDate,
    propertyId: bookedProperty.propertyId,
    guests: bookedProperty.guests
  });
});

export default route;