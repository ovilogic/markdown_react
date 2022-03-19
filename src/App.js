
import React, { useState } from 'react';
import Preview from './components/preview';
import './style/App.css'
import './style/editor.css'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { CgMaximizeAlt, CgCompressRight } from 'react-icons/cg'
import { marked } from 'marked';



function App() {

const initialText = `
# Heading 1
## Heading 2
[link]()
\`const inlineCode = function();\`
\`\`\`javascript
const printHey = (firstName) => {
console.log(\`Hey \${firstName}!\`)
}
\`\`\`
- List
- List Item
> Block Quote
![image]()
**Bold Text**
`;

    

  const [click, setClick] = useState(false)
  const [input, setInput] = useState(initialText)


  let size = {}
  let hide = {display: 'none'}
  let show = {}
  
  if (click == false) {
      size = {
          height: '250px',
          width: '80vw',
          transition: 'width 2s, height 2s'
      }
      hide = {display: 'none'}
      show = {}

  }
  else {
      size = {
          width: '80vw',
          height: '1600px',
          transition: 'width 2s, height 2s'
      }
      hide = {}
      show = {display: 'none'}
      
  }

  const translated = marked(input)
  console.log('translated is:    ', translated)
  
  return (

      
    
      <div className="App">
        <div id='topwindow' style={size}> 
            <div className='topbar'>
                <FaFreeCodeCamp className='fcc' />
                <h5><strong>Editor</strong></h5>
                <CgMaximizeAlt className='max' style={show} onClick={() => 
                    setClick(!click)} />
                <CgCompressRight className='max' style={hide} onClick={() => 
                    setClick(!click)} />
            </div>
        
            <textarea id='editor' onChange={(event) => setInput(event.target.value)} >
                    {initialText}
                    
            </textarea>
            
            
        </div>
        
    

        <Preview marked={translated} />
        

      
      </div>
    
  );
}

export default App;
