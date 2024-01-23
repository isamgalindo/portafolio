import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Post(props) {
 
 return (
    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <Card style={{ width: "30rem", borderWidth: '5px', borderColor: "pink"}}>
       <Card.Body className="mb-3">
         <Card.Title style={{ display: 'flex', justifyContent: 'center' }} >Laura Isabela Martinez Galindo</Card.Title>
         <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>Computer engineer</Card.Text>
       </Card.Body>
     </Card>
   </Col>
 );
}

export default Post;