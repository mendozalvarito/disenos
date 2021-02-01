function clickAside(){
    document.getElementsByClassName("grid-container")[0].classList.toggle("collapse");
}

document.getElementsByClassName("sidebar_btn")[0].onclick = clickAside;
