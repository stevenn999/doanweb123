import React from 'react'
import { Row, Col, Card} from 'react-bootstrap';
export default function CourseLecturerDescription(){
    return(
        <Card className="course-card">
            <Card.Body>
                <Card.Title>
                    <h2 className="course-card-title">Instructor</h2>
                    <div><h3>Jonathan Lee</h3></div>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Harvard University Lecturer</Card.Subtitle>
                <Card.Body>
                    <Row className="justify-content-md-center">
                        <Col sm={4}>
                            <Card.Text>
                                Lecturer Image
                            </Card.Text>
                            {/* <Card.Img></Card.Img> */}
                        </Col>
                        <Col sm={8}>
                            <Card.Text>
                                Lecturer description
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}