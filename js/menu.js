const products = [
    // chicken meals
    {
        img: "./imgs/menu/meals/meals/109 egp - snack box.png",
        title: "Snack Box",
        price: 109,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 2 pieces of chicken, fries, 2 pieces of bread, coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/159 egp - dinner box.png",
        title: "Dinner Box",
        price: 159,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 3 pieces of chicken, fries, 3 pieces of bread, coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/167 egp - moods mix.png",
        title: "Moods Mix",
        price: 167,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 2 pieces of chicken, 2 pieces of chicken strips, fries, 3 pieces of bread, coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/219egp - couple box.png",
        title: "Couple Box",
        price: 219,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 4 pieces of chicken, fries, 3 pieces of bread, coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/287 epg - boom box.png",
        title: "Boom Box",
        price: 287,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 6 pieces of chicken, fries, 4 pieces of bread, 2 coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/409 egp - mini family.png",
        title: "Mini Family",
        price: 409,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 9 pieces of chicken, fries, 6 pieces of bread, 3 coleslaw, 1L Cola"
    },
    {
        img: "./imgs/menu/meals/meals/519 egp - family.png",
        title: "Family",
        price: 519,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 12 pieces of chicken, Big fries, 8 pieces of bread, 4 coleslaw"
    },
    {
        img: "./imgs/menu/meals/meals/739 egp - big family .png",
        title: "Big Family",
        price: 739,
        category: "meals",
        subcategory: "chicken-meals",
        details: "Includes 18 pieces of chicken, Big fries, 10 pieces of bread, 6 coleslaw, 1L Cola"
    },
    // healthy meals
    {
        img: "./imgs/menu/meals/healthy/135egp coach meal .png",
        title: "Coach Meal",
        price: 135,
        category: "meals",
        subcategory: "healthy-meals",
        details: "2 pieces of grilled chicken fillet, Rice, Green Salad"
    },
    // kids meals
    {
        img: "./imgs/menu/meals/kids/69egp mini classic .png",
        title: "Mini Classic",
        price: 69,
        category: "meals",
        subcategory: "kids-meals",
        details: "Piece of crispy chicken, Chedder Cheese, lettus, pickles, mayonaise"
    },
    {
        img: "./imgs/menu/meals/kids/79 egp mini burger.png",
        title: "Mini Burger",
        price: 79,
        category: "meals",
        subcategory: "kids-meals",
        details: "100G of Beef Burger, Chedder Cheese, lettus, pickles, mayonaise"
    },
    {
        img: "./imgs/menu/meals/kids/89 kids strips.png",
        title: "Kids Strips",
        price: 89,
        category: "meals",
        subcategory: "kids-meals",
        details: "1 Piece of Chicken or 2 Pieces of Chicken Strips, Juice , potato, Bread"
    },
    {
        img: "./imgs/menu/meals/kids/138 egp double mini burger .png",
        title: "Double Mini Burger",
        price: 138,
        category: "meals",
        subcategory: "kids-meals",
        details: "2 Burger Sandwitchs, Potato, 2 Juice, 2 Games"
    },
    // strips meals
    {
        img: "./imgs/menu/meals/strips/107 crespy strips .png",
        title: "Crispy Strips",
        price: 107,
        category: "meals",
        subcategory: "strips-meals",
        details: "3 Pieces of Chicken Strips, 2 Pieces of Bread, Coleslaw"
    },
    {
        img: "./imgs/menu/meals/strips/162 egp - jumbo crespy strips.png",
        title: "Jumbo Crispy Strips",
        price: 162,
        category: "meals",
        subcategory: "strips-meals",
        details: "5 Pieces of Chicken Strips, 3 Pieces of Bread, Potato, Coleslaw"
    },
    {
        img: "./imgs/menu/meals/strips/167 egp - moods mix.png",
        title: "Moods Mix",
        price: 167,
        category: "meals",
        subcategory: "strips-meals",
        details: "2 Pieces of Chicken, 3 Pieces of Chicken Strips, 3 Pieces of Bread, Potato, Coleslaw"
    },
    {
        img: "./imgs/menu/meals/strips/299 egp - family crespy strips.png",
        title: "Family Crispy Strips",
        price: 299,
        category: "meals",
        subcategory: "strips-meals",
        details: "10 Pieces of Chicken Strips, 4 Pieces of Bread, Potato, 2 Coleslaw"
    },
    // christians
    {
        img: "./imgs/menu/christians/40 - egp باربكيو رانش فرايز .png",
        title: "Barbecue Ranch Fries",
        price: 40,
        category: "christians",
        subcategory: "",
        details: "Tortilla, Potato ,Lettuce , Ranch, barbeque"
    },
    {
        img: "./imgs/menu/christians/40 - egp ماريان فيجتريان فاهيتا.png",
        title: "Marian Vegetarian Fajitas",
        price: 40,
        category: "christians",
        subcategory: "",
        details: "Tortilla, pepper, onion, mushroom ,lettuce"
    },
    {
        img: "./imgs/menu/christians/جلابينو تايجر فرايز.png",
        title: "Jalapeno Tiger Fries",
        price: 45,
        category: "christians",
        subcategory: "",
        details: "Torttila, Potato, Jalapeno, Tiger sauce, lettuce"
    },
    // fattah
    {
        img: "./imgs/menu/fattah/109 egp - جريلد تشيكن رانش.png",
        title: "Grilled Chicken Ranch",
        price: 109,
        category: "fattah",
        subcategory: "",
        details: "Grilled Chicken, Basmati Rice, Crispy Bread, Moods special sauce, Ranch"
    },
    {
        img: "./imgs/menu/fattah/109 egp -جريلد تشيكن باربيكيو.png",
        title: "Grilled Chicken Barbecue",
        price: 109,
        category: "fattah",
        subcategory: "",
        details: "Grilled Chicken, Basmati Rice, Crispy Bread, Moods special sauce, Barbecue"
    },
    {
        img: "./imgs/menu/fattah/109 egp ديناميت فرايد.png",
        title: "Dynamite Fried",
        price: 109,
        category: "fattah",
        subcategory: "",
        details: "Crispy Fried Chicken, Basmati Rice, Crispy Bread, Moods special sauce, Dynamite sauce"
    },
    {
        img: "./imgs/menu/fattah/109 egp فتة فرايد.png",
        title: "Fattah Fried",
        price: 109,
        category: "fattah",
        subcategory: "",
        details: "Fried Chicken, Basmati Rice, Crispy Bread, Moods special sauce"
    },
    // rizo 
    {
        img: "./imgs/menu/rizo/70egp rizo.png",
        title: "Rizo",
        price: 70,
        category: "rizo",
        subcategory: "",
        details: "Rice, Chicken strips, barbeque sauce"
    },
    // sandwitchs
    {
        img: "./imgs/menu/sandwitchs/Chicken/89 egp - classic .png",
        title: "CLassic",
        price: 89,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Lettuce, pickles, Cheddar Cheese, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/89 egp - moods chicken burger.png",
        title: "Moods Chicken Burger",
        price: 89,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Lettuce, pickles, Moods sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/92-egp grilly.png",
        title: "Grilly",
        price: 92,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Grilled Chicken, Lettuce, pickles, Tomato, Cheddar Cheese, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/109 boom mozzarela.png",
        title: "Boom mozzarela",
        price: 109,
        category: "sandwitchs",
        subcategory: "chicken-meals",
        details: "Crispy Chicken, Mozzarella Sticks, Cheddar Cheese,Ranch sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/109 egp - chicken ranchy .png",
        title: "Chicken Ranchy",
        price: 109,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Onion Rings, Beef Bacon, Ranch sauce, barbeque sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/109 egp - grilled cordon blu .png",
        title: "Grilled Cordon Bleu",
        price: 109,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Grilled Chicken filled with beef and smoked turkey, Lettuce, pickles"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/109 egp - moods fire.png",
        title: "Moods Fire",
        price: 109,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Fire Jalapenos, Beef Bacon, Jalapeno Cheddar Fingers, Cheddar Cheese, Chili Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/117EGP - Chicken turky.png",
        title: "Chicken Turkey",
        price: 117,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Beef Bacon, Smoked Turkey, Thousand Island Sauce, Cheddar sauce, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Chicken/122 egp - fajita fried.png",
        title: "Fajita Fried",
        price: 122,
        category: "sandwitchs",
        subcategory: "chicken",
        details: "Crispy Chicken, Fajita Chicken, Lettuce, Cheddar Cheese, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/99 EGP - BURGER.png",
        title: "Burgers",
        price: 99,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Tortilla, Beef Bacon, Smoked Turkey, Moods Sauce, lettuce"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/109 egp - cheese burger.png",
        title: "Cheese Burger",
        price: 109,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Cheddar Cheese, Lettuce, Pickles, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/109-egp classic burger.png",
        title: "Classic Burger",
        price: 109,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Tomato, Onion, Lettuce, Pickles, Mayonnaise"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/117egp - jousy lousy.png",
        title: "Jousy Lousy",
        price: 117,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger Filled with Mozzarella, Lettuce, Mayonnaise, Moods Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/117egp - moods burger.png",
        title: "Moods Burger",
        price: 109,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Beef Bacon, Smoked Turkey, Lettuce, Pickles, Moods Sauce"

    },
    {
        img: "./imgs/menu/sandwitchs/Burger/127 egp - fire burger.png",
        title: "Fire Burger",
        price: 127,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Jalapeno Cheddar Fingers, Fire Jalapenos, Lettuce, Mayonnaise, Chili Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/127 egp - smoke house .png",
        title: "Smoke House",
        price: 127,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Beef Bacon, Onion Rings, Cheddar Cheese, Mayonnaise, Barbecue Sauce, Ranch Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Burger/135 egp - mozzarella BURGER.png",
        title: "Mozzarella Burger",
        price: 135,
        category: "sandwitchs",
        subcategory: "burgers",
        details: "Beef Burger, Mozzarella Sticks, Smoked Turkey, Cheddar Cheese, Salami, Lettuce, Pickles, Mayonnaise , Moods Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/65 egp - fajita chicken .png",
        title: "Fajita Chicken",
        price: 65,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Fajita Chicken, Tiger Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/65egp roll potatoes.png",
        title: "Potato ROll",
        price: 65,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Fried Potatoes, Mozzarella, Turkey, Mayonnaise, Ketchup"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/70egp - tako roll.png",
        title: "Tako Roll",
        price: 70,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Caramelized Onions, pepper, Jalapenos, Sweet Corn, Mix Mozzarella"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/75 egp - twister .png",
        title: "Moods Mix",
        price: 75,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, 2 Pieces of Chicken Strips, Lettuce, Pickles, Cheddar Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/80 egp - casadella grilled chicken.png",
        title: "Casadella Grilled Chicken",
        price: 80,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Grilled Chicken, Sweet Corn, Caramelized Onions, jalapenos, Mix Cheese"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/90 egp - ranchy cranchy shrimp.png",
        title: "Ranchy Crunchy Shrimp",
        price: 90,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Fried Shrimp, Mix Green leaves, Ranch Sauce"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/90 egp -vega shrimp fajita.png",
        title: "Vega Fajita Shrimp",
        price: 90,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Fajita Shrimp, Pepper, Mix green leaves"
    },
    {
        img: "./imgs/menu/sandwitchs/Wrap/99egp - burger.png",
        title: "Moods Mix",
        price: 99,
        category: "sandwitchs",
        subcategory: "wraps",
        details: "Tortilla, Beef Burger, Beef Bacon, Smoked Turkey, Lettuce, Pickles, Moods Sauce"
    },
    // potato
    {
        img: "./imgs/menu/potato/22egp - small fries.png",
        title: "Small Fries",
        price: 22,
        category: "potato",
        subcategory: "",
        details: "Small Fries with Moods flavor"
    },
    {
        img: "./imgs/menu/potato/30 egp - big fries .png",
        title: "Big Fries",
        price: 30,
        category: "potato",
        subcategory: "",
        details: "Big Fries with Moods flavor"
    },
    {
        img: "./imgs/menu/potato/70egp - mix fries.png",
        title: "Mix Fries",
        price: 70,
        category: "potato",
        subcategory: "",
        details: "Mix of Small Fries, Big Fries, and Potato Wedges",
    },
    {
        img: "./imgs/menu/potato/75 egp - creswpy potato with chees .png",
        title: "Crispy Potato With Cheese",
        price: 75,
        category: "potato",
        subcategory: "",
        details: "Crispy Potato Wedges with Cheese Sauce"
    },
    // sauces
    {
        img: "./imgs/menu/sauce/15 egp - hot mayonaise.png",
        title: "Hot Mayonaise",
        price: 15,
        category: "sauces",
        subcategory: ""
    },
    {
        img: "./imgs/menu/sauce/15 egp - mayonaise.png",
        title: "Mayonaise",
        price: 15,
        category: "sauces",
        subcategory: "",
        details: "Classic mayonnaise with a spicy kick"
    },
    {
        img: "./imgs/menu/sauce/20 egp - chilli .png",
        title: "Chili",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Spicy chili sauce for an extra kick"
    },
    {
        img: "./imgs/menu/sauce/20 egp - moods.png",
        title: "Moods",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Signature sauce with a blend of spices"
    },
    {
        img: "./imgs/menu/sauce/20 egp barbeque sauce.png",
        title: "Barbeque",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Sweet and smoky barbeque sauce"
    },
    {
        img: "./imgs/menu/sauce/20 egp Cheddar .png",
        title: "Cheddar",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Creamy cheddar sauce"
    },
    {
        img: "./imgs/menu/sauce/20egp - ranch.png",
        title: "Ranch",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Creamy ranch sauce"
    },
    {
        img: "./imgs/menu/sauce/20egp - Tahini.png",
        title: "Tahini",
        price: 20,
        category: "sauces",
        subcategory: "",
        details: "Creamy tahini sauce"
    },
    {
        img: "./imgs/menu/sauce/20egp - Tiger.png",
        title: "Tiger",
        price: 20,
        category: "sauce",
        subcategory: "",
        details: "Spicy tiger sauce"
    },
    // Desserts
    {
        img: "./imgs/menu/dessert/45 egp - brownies .png",
        title: "Brownies",
        price: 45,
        category: "desserts",
        subcategory: "",
        details: "Rich chocolate brownies with a fudgy center"
    },
    {
        img: "./imgs/menu/dessert/45 egp - cheese cake.png",
        title: "Cheese Cake",
        price: 45,
        category: "desserts",
        subcategory: "",
        details: "Creamy cheesecake with a graham cracker crust"
    },
    {
        img: "./imgs/menu/dessert/50 egp - fudge cake.png",
        title: "Fudge Cake",
        price: 50,
        category: "desserts",
        subcategory: "",
        details: "Rich chocolate fudge cake"
    },
    {
        img: "./imgs/menu/dessert/50 egp - red felfet.png",
        title: "Red Velvet",
        price: 50,
        category: "desserts",
        subcategory: "",
        details: "Classic red velvet cake with cream cheese frosting"
    },
    {
        img: "./imgs/menu/dessert/55 egp - cinabone.png",
        title: "Cinabone",
        price: "55",
        category: "desserts",
        subcategory: "",
        details: "Cinnamon roll with a gooey center"
    },
    {
        img: "./imgs/menu/dessert/55 egp ashtota.png",
        title: "Ashtouta",
        price: "55",
        category: "desserts",
        subcategory: "",
        details: "New Egyptian dessert with a creamy texture"
    },
    {
        img: "./imgs/menu/dessert/60 egp - lotus with nutella.png",
        title: "Lotus With Nutella",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Lotus biscuit with Nutella spread"
    },
    {
        img: "./imgs/menu/dessert/60 egp - rota chocolate.png",
        title: "Rota Chocolate",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Chocolate-filled rota pastry"
    },
    {
        img: "./imgs/menu/dessert/60 egp - tajin lotus .png",
        title: "Tajin Lotus",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Lotus biscuit with a touch of tajin"
    },
    {
        img: "./imgs/menu/dessert/60 egp - tajin nutella .png",
        title: "Tajin Nutella",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Nutella-filled tajin pastry"
    },
    {
        img: "./imgs/menu/dessert/60 egp - waffel.png",
        title: "Waffel",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Crispy waffle with a choice of toppings"
    },
    {
        img: "./imgs/menu/dessert/60 egp -molten cake.png",
        title: "Molten Cake",
        price: "60",
        category: "desserts",
        subcategory: "",
        details: "Chocolate molten cake with a gooey center"
    },
    {
        img: "./imgs/menu/dessert/70 egp - despacito.png",
        title: "despacito",
        price: "70",
        category: "desserts",
        subcategory: "",
        details: "Chocolate dessert with a creamy filling"
    },

];

