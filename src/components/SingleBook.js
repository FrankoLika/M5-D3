import React, {useState} from 'react'
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
    const[selected, setSelected] = useState("false");

    const toggleSelected = () => {
        setSelected(!selected)
    }
    
    return (
        <Card style={{ width: '14rem'}} className={`${!selected ? "border border-danger" : "border"}`}>
            <Card.Img style={{ height: '20rem' }} src={book.img} onClick={toggleSelected}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default SingleBook