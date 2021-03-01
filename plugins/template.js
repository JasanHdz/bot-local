export function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTMLString
  return html.body.children
}

export function templateMessage(message, user = "bot") {
  return `<div class="message ${user}">${message}</div>`
}

export function addElementHTML(message, container, user) {
  const HTMLString = templateMessage(message, user)
  const messageElement = createTemplate(HTMLString)
  container.append(messageElement[0])
}