import { createTemplate, templateMessage } from './template.js'

const $send = document.getElementById('send')
const $form = document.getElementsByTagName('form')[0]
const $input = document.getElementsByName('message')[0]
const $inbox = document.getElementsByClassName('inbox')[0]

$send.addEventListener('click', function () {
  if ($input.value) {
    console.log('enviamos el mensaje')
    addMessage()
  }
})

$form.addEventListener('submit', function (event) {
  event.preventDefault()
  addMessage()
})

function addMessage() {
  const formData = new FormData($form)
  const message = formData.get('message')
  $input.value = ''
  const HTMLString = templateMessage(message, "me")
  addElementHTML(HTMLString)
  getBotMessage(message)
}

function getBotMessage(message) {
  const HTMLString = templateMessage('Bot ha recibido el mensaje', 'bot')
  addElementHTML(HTMLString)
}

function addElementHTML(HTMLString) {
  const messageElement = createTemplate(HTMLString)
  $inbox.append(messageElement[0])
}