class Cookie{
    constructor(cookieModal, btnAccept){
        this.cookieModal = cookieModal;
        this.btnAccept = btnAccept;

        this.checkCookie();
        this.acceptCookie();
    }

    acceptCookie(){
        this.btnAccept.addEventListener("click",()=>{
            this.cookieModal.classList.add("cookieModal--hideAnim");

            localStorage.setItem("cookieAccept", 1);
        });
    }

    checkCookie(){
        if (localStorage.getItem("cookieAccept")){
            this.cookieModal.style.display = "none";
        }
    }
}

export default Cookie;