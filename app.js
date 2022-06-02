let n = 0

function render() {
  const title = React.createElement('h1', {}, 'Bonjour !', 
  React.createElement('span', {}, 0))
  ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
  n++
  render()
}, 1000)
