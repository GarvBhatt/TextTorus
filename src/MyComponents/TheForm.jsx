import { useState } from "react";
import {Container} from "react-bootstrap";
import {Form,Button} from "react-bootstrap";

const TheForm = (props)=>
{
    const [text,setText] = useState("");
    const handleOnClickForUpperCase = (e)=>
    {
        setText(text.toUpperCase());
        props.showTheAlert("Converted to uppercase");
    }
    const handleOnClickForLowerCase = (e)=>
    {
        setText(text.toLowerCase());
        props.showTheAlert("Converted to lowercase");
    }
    const handleOnClickForCls = ()=>
    {
        setText("");
        props.showTheAlert("Text cleared");
    }
    const handleOnClickForCopyToClipBoard = ()=>
    {
        const divi=document.createElement("textarea");
        divi.value = text.toString();
        document.body.appendChild(divi);
        divi.select();
        document.execCommand("copy");
        document.body.removeChild(divi);
        props.showTheAlert("Text copied to clipboard");
    }
    const handleOnChange = (e) =>
    {
        setText(e.target.value);
    }

    return (
        <Container style={props.TextStyle}>
            <Form>
                <Form.Label className="h2 mt-5">
                    Enter Text
                </Form.Label>
                <Form.Control className="my-3" value={text} placeholder="Enter text" onChange={handleOnChange} as="textarea" rows={7}/>
                <Button className="me-3" onClick={handleOnClickForUpperCase} variant="success">UpperCase</Button>
                <Button className="me-3" onClick={handleOnClickForLowerCase}  variant="success">LowerCase</Button>
                <Button className="me-3" onClick={handleOnClickForCls}  variant="success">Cls</Button>
                <Button className="me-3" onClick={handleOnClickForCopyToClipBoard} variant="success">ClipBoard</Button>
            </Form>

            <div className="information">
                <h1>
                    Preview
                </h1>
                <p>
                    {
                        (text)?text:"No text"
                    }
                </p>
                <p>Your text has {text.length} letters and {(text.charAt(text.length-1)===' ' || text.length===0)?text.split(" ").length-1:text.split(" ").length} words</p>
            </div>
        </Container>
    )
}
export default TheForm;