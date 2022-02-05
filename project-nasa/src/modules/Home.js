import React from "react";
import { trackPromise } from "react-promise-tracker";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      apod: [],
    };
  }

  componentDidMount() {
    trackPromise(
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=LSIdnYKnmx8rkGvSxebrLjPMDFJmDyGdFu5zWegw`
      )
        .then((data) => data.json())
        .then((res) => {
          this.setState({ apod: res });
          console.log(this.state.apod);
        })
    );
  }

  render() {
    return (
      <div className="info">
        <h1>Astronomy Picture of the Day</h1>
        <div className="apod">
          <h3>{this.state.apod.title}</h3>
          <h4>{this.state.apod.date}</h4>
          <img src={this.state.apod.url} alt="APOD" />
          <h5>Explanation:</h5>
          <p>{this.state.apod.explanation}</p>
        </div>
      </div>
    );
  }
}

export default Home;
