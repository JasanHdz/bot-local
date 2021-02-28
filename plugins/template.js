export function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTMLString
  return html.body.children
}

export function templateMessage(message, user) {
  return `<div class="message ${user}">${message}</div>`
}