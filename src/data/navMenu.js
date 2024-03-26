export const navMenu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "Pages",
    submenu: [
      {
        name: "About Us",
        path: "pages/about",
      },
      {
        name: "Our Products",
        path: "pages/product",
      },
      {
        name: "Our Menu",
        path: "pages/menu",
      },
      {
        name: "Blogs",
        path: "pages/blog",
      },
    ],
  },
  {
    id: 3,
    name: "Menu",
    submenu: [
      {
        name: "Coffee",
        path: "pages/coffee",
      },
      {
        name: "Drinks",
        path: "pages/drinks",
      },
      {
        name: "Burger & Pizza",
        path: "pages/burger-pizza",
      },
      {
        name: "Dinner",
        path: "pages/dinner",
      },
      {
        name: "Bakery & Cookies",
        path: "pages/bakery-cookies",
      },
    ],
  },
  {
    id: 4,
    name: "Contact Us",
    path: "pages/contact",
  },
];
