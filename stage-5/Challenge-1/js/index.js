import Timer from "./timer.js"
import Sounds from "./sounds.js"

const buttonPlay = document.querySelector('.play')  //pesquisa pelo selector play 
const buttonStop = document.querySelector('.stop')
const buttonAddFive = document.querySelector('.addfive')
const buttonRemoveFive = document.querySelector('.removefive')
const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRaining = document.querySelector('.raining')
const buttonSoundCoffeeShop = document.querySelector('.coffeeshop')
const buttonSoundFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const timer = Timer({minutesDisplay, secondsDisplay})
const sound = Sounds()

//Event-driven - Programação direcionada a evento
//Evento de clique
//Callback: função passada por argumento que será executada em determinado tempo.
buttonPlay.addEventListener('click', function() {
  timer.countdown()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  timer.hold()
  sound.pressButton()
})

buttonAddFive.addEventListener('click', function() {
  timer.addMinutes()
  sound.pressButton()
})

buttonRemoveFive.addEventListener('click', function() {
  timer.removeMinutes()
  sound.pressButton()
})


buttonSoundForest.addEventListener('click', function() {
  buttonSoundForest.classList.toggle('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.remove('select')

  sound.soundForest()

})

buttonSoundRaining.addEventListener('click', function() {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.toggle('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.remove('select')

  sound.soundRaining()
})

buttonSoundCoffeeShop.addEventListener('click', function () {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.toggle('select')
  buttonSoundFirePlace.classList.remove('select')

  sound.soundCoffeeShop()
})

buttonSoundFirePlace.addEventListener('click', function () {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.toggle('select')

  sound.soundFirePlace()

})