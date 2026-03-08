const products = [
  {
    "id": "1e23a456-789b-4cde-9123-456789abcdef",
    "image": "images/products/black-tshirt.jpg",
    "name": "Black T-shirt",
    "rating": {
      "stars": 4.5,
      "count": 95
    },
    "price": 16,
    "keywords": [
      "tshirts",
      "shirts",
      "clothes",
      "clothing"
    ],
    "type": "clothing"
  },
  {
    "id": "2a34b567-89cd-4def-9234-56789abcdef0",
    "image": "images/products/blue-jeans.jpg",
    "name": "Blue Jeans",
    "rating": {
      "stars": 4,
      "count": 92
    },
    "price": 40,
    "keywords": [
      "jeans",
      "pants",
      "clothes"
    ],
    "type": "clothing"
  },
  {
    "id": "4c56d789-01ef-4a12-b456-789abcdef012",
    "image": "images/products/white-sneakers.jpg",
    "name": "White Sneakers",
    "rating": {
      "stars": 4.5,
      "count": 175
    },
    "price": 60,
    "keywords": [
      "shoes",
      "sneakers",
      "clothes"
    ],
    "type": "clothing"
  },
  {
    "id": "5d67e890-12f0-4b23-c567-89abcdef0123",
    "image": "images/products/leather-jacket.jpg",
    "name": "Leather Jacket",
    "rating": {
      "stars": 5,
      "count": 233
    },
    "price": 120,
    "keywords": [
      "jacket",
      "clothes",
      "fashion"
    ],
    "type": "clothing"
  },
  {
    "id": "7f89a012-34b2-4d45-e789-abcdef012345",
    "image": "images/products/hoodie.jpg",
    "name": "Casual Hoodie",
    "rating": {
      "stars": 4,
      "count": 107
    },
    "price": 35,
    "keywords": [
      "hoodie",
      "clothes",
      "winter"
    ],
    "type": "clothing"
  },
  {
    "id": "8a90b123-45c3-4e56-f890-bcdef0123456",
    "image": "images/products/sport-cap.jpg",
    "name": "Sport Cap",
    "rating": {
      "stars": 4,
      "count": 91
    },
    "price": 15,
    "keywords": [
      "cap",
      "hat",
      "clothes"
    ],
    "type": "clothing"
  },
  {
    "id": "9b01c234-56d4-4f67-a901-cdef01234567",
    "image": "images/products/wool-scarf.jpg",
    "name": "Wool Scarf",
    "rating": {
      "stars": 4,
      "count": 178
    },
    "price": 20,
    "keywords": [
      "scarf",
      "clothes",
      "winter"
    ],
    "type": "clothing"
  },
  {
    "id": "0c12d345-67e5-4a78-b012-def012345678",
    "image": "images/products/smartphone.jpg",
    "name": "Smartphone X",
    "rating": {
      "stars": 5,
      "count": 449
    },
    "price": 699,
    "keywords": [
      "phone",
      "electronics",
      "mobile"
    ],
    "type": "electronics"
  },
  {
    "id": "1d23e456-78f6-4b89-c123-ef0123456789",
    "image": "images/products/laptop.jpg",
    "name": "Laptop Pro 14",
    "rating": {
      "stars": 4.5,
      "count": 318
    },
    "price": 1200,
    "keywords": [
      "laptop",
      "electronics",
      "computer"
    ],
    "type": "electronics"
  },
  {
    "id": "2e34f567-89a7-4c90-d234-f0123456789a",
    "image": "images/products/headphones.jpg",
    "name": "Wireless Headphones",
    "rating": {
      "stars": 4,
      "count": 149
    },
    "price": 150,
    "keywords": [
      "headphones",
      "electronics",
      "audio"
    ],
    "type": "electronics"
  },
  {
    "id": "3f45a678-90b8-4d01-e345-0123456789ab",
    "image": "images/products/tablet.jpg",
    "name": "Tablet 10\"",
    "rating": {
      "stars": 4.5,
      "count": 166
    },
    "price": 400,
    "keywords": [
      "tablet",
      "electronics"
    ],
    "type": "electronics"
  },
  {
    "id": "4a56b789-01c9-4e12-f456-123456789abc",
    "image": "images/products/smartwatch.jpg",
    "name": "Smartwatch Z",
    "rating": {
      "stars": 3.5,
      "count": 86
    },
    "price": 180,
    "keywords": [
      "watch",
      "electronics",
      "wearables"
    ],
    "type": "electronics"
  },
  {
    "id": "5b67c890-12da-4f23-a567-23456789abcd",
    "image": "images/products/gaming-console.jpg",
    "name": "Gaming Console",
    "rating": {
      "stars": 5,
      "count": 532
    },
    "price": 500,
    "keywords": [
      "console",
      "electronics",
      "gaming"
    ],
    "type": "electronics"
  },
  {
    "id": "6c78d901-23eb-4a34-b678-3456789abcde",
    "image": "images/products/bluetooth-speaker.jpg",
    "name": "Bluetooth Speaker",
    "rating": {
      "stars": 4,
      "count": 198
    },
    "price": 90,
    "keywords": [
      "speaker",
      "electronics",
      "audio"
    ],
    "type": "electronics"
  },
  {
    "id": "0a12b345-672f-4e78-f012-789abcdef012",
    "image": "images/products/book1.jpg",
    "name": "The Great Adventure",
    "rating": {
      "stars": 5,
      "count": 302
    },
    "price": 18,
    "keywords": [
      "books",
      "novel",
      "adventure"
    ],
    "type": "books"
  },
  {
    "id": "1b23c456-7830-4f89-a123-89abcdef0123",
    "image": "images/products/book2.jpg",
    "name": "Learn JavaScript",
    "rating": {
      "stars": 4.5,
      "count": 206
    },
    "price": 25,
    "keywords": [
      "books",
      "javascript",
      "programming"
    ],
    "type": "books"
  },
  {
    "id": "2c34d567-8941-4a90-b234-9abcdef01234",
    "image": "images/products/book3.jpg",
    "name": "Cooking Made Easy",
    "rating": {
      "stars": 4,
      "count": 172
    },
    "price": 20,
    "keywords": [
      "books",
      "cooking",
      "food"
    ],
    "type": "books"
  },
  {
    "id": "3d45e678-9052-4b01-c345-abcdef012345",
    "image": "images/products/book4.jpg",
    "name": "History of Science",
    "rating": {
      "stars": 3.5,
      "count": 124
    },
    "price": 22,
    "keywords": [
      "books",
      "science",
      "history"
    ],
    "type": "books"
  },
  {
    "id": "4e56f789-0163-4c12-d456-bcdef0123456",
    "image": "images/products/book5.jpg",
    "name": "Fantasy World",
    "rating": {
      "stars": 4.5,
      "count": 118
    },
    "price": 19,
    "keywords": [
      "books",
      "fantasy",
      "novel"
    ],
    "type": "books"
  },
  {
    "id": "9d01e234-56b8-4d67-c901-0123456789ab",
    "image": "images/products/sofa.jpg",
    "name": "Modern Sofa",
    "rating": {
      "stars": 4.5,
      "count": 82
    },
    "price": 450,
    "keywords": [
      "sofa",
      "furniture",
      "home"
    ],
    "type": "home"
  },
  {
    "id": "0e12f345-67c9-4e78-d012-123456789abc",
    "image": "images/products/coffee-table.jpg",
    "name": "Coffee Table",
    "rating": {
      "stars": 4,
      "count": 130
    },
    "price": 150,
    "keywords": [
      "table",
      "furniture",
      "home"
    ],
    "type": "home"
  },
  {
    "id": "1f23a456-78da-4f89-e123-23456789abcd",
    "image": "images/products/bed.jpg",
    "name": "Queen Size Bed",
    "rating": {
      "stars": 5,
      "count": 283
    },
    "price": 700,
    "keywords": [
      "bed",
      "furniture",
      "home"
    ],
    "type": "home"
  },
  {
    "id": "2a34b567-89eb-4a90-f234-3456789abcde",
    "image": "images/products/lamp.jpg",
    "name": "Desk Lamp",
    "rating": {
      "stars": 4,
      "count": 322
    },
    "price": 45,
    "keywords": [
      "lamp",
      "light",
      "home"
    ],
    "type": "home"
  },
  {
    "id": "3b45c678-90fc-4b01-a345-456789abcdef",
    "image": "images/products/rug.jpg",
    "name": "Persian Rug",
    "rating": {
      "stars": 4.5,
      "count": 114
    },
    "price": 350,
    "keywords": [
      "rug",
      "carpet",
      "home"
    ],
    "type": "home"
  }
];

export default products;