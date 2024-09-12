import "@pixi/unsafe-eval";
import { useEffect } from 'react'
import { Application, Text, TextStyle } from 'pixi.js'
import  ReactDOM  from 'react-dom';

const pixiApp = new Application()


const App = () => {
  
  useEffect(() => {
    const myText = new Text("Hello Bob",
        new TextStyle({
          align: 'center',
          fill: '0xffffff',
          fontSize: 50,
          letterSpacing: 20,
          dropShadow: true,
          dropShadowColor: '#E72264',
          dropShadowDistance: 6,
        })
      );
    pixiApp.stage.addChild(myText)
    const bob = ReactDOM.findDOMNode(document.getElementById('bob'))
    bob?.appendChild(pixiApp.renderer.view as any)
    return () => {
      bob?.removeChild(pixiApp.renderer.view as any)
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