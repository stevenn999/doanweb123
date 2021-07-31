import axios from "../utils/axios";
export function getAllCourse() {
    return axios.get('/courses');
}
  
export function getCourseSingleCourse(courseId){
    return axios.get(`/courses/${courseId}`);
}