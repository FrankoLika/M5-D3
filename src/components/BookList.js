import React from 'react'
import SingleBook from './SingleBook'
import { Container, Col } from 'react-bootstrap'

const BookList = ({ books }) => {
    return (
        <Container className='d-flex justify-content-center flex-wrap gap-3'>
            {books && books.map((book) => {
                return (
                    <Col key={book.asin}>
                        <SingleBook book={book} />
                    </Col>
                )
            })}
        </Container>
    )
}

export default BookList