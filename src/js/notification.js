import debounce from 'debounce'
import myRefs from './refs'
const { form: myForm } = myRefs

import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'

import '@pnotify/core/dist/PNotify.css'
import * as PNotifyMobile from '@pnotify/mobile'
import '@pnotify/mobile/dist/PNotifyMobile.css'

defaultModules.set(PNotifyMobile, {})

myForm.addEventListener(
  'input',
  debounce(e => {
    let value = e.target.value
    console.log(e.target.value)
    if (value === ' ') {
      //   alert(`Вы ничего не ввели!`)
      error({
        text: `Вы ничего не ввели!`,
      })
    } else if (!isNaN(value)) {
      //   alert('Вы ввели числовое значение')
      info({
        text: 'Вы ввели числовое значение',
      })
    } else {
      //   alert(`Спасибо за ваше сообщение!`)
      success({
        text: `Спасибо за ваше сообщение!`,
      })
    }
  }, 350),
)
