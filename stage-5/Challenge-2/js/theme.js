export default function({lightThemeButton, darkThemeButton}
  ){ 

    const body = document.querySelector('body')

    function changeTheme() {
      lightThemeButton.addEventListener('click', () => {
        darkThemeButton.classList.remove('hide')
        lightThemeButton.classList.add('hide')
        body.classList.add('theme-dark')
      })
    
      darkThemeButton.addEventListener('click', () => {
        darkThemeButton.classList.add('hide')
        lightThemeButton.classList.remove('hide')
        body.classList.remove('theme-dark')
        body.classList.add('theme-light')
      })
    }
    changeTheme()

    return {
      changeTheme
    }

  }