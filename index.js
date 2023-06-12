const notifyBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector("input");

function checkEmail() {
    var eMail = emailInput.value;
    const emailDiv = document.querySelector(".signup");
    if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {

        return true;
    } else {
        console.log("FAIL")
        emailInput.style.borderColor = "red";

        // add validation message
        let msg = document.createElement("p");
        msg.innerHTML = "Please provide a valid email address";
        emailDiv.append(msg);
        // style message
        msg.style.color = "red";
        msg.style.fontSize = "12px";
        msg.style.fontStyle = "italic"
        msg.style.marginLeft = "5%"

        return false;
    }
}

notifyBtn.addEventListener("click", () =>{
    checkEmail()
})