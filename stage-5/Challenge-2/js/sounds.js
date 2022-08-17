export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const forestAudio = new Audio('./sounds/Floresta.wav')
  const rainingAudio = new Audio('./sounds/Chuva.wav')
  const coffeeShopAudio = new Audio('./sounds/Cafeteria.wav')
  const firePlaceAudio = new Audio('./sounds/Lareira.wav')
  
  let actualAudioPlaying

  forestAudio.loop = true
  rainingAudio.loop = true
  coffeeShopAudio.loop = true
  firePlaceAudio.loop = true

  buttonPressAudio.volume = 0.02
  kitchenTimer.volume = 0.05

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function isThisAudioPlaying(audio) {
    const isThisAudioPlaying = actualAudioPlaying === audio
  
    if (isThisAudioPlaying) {
      audio.pause()
      actualAudioPlaying = false
      return true
    }
  
    return false
  }
  
  function soundForest() {
    if (isThisAudioPlaying(forestAudio)) {
      return
    }
    if (actualAudioPlaying) {
    actualAudioPlaying.pause()
    }

    forestAudio.play()
    actualAudioPlaying = forestAudio
  }

  function soundRaining() {
    if (isThisAudioPlaying(rainingAudio)) {
      return
    }
    if (actualAudioPlaying) {
      actualAudioPlaying.pause()
    }
  
    rainingAudio.play()
    actualAudioPlaying = rainingAudio
  }

  function soundCoffeeShop() {
    if (isThisAudioPlaying(coffeeShopAudio)) {
      return
    }
    if (actualAudioPlaying) {
      actualAudioPlaying.pause()
    }
  
    coffeeShopAudio.play()
    actualAudioPlaying = coffeeShopAudio
  }

  function soundFirePlace() {
    if (isThisAudioPlaying(firePlaceAudio)) {
      return
    }
    if (actualAudioPlaying) {
      actualAudioPlaying.pause()
    }
  
    firePlaceAudio.play()
    actualAudioPlaying = firePlaceAudio
  }

  function controlVolume(component, volume) {
    component.volume = volume
  }

  return {
    pressButton,
    timeEnd,
    soundForest,
    soundRaining,
    soundCoffeeShop,
    soundFirePlace,
    controlVolume,
    forestAudio,
    rainingAudio,
    coffeeShopAudio,
    firePlaceAudio
  }
}