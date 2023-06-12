import React from 'react'
import { Form } from 'react-bootstrap';

function FormTodo({addTodo}) {
    const[value,setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
       <Form onSubmit={handleSubmit}> 
       <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
       </Form.Group>
       <button variant = "primary mb-3" type = "submit">Submit</button>

       </Form>
    );
}

export default FormTodo