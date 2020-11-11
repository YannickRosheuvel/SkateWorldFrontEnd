import React, { Component } from 'react';
import ReactPlayer from 'react-player'

export class CourseDetails extends Component {
    static displayName = CourseDetails.name;

    constructor(props) {
        super(props);
        this.state = { course: [], loading: true, tricks: [], trickNumber: 0, user: Number, buttonText: "Next trick" };
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

    nextTrick = () => {

        if (this.state.trickNumber + 1 < this.state.tricks.length)
            this.setState({
                trickNumber: this.state.trickNumber + 1
            })

            if(this.state.buttonText == "Complete course"){
                alert("Course completed");
                
            }

            if(this.state.trickNumber == this.state.tricks.length - 2){
                this.setState({
                    buttonText: "Complete course"
                })
            }

        console.log(this.state.trickNumber);
    }

    getCourse(course, tricks, trickNumber) {
        return (
            <div>
                <h1 id="tabelLabel" >{course.name}</h1>
                <ReactPlayer controls url={tricks[this.state.trickNumber].videoPath} />
                <em>{tricks[this.state.trickNumber].description}</em>
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
        conso.log(data);
    }


}