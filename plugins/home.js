import { addElementHTML } from './template.js'
import Bot from './parser.js'

const bot = new Bot()
const $send = document.getElementById('send')
const $form = document.getElementsByTagName('form')[0]
const $input = document.getElementsByName('message')[0]
const $inbox = document.getElementsByClassName('inbox')[0]

$send.addEventListener('click', addMessage)
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  addMessage()
}

function addMessage() {
  if ($input.value) {
    const formData = new FormData($form)
    const message = formData.get('message')
    $input.value = ''
    addElementHTML(message, $inbox, "me")
    addElementHTML(bot.getResponseMessage(message), $inbox)
    $inbox.scrollTop = $inbox.scrollHeight
    $input.focus()
  }
}