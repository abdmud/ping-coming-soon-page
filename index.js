const notifyBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector("input");

function checkEmail() {
    var eMail = emailInput.value;

    if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
        console.log(eMail);
        return true;
    } else {
        console.log("FAIL")
        emailInput.style.borderColor = "red";
        return false;
    }
}

notifyBtn.addEventListener("click", () =>{
    console.log("button clicked!")
    checkEmail()
})