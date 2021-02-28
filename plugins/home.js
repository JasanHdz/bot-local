import { createTemplate, templateMessage } from './template.js'
import { containts } from './parser.js'

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

function addElementHTML(message, user = "bot") {
  const HTMLString = templateMessage(message, user)
  const messageElement = createTemplate(HTMLString)
  $inbox.append(messageElement[0])
}

function addMessage() {
  if ($input.value) {
    const formData = new FormData($form)
    const message = formData.get('message')
    $input.value = ''
    addElementHTML(message, "me")
    getBotMessage(message.toLowerCase())
    $inbox.scrollTop = $inbox.scrollHeight
  }
}

function getBotMessage(message) {
  switch (true) {
    case containts(message, ["hola", "hi"]): 
      return addElementHTML("Hola")
    case containts(message, ["llamas", "tu nombre"]): 
      return addElementHTML("Me llamo Mohamed Ali")
    case containts(message, ["como estas", "cómo estás"]):
      return addElementHTML("Muy bien tu?")
    case containts(message, ["creo", "creó", "creador", "mision", "misión"]): 
      return addElementHTML("Me creo Jasan Hernández con azucar amor y muchos colores ❤")
    case containts(message, ["de que se trata el bot", "proposito", "bot", "dedicas"]):
      return addElementHTML("Me dedicó a resolver problemas de la FCC")
    default: 
      return addElementHTML("Disculpá, creo que no te entendí")
  }
}