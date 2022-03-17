import React, {useState} from "react";
import '../style/preview.css'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { CgMaximizeAlt, CgCompressRight } from 'react-icons/cg'

function Preview() {
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


    return ( 
        <div id='bottomWindow' style={size}>
            <div id='topbar'>
                    <FaFreeCodeCamp className='fcc' />
                    <h5><strong>Previewer</strong></h5>
                    <CgMaximizeAlt className='max' style={show} onClick={() => 
                    setClick(!click)} />
                    <CgCompressRight className='max' style={hide} onClick={() => 
                    setClick(!click)} />
            </div>
            <div>This is where your input gets translated. It does!!</div>



        </div>

     );
}
 
export default Preview;