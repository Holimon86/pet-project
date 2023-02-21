var feeding =[
    {
        title: "One Week Raw Food Prep",
        image: "./images/rawFoodTwoDish.jpeg",
        price: 420.00,
    },
    {
        title: "One Month Raw Food Prep",
        image: "./images/rawFoodPrepTin.jpeg",
        price: 1500.00,
    },
    {
        title: "Raw Bagged Dog Food (Frozen).",
        image:"./images/rawBagDogFood.jpeg",
        price: 300.00,
    },
    {
        title:"Bag Puppy Food",
        image:"./images/largePuppyDogFood.jpeg",
        price:300.00,
    },
    {
        title:"Bag Adult Food",
        image:"./images/largeDogFoodProccesed.webp",
        price: 300.00,
    },
    {
        title:"Large Dog Treats",
        image:"./images/largeDogTreatsForAgressiveChewers.jpg",
        price:300.00,
    }
]
var postHTML = " "
for (var i=0; i < feeding.length; i++){
    var heading = "<div class='feeding'><span><h3>" + feeding[i].title + "</h3>"
    var image = '<img src="' + feeding[i].image + '"/'
    var price = "<p> $" + feeding[i].price + "</p></span>"
    var concatThis = heading + image + price 
    postHTML = postHTML + concatThis
}
document.getElementById("feeding").innerHTML = postHTML

