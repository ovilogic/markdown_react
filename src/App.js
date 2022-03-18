import { useState } from 'react/cjs/react.production.min';
import Editor from './components/editor';
import Preview from './components/preview';
import './style/App.css'


function App(props) {
  
  return (
    
      <div className="App">
        
        
        <Editor />
      
        <Preview />

      
      </div>
    
  );
}

export default App;
