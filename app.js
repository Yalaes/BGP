const topLink = document.querySelector('.top-link'); // back to top btn

// show / hide the btn when scrolling from the top of the page (AKA the user start scrolling)
window.onscroll = () => {
    if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300))
    {
        topLink.classList.add("show")
    } else {
        topLink.classList.remove("show")
    }
   
}