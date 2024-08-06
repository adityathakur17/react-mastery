import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>
        Custom App!
      </h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props:{
//       href:'https://gogle.com',
//       target: '_blank'
//   },
//   children: "Click me to visist googoo"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Another Element </a>
)

const anotherUser = 'Pep'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit googoo',
  anotherUser
                                  
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
  
)
 