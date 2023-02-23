var feeding = [
    {
        title: "One Week Raw Food Prep",
        image: "./images/RawFoodDietLarg.webp",
        price:  420.00,
    },
    {
        title:"One Month Raw Food Prep",
        image: "./images/barfFoodMeal",
        price: 1500.00,
    },
    {
        title:"Raw Bagged Dog Food (Frozen).",
        image:"./images/rawBagDogFood.jpeg",
        price: 300.00,
    },
    
    {
        title: "Bag Puppy Food",
        image: "./images/largePuppyDogFood.jpeg",
        price:  300.00,
    },
    {
        title:"Bag Adult Food",
        image: "./images/largeDogFoodProcessed.webp",
        price: 300.00,
    },
    {
        title:"Large Dog Treats.",
        image:"./images/largeDogTreatsForAgressiveChewers.jpg",
        price: 300.00,
    }

]

var postHTMl= " "
for (var i=0; i < feeding.length; i++){
    var heading = "<div class='feeding col-lg-4'><span><h3>" + feeding[i].title + "</h3>"
    var image = '<img src="' + feeding[i].image + ' " style="width: 18rem; height: 250px;"/>'
    var price = "<p> $" + feeding[i].price + "</p><button>Add to Cart</button></div></div>'<span>"
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById("feeding").innerHTML = postHTML

"<h4>" + shop[i].title + "</h4>"