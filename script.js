let newsContainer = [...document.querySelectorAll(".news-container")];

let preBtn = [...document.querySelectorAll(".pre-btn")]
let nxtBtn = [...document.querySelectorAll(".nxt-btn")]

newsContainer.forEach((el,i)=> {
    let containerDimention = el.getBoundingClientRect()
    let containerWidth = containerDimention.width

    nxtBtn[i].addEventListener("click",() =>{
        el.scrollLeft += containerWidth
    })
    preBtn[i].addEventListener("click",() =>{
        el.scrollLeft -= containerWidth
    })
})

document.querySelector("#loginbtn").addEventListener("submit",userRecord);

let cartArr = JSON.parse(localStorage.getItem("mens_data")) || []
function userRecord(event){
    event.preventDefault();

    let userEmail = document.querySelector("#email").value;
}