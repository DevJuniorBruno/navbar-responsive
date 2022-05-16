class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }
    
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    animateLinks() {
        this.navLinks.forEach((link, index)=> {
            console.log(index / 7 + 0.3);
            link.style.animation
            ? (link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
    }

    addClickEvent() {
        /*quando usamos o metodo de classe como callback de addEventListener,
        this perde a referencia do objeto,
        queremos que o this se refira a classe MobileNavBar
        por isso o método bind()
        */
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init()