const categories = [
  {
    name: "Burgers",
    image: "imgs/menu/sandwiches/burger/127 egp - fire burger.jpg",
    description: "Juicy beef & chicken burgers with fresh toppings.",
    link: "menu.html#burgers"
  },
  {
    name: "Pizza",
    image: "menu/pizza/pizza.jpg",
    description: "Hot & cheesy pizza with different flavors.",
    link: "menu.html#pizza"
  },
  {
    name: "Fried Chicken",
    image: "menu/sandwiches/chicken/chicken.jpg",
    description: "Crispy golden chicken with secret spices.",
    link: "menu.html#chicken"
  },
  {
    name: "Juices",
    image: "menu/drinks/juices/lemonade.jpg",
    description: "Freshly squeezed natural juices for a fresh feel.",
    link: "menu.html#juices"
  }
];

const container = document.getElementById("categoriesContainer");

categories.forEach(item => {
  const card = document.createElement("div");
  card.className = "popular-item-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <a href="${item.link}" class="btn">View in Menu</a>
  `;
  container.appendChild(card);
});
