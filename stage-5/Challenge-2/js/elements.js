const lightThemeButton = document.querySelector('.lightmode')
const darkThemeButton = document.querySelector('.darkmode')

const minutesDisplay = document.querySelector('.minutes') //pesquisa pelo selector play 
const secondsDisplay = document.querySelector('.seconds')

const playButton = document.querySelector('.play')  
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

const addFiveButton = document.querySelector('.addfive')
const removeFiveButton = document.querySelector('.removefive')

//sounds
const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.raining')
const fireCard = document.querySelector('.fireplace')
const coffeeCard = document.querySelector('.coffeeshop')

//buttons
const forestButton = forestCard.querySelector('.cardButton')
const rainingButton = rainCard.querySelector('.cardButton')
const fireplaceButton = fireCard.querySelector('.cardButton')
const coffeeShopButton = coffeeCard.querySelector('.cardButton')

//volume
const forestVolume = forestCard.querySelector('input')
const rainingVolume = rainCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

export {
  lightThemeButton,
  darkThemeButton,
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  addFiveButton,
  removeFiveButton,
  forestButton,
  rainingButton,
  coffeeShopButton,
  fireplaceButton,
  forestVolume,
  rainingVolume,
  fireVolume,
  coffeeVolume,
  forestCard,
  rainCard,
  fireCard,
  coffeeCard
}