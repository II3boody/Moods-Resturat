var imgs = ['./imgs/fistivals/family.jpg', './imgs/fistivals/roof.jpg', './imgs/fistivals/childern.jpg', './imgs/fistivals/birthday.jpg'];
var places = ["Family", "Roof", "Children", "Birthday"];
var description = ["At our restaurant, we've created a comfortable and family-friendly space where everyone can enjoy quality time together in a calm and private atmosphere. It's the perfect setting for family gatherings, whether for special occasions or everyday visits.",
    "At our restaurant, we offer a spacious rooftop with a stunning view, perfect for hosting special events and celebrations. The atmosphere combines elegance and comfort for an unforgettable experience.",
    "At our restaurant, we offer a safe and fun play area for children, filled with games suitable for all ages. Families can enjoy their time while the little ones play in a joyful and secure environment.",
    "At our restaurant, we offer a special and well-equipped space for celebrating birthdays in a joyful and fun atmosphere. We provide everything needed to make your special day an unforgettable memory for you and your loved ones."
]
var container = document.createElement("div");
container.setAttribute("class", "container");

for (let i = 0; i < places.length; i++) {
    var content4 = document.createElement("div");
    content4.setAttribute("class", "content4");

    var img = document.createElement("img");
    img.classList.add("imgjs2");
    img.src = imgs[i];

    var place = document.createElement("h2");
    place.innerHTML = places[i];

    var des = document.createElement("p");
    des.innerHTML = description[i];

    var info = document.createElement("div");
    info.classList.add("info");
    info.appendChild(place);
    info.appendChild(des);

    content4.appendChild(img);
    content4.appendChild(info);
    container.appendChild(content4);
}

var book_section = document.getElementById("booking");
book_section.appendChild(container);



