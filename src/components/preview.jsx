import React, {useState} from "react";
import '../style/preview.css'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { CgMaximizeAlt, CgCompressRight } from 'react-icons/cg'



function Preview(props) {
    const [click, setClick] = useState(false)
    

    let size = {}
    let hide = {display: 'none'}
    let show = {}
    
    if (click == false) {
        size = {
            
            height: '800px',
            width: '80vw',
            transition: 'width 2s, height 2s'
        }
        hide = {display: 'none'}
        show = {}

    }
    else {
        size = {
            transform: 'translate(0px, -280px)',
            transition: 'transform 2s',
            height: '90vh'
        }
        hide = {}
        show = {display: 'none'}
        
    }

    // The following variable will be html markup that has been translated
    // in the parent component using the marked function from
    // the 'marked' library.
    var html = props.marked


    return (
         
        <div id='bottomWindow' style={size}>
            
  
            <div className="topbar">
                    <FaFreeCodeCamp className='fcc' />
                    <h5><strong>Previewer</strong></h5>
                    <CgMaximizeAlt className='max' style={show} onClick={() => 
                    setClick(!click)} />
                    <CgCompressRight className='max' style={hide} onClick={() => 
                    setClick(!click)} />
            </div>
            
            
            <span id="preview" dangerouslySetInnerHTML={{__html: html}} />
            
        
        </div>

     );
}
 
export default Preview;