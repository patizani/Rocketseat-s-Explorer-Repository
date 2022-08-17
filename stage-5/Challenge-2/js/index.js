import { lightThemeButton,
         darkThemeButton,
         minutesDisplay,
         secondsDisplay,
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
         } from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import Theme from "./theme.js"

const controls = Controls({
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
})

const timer = Timer({minutesDisplay, secondsDisplay})
const sound = Sounds()

Events({controls, timer, sound})

Theme({lightThemeButton, darkThemeButton})

