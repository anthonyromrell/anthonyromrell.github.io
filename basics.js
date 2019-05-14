function FadeOff(params) {
    TweenMax.to(params, 1, {opacity:0})
}

let SalePrice = false;

function SaleOn(params) {
    if (SalePrice) {
        alert("On Sale")
    } else {
        alert("Not On Sale")
    }
}

let Light = true;

function LightOn(params) {
    if (Light) {
        alert("The Light is On")
    } else {
        alert("The Light is Off")
    }
}

let password = "OU812"

function CheckPassword(params) {
    let pw = prompt("Enter your password")

    if (pw == password) {
        alert("The password is correct")
    } else {
        alert("Incorrect password")
    }
}

let score = 100;
let bomb = 10;
let userName = "Anthony"
let health = 100;
let healthy = false;
//let animals = [];

function CheckHealth (params) {
    if (health > bomb) {
        alert("Healthy")
    } else {
        alert("Unhealthy")
    }
}

function Repeat (params, animal) {
    for (let index = 0; index < params.length; index++) {
        //TweenMax.to(params[index], 0.1, {opacity:0})
        params[index].style.display = "none";
    }

    for (let index = 0; index < params.length; index++) {
        if (params[index].id == animal) {
            //TweenMax.to(params[index], 0.1, {opacity:1})
            params[index].style.display = "block";
        }
    }
}

function ShowAll (params) {
    for (let index = 0; index < params.length; index++) {
        //TweenMax.to(params[index], 0.1, {opacity:1})
        params[index].style.display = "block";
    }
}