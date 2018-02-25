import fetch from 'node-fetch'
import qs from 'qs'

export default async (message, username, password) => {
  const data = {
    template_id: '102156234',
    username,
    password,
    boxes: [
      {},
      {
        'text': mockify(message),
        'y': 260,
        'width': 502,
        'height': 75
      }
    ]
  }

  const response = await fetch('https://api.imgflip.com/caption_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify(data)
  })

  const result = await response.json()

  return result.data.url
}

export function mockify(text) {
  const charArray = text.toLowerCase().split('')
  let number = Math.random()

  return charArray.map(char => {
    if(shouldCapitalize(number)) {
      number = 0
      return char.toUpperCase()
    } else {
      number += Math.random()
      return char
    }
  }).join('')
}

function shouldCapitalize(number) {
  return number > 0.5
}
