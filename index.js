let changeColor = document.getElementById('btn')
changeColor.addEventListener('click', () => {
  changeColor.innerText = 'Clicked'
  changeColor.style.color = 'Red'
  changeColor.style.backgroundColor = 'pink'
  
})