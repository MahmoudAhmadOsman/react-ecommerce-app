import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mahmoud",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456789", 10),
      isAdmin: true,
    },
    {
      name: "Osman",
      email: "user@gmail.com",
      password: bcrypt.hashSync("123456789", 10),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Haggar",
      category: " Khaki Flat",
      image: "https://source.unsplash.com/1600x900/?watch",
      price: 120.99,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 160,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Wrangler",
      category: "Jeans",
      image: "https://source.unsplash.com/1600x900/?pants",
      price: 100.85,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 210,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Southpole",
      category: "Jogger Fleece Pants",
      image: "https://source.unsplash.com/1600x900/?pants",
      price: 49.99,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 180,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },

    {
      name: "Dickies",
      category: "Work Pant",
      image: "https://source.unsplash.com/1600x900/?pants",
      price: 79.99,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 142,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Vineyard Vines",
      category: "Straight Leg Pants",
      image: "https://source.unsplash.com/1600x900/?pants",
      price: 65.75,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 140,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Dockers",
      category: "Khaki Pant",
      image: "https://source.unsplash.com/1600x900/?jeans",
      price: 139.12,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 515,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio FX",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?casio",
      price: 199.95,
      countInStock: 12,
      brand: "Casio",
      rating: 4.9,
      numReviews: 154,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio WCS",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?watch",
      price: 199.99,
      countInStock: 12,
      brand: "Casio",
      rating: 4.9,
      numReviews: 715,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio PX",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?watch",
      price: 399.85,
      countInStock: 12,
      brand: "Casio",
      rating: 4.9,
      numReviews: 365,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio XH3",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?watch",
      price: 299.95,
      countInStock: 12,
      brand: "Casio",
      rating: 4.9,
      numReviews: 655,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio FX9",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?perfume",
      price: 259.95,
      countInStock: 162,
      brand: "XF Perfumes",
      rating: 5,
      numReviews: 952,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
    {
      name: "Casio XH3",
      category: "Watch",
      image: "https://source.unsplash.com/1600x900/?watch",
      price: 219.95,
      countInStock: 82,
      brand: "Casio",
      rating: 4.9,
      numReviews: 655,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet",
    },
  ],
};
export default data;
