import React, { Component, Redirect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class CourseItem extends Component {
    static displayName = CourseItem.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true, courseCount: 0, error: false };
    }

    componentDidMount() {
        this.populateCourseData();
    }

    static CompletedOrNot = (completed) => {
        if(completed == true){
            return                             <td>
            <span data-testid='green' font-size= "20px" style={{ color: 'green' }} styles='font-size:100px;'>&#9745;</span>
                 completed
            </td>
        }
        else{
            return             <td>
            <span font-size= "20px" style={{ color: 'red' }} styles='font-size:100px;'>&#9744;</span>
             uncompleted
            </td>
        }
    }

    static renderCourseTable(courses) {
        return (

            <div>
                
      
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}

            {courses.map(course =>
                        <tr key={course.name}>
                            <Card>
                                    <CardBody>
                            <CardTitle tag="h5">{course.name}</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                            <td>{course.name} <Link to={{
                                pathname: '/coursedetails/' + course.id,
                                state: {
                                    coursename: 'course name'
                                }
                                

                            }}>Go to {course.name}</Link></td>

                            {this.CompletedOrNot(course.completed)}


                            </CardBody>
                            </Card>
                            <p></p>
                        </tr>
                        
                        
                    )}     
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CourseItem.renderCourseTable(this.state.courses);

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
            this.setState({ courses: data, loading: false });
            console.log(data);
        }
        catch{
            this.setState({ error: true});
        }
    }


}