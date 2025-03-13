import React, { useState } from 'react'

export default function About() {
    const[mystyle,setmystyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btntext,setbtnText]=useState("Enable dark mode")

    const toggleStyle = ()=>{
        if(mystyle.color==="black"){
            setmystyle({
                color:"white",
                backgroundColor:"black",
                border:"1px solid white"
            })
            setbtnText("Enable Light Mode")
        }else{
            setmystyle({
                color:"black",
                backgroundColor:"white",
            })
            setbtnText("Enable Dark Mode")
        }
    }
    return (
        <div className='container my-3' style={mystyle}>
            <h1>Abouts Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Anal ze Your text   
                                            </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Free to use
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
                        Browser Compatible
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
