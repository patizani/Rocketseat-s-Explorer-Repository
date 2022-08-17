import Sounds from "./sounds.js"
//factory
export default function Timer({minutesDisplay, secondsDisplay}) { //destructuring - extrair dados de arrays ou objetos em variáveis distintas.
  let timerTimeOut
  const newMinutes = Number(minutesDisplay.textContent)//textContent pega o conteúdo do elemento e tb pode alterar o conteúdo dele.

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0") //preenchimento de dados no início
  }
  
  function countdown() {
    //decrementar a cada segundo
        timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        if (isFinished) {
          updateTimerDisplay(newMinutes, 0)
          Sounds().timeEnd()
          return
        }

        if( seconds <= 0 ) {
          seconds = 60
          --minutes
        }
        
        updateTimerDisplay(minutes, String(seconds-1))//programação declarativa
    console.log(minutes,seconds)
        countdown()
      }, 1000) //=1s
    }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function addMinutes() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes >= 55) {
      updateTimerDisplay(59, seconds)
      alert('Não é possivel aumentar mais que 60 minutos no timer.')
      return
    } else {
      updateTimerDisplay(String(minutes + 5), seconds)
    }
  }

  function removeMinutes(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 4) {
      alert('Não é possivel remover 5 minutos do timer.')
    } else {
      updateTimerDisplay(String(minutes - 5), seconds)
    }
  }

  function reset(){
    updateTimerDisplay(newMinutes, 0)
    hold() 
  }

  return {
    updateTimerDisplay, 
    countdown,
    hold,
    addMinutes,
    removeMinutes,
    reset
  }
}