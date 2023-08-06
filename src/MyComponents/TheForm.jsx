import { useState } from "react";
import {Container} from "react-bootstrap";
import {Form,Button} from "react-bootstrap";

const TheForm = (props)=>
{
    const [text,setText] = useState("");
    const handleOnClickForListenText = (e)=>
    {
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }
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
    const handleOnClickForRemoveExtraSpaces = ()=>
    {
        setText(text.toString().trim());
        props.showTheAlert("Text copied to clipboard");
    }
    const handleOnClickForCopyToClipBoard = ()=>
    {
        navigator.clipboard.writeText(text);
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
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForUpperCase} variant="success">UpperCase</Button>
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForLowerCase}  variant="success">LowerCase</Button>
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForListenText} variant="success">ListenText</Button>
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForCopyToClipBoard} variant="success">ClipBoard</Button>
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForRemoveExtraSpaces} variant="success">RemoveExtraSpaces</Button>
                <Button disabled={!text} className="me-2 my-1" onClick={handleOnClickForCls}  variant="success">Cls</Button>
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
                <p>Your text has {text.length} letters and {text.trim().split(/\s+/).filter((word) => word !== "").length} words</p>
            </div>
        </Container>
    )
}
export default TheForm;