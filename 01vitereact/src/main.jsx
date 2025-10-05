import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function myApp(){
    return(
        <div>
        <h1>hey sunny how are you?</h1>
        </div>
    )
}
   //created reactElement by myself
 /*const reactElement = {
   type : 'a',
   props : {
    href : 'https://google.com',
    target: '_blank'
   },
   children : 'Click me to visit google'

   }*/

   const anotherElement =(
    <a href="https://google.com" target='_blank' >visit google</a> 
   )
  
   //creating reactElement according to React
      /*const reactElement = React.createElement(
        'a',
        {href : "https://google.com", target:'_blank'},
        'click me to visit google'

     )*/

    

  createRoot(document.getElementById('root')).render(
  
    <App />
  
 )
