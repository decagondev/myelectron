import "pixi.js/unsafe-eval" 
import { useEffect } from 'react'
import { Application, Text, TextStyle, Container } from 'pixi.js'
import  ReactDOM  from 'react-dom'

let pixiApp;
pixiApp = new Application()

const App = () => {
  
  useEffect(() => {
    const bob = ReactDOM.findDOMNode(document.getElementById('bob'))
    const startApp = async () => {
      await pixiApp.init()
      if (pixiApp) {
        const myContainer = new Container()
        const myText = new Text({
          text: "Hello Bob",
          style: new TextStyle({
            align: 'center',
            fill: '0xffffff',
            fontSize: 18,
            fontWeight: '600',            
            letterSpacing: 2,
            dropShadow: true
            })}
        )
        myContainer.addChild(myText)
        pixiApp.stage.addChild(myContainer)
        bob?.appendChild(pixiApp.canvas)
      }
    }
    startApp()
    return () => {
      bob?.removeChild(pixiApp.canvas)
    }


  }, [pixiApp]);

  return (
    <>
      <div id="bob">
        
      </div>
    </>
  );
};

export default App;