const container = document.getElementById("menuContainer");

function addToCart(name, price, quantity) {
    const cart = JSON.parse(localStorage.getItem('itemsInCart')) || [];

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }

    localStorage.setItem('itemsInCart', JSON.stringify(cart));
}

products.forEach(prod => {
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("data-category", prod.category);
    content.setAttribute("data-subcategory", prod.subcategory);

    const img = document.createElement("img");
    img.src = prod.img;

    const heading = document.createElement("h2");
    heading.textContent = prod.title;

    const price = document.createElement("h3");
    price.className = "price";
    price.textContent = prod.price + " EGP";

    const fav = document.createElement("i");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(prod.title)) {
        fav.className = "fa-solid fa-heart";
    } else {
        fav.className = "fa-regular fa-heart";
    }


    fav.addEventListener("click", () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(prod.title)) {
            const index = favorites.indexOf(prod.title);
            favorites.splice(index, 1);
            fav.className = "fa-regular fa-heart";
        } else {
            favorites.push(prod.title);
            fav.className = "fa-solid fa-heart";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });


    var viewBtn = document.createElement("button");
    viewBtn.className = "view-btn btn-shape";
    viewBtn.textContent = "View";

    //wrapper
    function quantityWrapper() {
        var a = 1;
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        var quantityLabel = document.createElement("h3");
        quantityLabel.textContent = "Quantity:";

        var minus = document.createElement("button");
        minus.className = "minus";
        minus.textContent = "-";
        minus.style.cssText = "border:none; width:20px;background-color:inherit;"

        var pluser = document.createElement("button");
        pluser.className = "plus";
        pluser.textContent = "+";
        pluser.style.cssText = "border:none; width:20px;background-color:inherit;"

        var quantity = document.createElement("span");
        quantity.className = "quantity";
        quantity.textContent = "01";

        pluser.addEventListener("click", () => {
            a++;
            quantity.textContent = a < 10 ? "0" + a : a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) a--;
            quantity.textContent = a < 10 ? "0" + a : a;
        });

        wrapper.append(quantityLabel, minus, quantity, pluser);
        return wrapper;
    }


    //   popUp
    const popup = document.createElement("div");
    popup.classList.add("popUp");

    const popupContent = document.createElement("div");
    popupContent.classList.add("popUp-content");

    const info = document.createElement("div");
    info.className = "info";

    const item_text = document.createElement("div");
    item_text.className = "item-text";

    const page_details = document.createElement("div")
    page_details.classList.add("page-detail")

    const closeBtn = document.createElement("i");
    closeBtn.className = "fa-solid fa-circle-xmark close-btn";

    var cartBtn = document.createElement("button");
    cartBtn.className = "btn-shape";
    cartBtn.textContent = "Add to cart";

    cartBtn.addEventListener("click", () => {
        const title = prod.title;
        const priceEGP = prod.price;
        const qty = parseInt(popup.querySelector('.quantity').textContent, 10);

        addToCart(title, priceEGP, qty);
        // toast
        const toast = document.getElementById("addToCartToast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
        updateCartCounter();

    });


    const details = document.createElement("p")
    details.textContent = prod.details ? prod.details : "No description available";


    item_text.append(
        heading.cloneNode(true),
        details,
        quantityWrapper(),
    );
    info.append(
        img.cloneNode(),
        item_text,
    );

    page_details.append(
        heading.cloneNode(true),
        price,
        viewBtn
    )

    // append popUp
    popupContent.append(
        closeBtn,
        info,
        price.cloneNode(true),
        cartBtn
    );
    popup.appendChild(popupContent);

    // product card 
    content.append(img, page_details, fav, popup);
    container.appendChild(content);

    viewBtn.addEventListener("click", () => {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

});



// Filters 
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".content").forEach(item => {
            item.style.display = item.dataset.category === category ? "block" : "none";
        });

        document.querySelectorAll(".sub-filters").forEach(div => div.style.display = "none");
        const subFilter = document.getElementById(`${category}-sub`);
        if (subFilter) subFilter.style.display = "flex";

        document.querySelectorAll(".sub-filter-btn").forEach(btn => btn.classList.remove("active"));
    });
});

// Subcategory
document.querySelectorAll(".sub-filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        const subcategory = button.dataset.subcategory;

        document.querySelectorAll(".sub-filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".content").forEach(item => {
            item.style.display = item.dataset.subcategory === subcategory ? "block" : "none";
        });
    });
});


function clearAllFilters() {
    document.querySelectorAll(".content").forEach(item => item.style.display = "block");
    document.querySelectorAll(".sub-filters").forEach(div => div.style.display = "none");
    document.querySelectorAll(".filter-btn, .sub-filter-btn").forEach(btn => btn.classList.remove("active"));
};

function updateCartCounter() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQty;
}

document.addEventListener("DOMContentLoaded", updateCartCounter);
