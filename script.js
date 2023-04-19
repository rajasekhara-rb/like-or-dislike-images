let likes = 0;
let dislikes = 0;

// console.log(likes);
let likeBtn = document.querySelector("#like");
likeBtn.addEventListener("click", () => {
    likes += 1;
    let likeVal = document.querySelector("#like-val");
    likeVal.innerText = likes;
    // console.log(likes);
    let userClicks = likes + dislikes;
    let UserClicksDisplay = document.querySelector("#userClicks");
    UserClicksDisplay.innerText = userClicks;
});

let dislikeBtn = document.querySelector("#dislike");
dislikeBtn.addEventListener("click", () => {
    dislikes += 1;
    let likeVal = document.querySelector("#dislike-val");
    likeVal.innerText = dislikes;
    // console.log(likes);
    let userClicks = likes + dislikes;
    let UserClicksDisplay = document.querySelector("#userClicks");
    UserClicksDisplay.innerText = userClicks;
});
