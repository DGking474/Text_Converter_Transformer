import React from "react";

export default function About(props) {

    let myStyle = {
        backgroundColor: props.mode === 'dark'?'black':'white',
        color: props.mode === 'dark'?'white':'black'
    }
    // const [myStyle,setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    // const [btnname,setBtnName] = useState('Light mode')

    // const toggleStyle = ()=>{
    //     if(myStyle.backgroundColor === 'white'){
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnName('Dark mode')  
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setBtnName('Light mode')
    //     }
    // }

  return (
    <div className="container" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Word Count</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Instantly get detailed counts of words, characters (with and without spaces), lines, and paragraphs. This feature is invaluable for writers, editors, and anyone needing precise text metrics.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Case Management</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Advanced case handling beyond basic conversion:

              Sentence Case: Convert text to sentence case where the first letter of each sentence is capitalized.
              Toggle Case: Invert the case of each character in the text.
              Random Case: Apply random casing to characters for a quirky text effect.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Whitespace Management</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Manage whitespace with precision:

              Trim Whitespace: Remove leading and trailing spaces from each line.
              Collapse Spaces: Reduce multiple consecutive spaces to a single space.
              Remove Extra Lines: Eliminate unnecessary blank lines to tidy up your text.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="form-check form-switch my-3">
        <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnname}</label>
    </div> */}
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnname}</button>
      </div> */}
    </div>
  );
}
