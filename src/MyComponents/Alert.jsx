import Alert from "react-bootstrap/Alert";

const TheAlertCompnent = (props)=> {
  return (
    <>
        {(props.TheAlert)?<Alert style={{fontSize:"18px", display:"flex", justifyContent: "space-around"}} variant="success"><strong>{props.TheAlert}</strong></Alert>:""}
    </>
  );
}

export default TheAlertCompnent;
