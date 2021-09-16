import debounce from 'debounce'
import myRefs from './refs'
const { form: myForm } = myRefs
// console.log(debounce)
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
defaultModules.set(PNotifyMobile, {})

myForm.addEventListener(
  'input',
  debounce(e => {
    let value = e.target.value
    console.log(value)
    if (value === '') {
      //   alert(`Вы ничего не ввели!`)
      error({
        text: `Вы ничего не ввели!`,
      })
    } else if (!isNaN(value)) {
      //   alert('Вы ввели числовое значение')
      alert({
        text: 'Вы ввели числовое значение',
      })
    } else {
      //   alert(`Спасибо за ваше сообщение!`)
      notice({
        text: `Спасибо за ваше сообщение!`,
      })
    }
  }, 350),
)
