import data from '../db/array'
import refs from './refs'
const { list } = refs

import temlateByElem from '../templates/markupByElem.handlebars'
import templateByArray from '../templates/markupByArray.handlebars'

// photographer
// src.tiny
// src.original

const markup1 = data.map(object => {
  const {
    photographer,
    src: { tiny, original },
  } = object
  console.log(
    temlateByElem({
      photographer,
      tiny,
    }),
  )

  const markup2 = templateByArray(data)
  // console.log(markup2)
  list.insertAdjacentHTML('beforeend', markup2)

  const item = `
    <li>
        <img src="${tiny}" alt="${photographer}" data-src="${original}">
        <p>${photographer}</p>
      </li>
  `
  //   console.log(item)
  return item
})
// console.log(markup1.join(''))
