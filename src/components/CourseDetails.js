import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Redirect, useHistory } from 'react-router-dom'
import axios from 'axios';
import Chat from './Chat';

export class CourseDetails extends Component {
    static displayName = CourseDetails.name;

    constructor(props) {
        super(props);
        this.state = { course: [], loading: true, tricks: [], trickNumber: 0, user: Number, buttonText: "Next trick", courseCompleted: false };
    }

    componentDidMount() {
        this.populateTricksData();
        this.populateCourseData();
    }
 

     previousTrick = () => {

        if (this.state.trickNumber - 1 >= 0)
            this.setState({
                trickNumber: this.state.trickNumber - 1,
                buttonText: "Next Trick"
            })

        console.log(this.state.trickNumber);
    }

    async xp() {
        const response = await fetch('https://localhost:44355/api/user/' + 5 + '/xp');
        const data = await response.json();
        console.log(data);
    }

    nextTrick = () => {

        if (this.state.trickNumber + 1 < this.state.tricks.length)
            this.setState({
                trickNumber: this.state.trickNumber + 1
            })

            if(this.state.buttonText === "Complete course"){

                this.xp();
                
                axios.put('https://localhost:44355/api/course/' + this.props.match.params.id + '/complete')
                    .then(response =>
                    {
                    console.log(response)
                    if(response.status === 200){
                        this.props.history.push('/courses')
                        alert("Course completed");
                    }

                })
                    .catch(error => {
                        console.log(error)
                    })


            }

            if(this.state.trickNumber === this.state.tricks.length - 2){
                this.setState({
                    buttonText: "Complete course"
                })
            }

        console.log(this.state.trickNumber);
    }

    getCourse(course, tricks) {
        return (
            <div>
                <h1 id="tabelLabel" >{course.name}</h1>
                <hr></hr>
                <ReactPlayer width='370px' height='205px' controls url={tricks[this.state.trickNumber].videoPath} />
                <em>{tricks[this.state.trickNumber].description}</em>
                <hr></hr>
            </div>
        )

    }
    
    
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.getCourse(this.state.course, this.state.tricks, this.state.trickNumber);

        return (
            <form>
                {contents}
                <Chat></Chat>
                <button type="button" onClick={this.previousTrick} class="btn btn-outline-primary">Previous trick</button>
                <button type="button" onClick={this.nextTrick} class="btn btn-outline-primary" >{this.state.buttonText}</button>
            </form>
        );
    }

    async populateCourseData() {
        const response = await fetch('https://localhost:44355/api/course/'+ this.props.match.params.id);
        const data = await response.json();
        this.setState({ course: data});
        console.log(data);
    }

    async populateTricksData() {
        const response = await fetch('https://localhost:44355/api/course/' + this.props.match.params.id + "/tricks");
        const data = await response.json();
        this.setState({ tricks: data, loading: false });
        this.state.tricks = data;
        console.log(data);
    }


}