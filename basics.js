
function Animate () {
    var photo = document.getElementById("photo");
    TweenLite.to(photo, 2, {width:"200px", height:"150px"});
    TweenLite.to("#photo", 1, {x:100});
}

