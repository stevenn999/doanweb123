import React from 'react';
import Rating from 'react-rating'
import {Card} from 'react-bootstrap'
export default function Review(){
    const initialRating =4;
    const btnRatingClicked = (rate) =>{
        console.log("rating log",rate);
    }
    return (
        <Card className="course-card">
            <Card.Body>
                <Card.Title><h2 className="course-card-title">Reviews</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> 
                    <h4>
                        Rating: {initialRating}
                        <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                        <span>
                            (2300 ratings)
                        </span>
                    </h4>
                </Card.Subtitle>
                <Card.Body>
                    <div className="d-flex justify-content-center row">
                        <div className="d-flex flex-column col-md-8">
                            <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38"></img>
                                <a className="btn"   >
                                    <Rating onClick={(rate)=>btnRatingClicked(rate)} onHover={(rate) => document.getElementById('label-onrate').innerHTML = rate || ''} emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={5}></Rating>
                                    <span className="badge" id="label-onrate"></span>
                                </a>
                                <input type="text" className="form-control mr-3" placeholder="Add comment"></input>
                                <button className="btn btn-primary" type="button">Comment</button>
                            </div>
                            <div className="coment-bottom bg-white p-2 px-4">
                                <div className="commented-section mt-2">
                                    <div className="d-flex flex-row align-items-center commented-user">
                                        <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38"></img>
                                        <h5 className="mr-2">Corey oates</h5>
                                        <span className="dot mb-1"></span>
                                        <div>
                                            <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                                        </div>
                                        <span className="mb-1 ml-2">4 hours ago</span>
                                    </div>
                                    <div className="comment-text-sm">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                    </div>
                                    <div className="reply-section">
                                        <div className="d-flex flex-row align-items-center voting-icons">
                                            <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                                            <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                                            <span className="ml-2">10</span>
                                            <span className="dot ml-2"></span>
                                            <h6 className="ml-2 mt-1">Reply</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="commented-section mt-2">
                                    <div className="d-flex flex-row align-items-center commented-user">
                                        <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38"></img>
                                        <h5 className="mr-2">Samoya Johns</h5>
                                        <span className="dot mb-1"></span>
                                        <div>
                                            <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                                        </div>
                                        <span className="mb-1 ml-2">5 hours ago</span>
                                    </div>
                                    <div className="comment-text-sm">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span>
                                    </div>
                                    <div className="reply-section">
                                        <div className="d-flex flex-row align-items-center voting-icons">
                                            <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                                            <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                                            <span className="ml-2">15</span>
                                            <span className="dot ml-2"></span>
                                            <h6 className="ml-2 mt-1">Reply</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="commented-section mt-2">
                                    <div className="d-flex flex-row align-items-center commented-user">
                                        <img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38"></img>
                                        <h5 className="mr-2">Makhaya andrew</h5>
                                        <span className="dot mb-1"></span>
                                        <div>
                                            <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                                        </div>
                                        <span className="mb-1 ml-2">10 hours ago</span>
                                    </div>
                                    <div className="comment-text-sm">
                                        <span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span>
                                    </div>
                                    <div className="reply-section">
                                        <div className="d-flex flex-row align-items-center voting-icons">
                                            <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                                            <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                                            <span className="ml-2">25</span>
                                            <span className="dot ml-2"></span>
                                            <h6 className="ml-2 mt-1">Reply</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Card.Body>
            </Card.Body>
        </Card>
        
    )
}