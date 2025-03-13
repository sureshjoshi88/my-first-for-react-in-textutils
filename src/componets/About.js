// import React, { useState } from 'react'

export default function About(props) {
    // const [mystyle, setmystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
   let mystyle ={
    color : props.mode==="dark"?"white":"#042743",
    backgroundColor: props.mode==="dark"?"rgb(37 74 104)":"white"
   }
    return (
        <div className='container my-3'>
            <h1 style={{ color: props.mode==="dark"?"white":"#042743"}}>Abouts Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Anal ze Your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextUti1s is a free character counter tool that provides instant character count & word count statistics for a given
                            text. TextUti1s reports the number of words and characters. Thus it is suitable for writing text with word/ character
                            limit.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                            suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
