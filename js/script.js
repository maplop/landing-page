((d) => {
    const $openMenu = d.querySelector(".nav"),
     $menu = d.querySelector(".side-menu"),
     $closeMenu = d.querySelector(".close-icon-container");

     $openMenu.addEventListener("click", (e) => {
        $menu.classList.add("is-active")
     })
     $closeMenu.addEventListener("click", (e) => {
        $menu.classList.remove("is-active")
     })

     const $menuItems = $menu.querySelectorAll("ul a");

     $menuItems.forEach(($menuItem) => {
       $menuItem.addEventListener("click", (e) => {
         $menu.classList.remove("is-active");
       });
     });

})(document);