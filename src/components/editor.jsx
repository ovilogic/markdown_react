import React, { useState } from 'react';
import '../style/editor.css'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { CgMaximizeAlt, CgCompressRight } from 'react-icons/cg'

function Editor() {
    const [click, setClick] = useState(false)
    const [input, setInput] = useState('')

  
    let size = {}
    let hide = {display: 'none'}
    let show = {}
    
    if (click == false) {
        size = {
            height: '250px',
            width: '200px',
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
    
        
    return (
        <div id='topwindow' style={size}> 
            <div id='topbar'>
                <FaFreeCodeCamp className='fcc' />
                <h5><strong>Editor</strong></h5>
                <CgMaximizeAlt className='max' style={show} onClick={() => 
                    setClick(!click)} />
                <CgCompressRight className='max' style={hide} onClick={() => 
                    setClick(!click)} />
            </div>
        
            <textarea onChange={(event) => setInput(event.target.value)} >
                #elcome to my React Markdown Previewer                   
                    Here is the input:                       
                ## This is a sub-heading...
                ### And here's some other cool stuff:

                Heres some code, `div`, between 2 backticks.

                ```
                // this is multi-line code:

                ```

                You can also make text **bold**... whoa!
                Or _italic_.
                Or... wait for it... **_both!_**
                And feel free to go crazy ~~crossing stuff out~~.

                There's also [links](https://www.freecodecamp.org), and
                Block Quotes!

                And if you want to get really crazy, even tables:

                Wild Header | Crazy Header | Another Header?
                ------------ | ------------- | -------------
                Your content can | be here, and it | can be here....
                And here. | Okay. | I think we get it.

                - And of course there are lists.
                - Some are bulleted.
                                        - With different indentation levels.
                                            - That look like this.


                1. And there are numbered lists too.
                1. Use just 1s if you want!
                1. And last but not least, let's not forget embedded images:

                ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)       
            </textarea>
            
            
        </div>
    );
    
}
 
export default Editor;
