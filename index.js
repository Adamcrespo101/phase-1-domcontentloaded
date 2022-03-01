// Your code goes here
document.addEventListener('DOMContentLoaded', () => { 
    update();
})

function update () {
    document.getElementById('text').textContent = 'This is really cool!'
}

//Why is there an error when using .innerText rather than .innerHTML