function pizzaOven(crusttype, saucetype, cheeses, toppings) {
    var pizza = {};
    pizza.crusttype = crusttype;
    pizza.saucetype = saucetype;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "white sauce", "mozzerella", ["chicken", "spinach", "mushroom"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "marinara", ["mozzerella", "ricotta"], ["artichoke", "spinach", "egg"]);
console.log(pizza4);




