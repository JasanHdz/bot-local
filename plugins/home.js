const $send = document.getElementById('send')
const $form = document.getElementsByTagName('form')[0]
const $input = document.getElementsByName('message')[0]
const messages = []

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
  messages.push(message)
  $input.value = ''
  console.log(messages)
}