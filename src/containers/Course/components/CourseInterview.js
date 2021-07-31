import React,{useContext} from 'react'
import CourseContext from '../courseContext'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarTimes } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating'
import {getFormattedDate}  from '../../../services/common.service'
export default function CourseInterview(){
    const initialRating = 5;
    const {store } = useContext(CourseContext)
    const btnRatingClicked = () =>{
        console.log("Btn rating clicked");
    }
    return (
        <div>
            <h1 className="course-name">{store.course.course_name}</h1>
            <h4 className="course-title">{store.course.course_shortdescription}</h4>
            <div>
                <h4 >
                    Rating: {store.course.averageRating}
                    
                    <a className="btn" onClick={()=>btnRatingClicked()}><Rating  className = "course-rating" emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={store.course.averageRating} readonly="true"></Rating></a>
                    <span>
                        ({store.course.totalReview} ratings)
                    </span>
                </h4>
                
                <div>
                    {store.course.totalStudent} students
                </div>
                <div>
                    Created By {store.course.lecturer}
                </div>
                <div>
                    <span><FontAwesomeIcon icon={faCalendarTimes}></FontAwesomeIcon> Last Updated: {getFormattedDate(store.course.last_update)}</span>
                </div>
                <div>
                    <Button variant="primary">Add to cart</Button>{' '}
                    <Button variant="success">Buy Course</Button>{' '}
                </div>
            </div>
        </div>
    )
}