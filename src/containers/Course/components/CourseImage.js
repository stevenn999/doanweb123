import React, {useContext} from 'react'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon} from 'react-share';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import CourseContext from '../courseContext';
import emptyCourse from '../../../assets/images/emptyCourse.jpg'
export default function CourseImage(){
    const {store } = useContext(CourseContext)
    const testOnclicked = () =>{
        console.log(store);
    }
    return (
        <Card border="light" style={{ width: '350px' }}>
            <Card.Img className="card-img-img" variant="top" src={store.course.course_image?"http://localhost:3001/uploads/images/"+store.course.course_image:emptyCourse} />
            <Card.Body className="card-img-body">
                <Row>
                    <Col>
                        <Card.Text>Share: 
                            {/* <Button variant="primary">Primary</Button>{' '} */}
                            <FacebookShareButton><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton>
                            <TwitterShareButton><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>
                            <EmailShareButton><EmailIcon size={32} round={true}></EmailIcon></EmailShareButton>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text><a className="btn" onClick={()=>testOnclicked()}><FontAwesomeIcon icon={faHeart} size="lg" color="red" ></FontAwesomeIcon></a>Wishlist({store.course.totalWishList})
                        </Card.Text>
                    </Col>
                </Row>
                {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text> */}
            </Card.Body >
            {/* <Card.Footer className="card-img-footer">
                <small className="text-muted">Some thing some thing</small>
            </Card.Footer> */}
        </Card>                           
    )
}