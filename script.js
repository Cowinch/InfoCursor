let cursor = document.querySelector("#cursor")
let cursorSize = document.documentElement.style.setProperty

document.addEventListener('mousemove', (e, interacting) => {
    cursor.style.top = e.pageY+5 + 'px'
    cursor.style.left = e.pageX+5 + 'px'
})

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
    if(interacting){
        document.documentElement.style.setProperty('--cursorSize', '180px')
        document.documentElement.style.setProperty('--cursorOpacity', '1')
    } else {
        document.documentElement.style.setProperty('--cursorSize', '0px')
        document.documentElement.style.setProperty('--cursorOpacity', '0')
    }

    if(e.target.closest('#himalayas')){
        cursor.innerHTML = document.getElementById('himalayas-text').innerHTML
    }
    else if (e.target.closest('#zhangjiajie')){
        cursor.innerHTML = document.getElementById('zhangjiajie-text').innerHTML
    }
    else if (e.target.closest('#fuji')){
        cursor.innerHTML = document.getElementById('fuji-text').innerHTML
    }
    else {
        cursor.innerHTML = null
    }
}