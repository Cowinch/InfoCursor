let cursor = document.querySelector("#cursor")
let cursorSize = document.documentElement.style.setProperty

document.addEventListener('mousemove', (e, interacting) => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
    if(interacting){
        document.documentElement.style.setProperty('--cursorSize', '125px')
    } else {
        document.documentElement.style.setProperty('--cursorSize', '0px')
    }

    if(e.target.closest('#himalayas')){
        cursor.innerHTML = "The Himalayas lorem ipsum blah blah blah blah blah"
    }
    else if (e.target.closest('#zhangjiajie')){
        cursor.innerHTML = "Zhangjiajie"
    }
    else if (e.target.closest('#fuji')){
        cursor.innerHTML = "Mount Fuji"
    }
    else {
        cursor.innerHTML = null
    }
}