import React from   'react';
import {Card} from 'react-bootstrap'
export default function OtherCourse(){
    return (
        <Card className="course-card">
            <Card.Body>
                <Card.Title> <h2 className="course-card-title">5 khoá học khác cùng lĩnh vực được mua nhiều nhất</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}