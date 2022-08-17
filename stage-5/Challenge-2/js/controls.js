export default function controls({
  playButton,
  pauseButton,
  stopButton,
  forestButton,
  rainingButton,
  coffeeShopButton,
  fireplaceButton,
  forestCard,
  rainCard,
  fireCard,
  coffeeCard
}) {

  function play() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    stopButton.classList.remove('hide')
  }

  function pause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }

  function forest() {
    forestButton.classList.toggle('select')
    rainingButton.classList.remove('select')
    coffeeShopButton.classList.remove('select')
    fireplaceButton.classList.remove('select')
    forestCard.classList.toggle('select')

  }

  function raining() {
    forestButton.classList.remove('select')
    rainingButton.classList.toggle('select')
    coffeeShopButton.classList.remove('select')
    fireplaceButton.classList.remove('select')
    rainCard.classList.toggle('select')
  }

  function coffeeShop() { 
    forestButton.classList.remove('select')
    rainingButton.classList.remove('select')
    coffeeShopButton.classList.toggle('select')
    fireplaceButton.classList.remove('select')
    coffeeCard.classList.toggle('select')
  }

  function fireplace() {
    forestButton.classList.remove('select')
    rainingButton.classList.remove('select')
    coffeeShopButton.classList.remove('select')
    fireplaceButton.classList.toggle('select')
    fireCard.classList.toggle('select')
  }

  return {
    play,
    pause,
    forest,
    raining,
    coffeeShop,
    fireplace
  }
}