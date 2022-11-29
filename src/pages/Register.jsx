import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register(){
    return(
        <>
            <FloatingLabel controlId="floatingUsername" label="username" className="mb-3">
                <Form.Control type="text" placeholder="username" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingFirstname" label="Firstname" className="mb-3">
                <Form.Control type="text" placeholder="First name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingLastname" label="Lastname" className="mb-3">
                <Form.Control type="text" placeholder="Last name" />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                <Form.Control type="text" placeholder="Phone" />
            </FloatingLabel>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </>
    )
}

export default Register;