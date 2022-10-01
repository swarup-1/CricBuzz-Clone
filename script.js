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


document.querySelector("form").addEventListener("submit",signup);
let count=0;

function signup(event){
    event.preventDefault();
    console.log("involk")
    let emailId = document.querySelector("#email").value;
    
    localStorage.setItem("emailId",emailId)
    localStorage.setItem("otp","1234")
    // ------------------------------------------------
    let enterOtp = document.createElement("input")
    let loginbutton = document.createElement("input")
    count++
    if(count==1){
        enterOtp.setAttribute("type", "password");
        enterOtp.setAttribute("id", "password");
        enterOtp.setAttribute("placeholder", "Enter OTP");
        document.querySelector("form").append(enterOtp)

        loginbutton.setAttribute("value", "Log In");
        loginbutton.setAttribute("id", "loginbutton");
        document.querySelector("form").append(loginbutton)
    }
    // ------------------------------------------------
    document.querySelector("#loginbutton").addEventListener("click",logedin);
    alert(" Your OTP is :  1 2 3 4")
    
}
function logedin(){
    let password = document.querySelector("#password").value;
    let savepass = localStorage.getItem("otp");
    
    if(password==savepass){
        if (window.confirm('Login Successful ! Go to Home-page')){
        window.location.href="homepage.html";
        };


    }else{
        alert("wrong OTP")
    }
}

