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
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add New Task..." />
       </Form.Group>
       <button class="btn btn-primary" type="submit">Submit</button>

       </Form>
    );
}

export default FormTodo