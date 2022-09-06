const text = 'Yesssssirrrrrrrrrrrrrrrrr'
let index = 0;

function Texto() {
    document.body.innerText = text.slice(0, index)
    index++
    if (index > text.length - 1) {
        index = 0
    }
}
setInterval(Texto, 100)
