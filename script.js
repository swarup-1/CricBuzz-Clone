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