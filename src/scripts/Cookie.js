class Cookie{
    constructor(cookieModal, btnAccept){
        this.cookieModal = cookieModal;
        this.btnAccept = btnAccept;

        this.acceptCookie();
    }

    acceptCookie(){
        this.btnAccept.addEventListener("click",()=>{
            this.cookieModal.style.display = "none";

            localStorage.setItem("cookieAccept", 1);
        });
    }
}

export default Cookie;