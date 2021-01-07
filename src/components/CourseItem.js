import React, { Component, Redirect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle,
    CardDeck
  } from 'reactstrap';

export class CourseItem extends Component {
    static displayName = CourseItem.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true, courseCount: 0, error: false, course: '', completed: [] };
    }


    
    componentDidMount() {
        this.populateCourseData();
        this.getCompletedCourses();
    }

    static CompletedOrNot = (courseid, completed) => {
        var i;
        for (i = 0; i < completed.length; i++) { 

            if(courseid == completed[i].courseID){
                i = 0;
                return                             <td>
                <span data-testid='green' font-size= "20px" style={{ color: 'green' }} styles='font-size:100px;'>&#9745;</span>
                     completed
                </td>
            }

          }
        
          i = 0;
          return             <td>
          <span font-size= "20px" style={{ color: 'red' }} styles='font-size:100px;'>&#9744;</span>
           uncompleted
          </td>

        
    }

    goToCourse = () => {

    }


    static renderCourseTable(courses, completed) {
        return (
<CardDeck>
            <div>

            {courses.map(course =>
                        <tr key={course.name}>

                             <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardBody>
                            <CardTitle tag="h5">{course.name}</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            {/* <Button onclick={<Link to={{pathname: '/coursedetails/' + course.id}}></Link>}>Button</Button> */}
                            <td> <Link to={{
                                pathname: '/coursedetails/' + course.id,
                                state: {
                                    coursename: 'course name'
                                }
                                

                            }}>Go to {course.name}</Link></td>

                            <hr></hr>

                            <tr>{this.CompletedOrNot(course.id, completed)}</tr>

                            


                            </CardBody>
                            </Card>
                            <p></p>
                        </tr>
                        
                        
                    )}     
            </div>
            </CardDeck>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CourseItem.renderCourseTable(this.state.courses, this.state.completed);

            let error = this.state.error
            ? <p>there was a problem with the connection.</p>
            : <p></p>

        return (
            <div>
                <h1 id="tabelLabel" >Courses</h1>
                {contents}
                {error}
            </div>
        );
    }

    async populateCourseData() {
        try{
            const response = await fetch('https://localhost:44355/api/course');
            const data = await response.json();
            this.setState({ courses: data});
            console.log(data);
        }
        catch{
            this.setState({ error: true});
        }
    }

    async getCompletedCourses() {
        try{
            const response = await fetch('https://localhost:44355/api/course/' + localStorage.getItem("user") + '/getcompleted');
            const data = await response.json();
            this.setState({ completed: data, loading: false });
            console.log(data);
        }
        catch{
            this.setState({ error: true});
        }
    }


}