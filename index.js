// Write your code here!
let main= document.querySelector('main#main')
main.remove()
let newHeader= document.createElement('h1')
newHeader.id= "victory"
document.body.appendChild(newHeader)
newHeader.innerHTML= "Daisy is the champion"