const menuItems = document.querySelectorAll('.image_menu');

//The image of a menu defines the size of its container.
menuItems.forEach(item => {
    const img = item.querySelector('.menu_image');
    const text = item.querySelector('.text');
    if(img){
        if (img.complete) {
            setWidth();
        } else {
            img.onload = setWidth;
        }

        function setWidth() {
            const imgWidth = img.offsetWidth;
            item.style.width = imgWidth + 'px';
            text.style.width = imgWidth + 'px';
        }
    } else{
        item.style.width = '';
        text.style.width = '';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("active");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});