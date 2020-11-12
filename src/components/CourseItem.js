import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CourseItem extends Component {
    static displayName = CourseItem.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true, courseCount: 0 };
    }

    componentDidMount() {
        this.populateCourseData();
    }

    static renderCourseTable(courses) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course =>
                        <tr key={course.name}>
                            <td>{course.id}</td>
                            <td>{course.name} <Link to={{
                                pathname: '/coursedetails/' + course.id,
                                state: {
                                    coursename: 'course name'
                                }

                            }}>Go to {course.name}</Link></td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CourseItem.renderCourseTable(this.state.courses);

        return (
            <div>
                <h1 id="tabelLabel" >Courses</h1>
                {contents}
            </div>
        );
    }

    async populateCourseData() {
        const response = await fetch('https://localhost:44355/api/course');
        const data = await response.json();
        this.setState({ courses: data, loading: false });
        console.log(data);
    }

    async xp() {
        const response = await fetch('https://localhost:44355/api/user/' + 5 + '/xp');
        const data = await response.json();
        console.log(data);
    }
}