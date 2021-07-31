import React from 'react'
import {Card} from 'react-bootstrap'

export default function CourseDescription(){
    return (
        <Card  className="course-card">
            <Card.Body>
                <Card.Title><h2 className="course-card-title">Course Descriptions</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Become a Python Programmer and learn one of employer's most requested skills of 2021!

                    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

                    
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>
    )
}