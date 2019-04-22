function showMenu(){
    document.getElementById("menu").style.display = "block";
    bodyElement.classList.add('is-overflowed');
}

function hideMenu(){
    document.getElementById("menu").style.display = "none";
    bodyElement.classList.remove('is-overflowed');
}

const menuButton = document.getElementById('button-menu'),
      closeButton = document.getElementById('close-menu')
      bodyElement = document.getElementsByTagName('body')[0];

menuButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu);