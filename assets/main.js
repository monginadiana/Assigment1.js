document.querySelector('button').addEventListener('click', welcome)

function welcome() {
    let name = document.querySelector('input').value
    document.querySelector('p').innerText = `Hello ${name} welcome to the bootcamp`
}

