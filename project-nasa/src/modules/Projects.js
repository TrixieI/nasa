import React from "react";
import { trackPromise } from "react-promise-tracker";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      project: [],
    };
  }

  componentDidMount() {
    let num = Math.floor(Math.random() * 5);
    trackPromise(
      fetch(
        `https://api.nasa.gov/techport/api/projects/1778${num}?api_key=LSIdnYKnmx8rkGvSxebrLjPMDFJmDyGdFu5zWegw`
      )
        .then((data) => data.json())
        .then((res) => {
          this.setState({ project: res.project });
        })
    );
  }

  render() {
    return (
      <div className="info">
        <div>
          <h2>{this.state.project.title}</h2>
        </div>
        <div>
          <p>{this.state.project.description}</p>
          <p>Project status: {this.state.project.statusDescription}</p>
        </div>
      </div>
    );
  }
}

export default Projects;
