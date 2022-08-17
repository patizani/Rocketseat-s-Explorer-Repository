import { 
  playButton,
  pauseButton,
  stopButton,
  addFiveButton,
  removeFiveButton,
  forestButton,
  rainingButton,
  fireplaceButton,
  coffeeShopButton,
  forestVolume,
  rainingVolume,
  fireVolume,
  coffeeVolume
  } from "./elements.js"
  
export default function({controls, timer, sound}
){
  //Event-driven - Programação direcionada a evento
  //Evento de clique
  //Callback: função passada por argumento que será executada em determinado tempo.
  playButton.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  pauseButton.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  stopButton.addEventListener('click', function() {
    timer.reset()
    sound.pressButton()
  })

  addFiveButton.addEventListener('click', function() {
    timer.addMinutes()
    sound.pressButton()
  })

  removeFiveButton.addEventListener('click', function() {
    timer.removeMinutes()
    sound.pressButton()
  })

  forestButton.addEventListener('click', function() {
    controls.forest()
    sound.soundForest()
  })

  rainingButton.addEventListener('click', function() {
    controls.raining()
    sound.soundRaining()
  })

  coffeeShopButton.addEventListener('click', function () {
    controls.coffeeShop()
    sound.soundCoffeeShop()
  })

  fireplaceButton.addEventListener('click', function () {
    controls.fireplace()
    sound.soundFirePlace()
  })

  forestVolume.addEventListener('input', () => {
    sound.controlVolume(sound.forestAudio, forestVolume.value)
  })

  rainingVolume.addEventListener('input', () => {
    sound.controlVolume(sound.rainingAudio, rainingVolume.value)
  })

  coffeeVolume.addEventListener('input', () => {
    sound.controlVolume(sound.coffeeShopAudio, coffeeVolume.value)
  })

  fireVolume.addEventListener('input', () => {
    sound.controlVolume(sound.firePlaceAudio, fireVolume.value)
  })
}