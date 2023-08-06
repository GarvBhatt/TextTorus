import Alert from "react-bootstrap/Alert";

const TheAlertCompnent = (props)=> {
  return (
    <div style={{height:"50px"}}>
        {(props.TheAlert)?<Alert style={{fontSize:"18px", display:"flex", justifyContent: "space-around"}} variant="success"><strong>{props.TheAlert}</strong></Alert>:""}
    </div>
  );
}

export default TheAlertCompnent;
