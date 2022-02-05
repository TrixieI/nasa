import React from "react";
import "./rover.css";
import { trackPromise } from "react-promise-tracker";

class Rover extends React.Component {
  constructor() {
    super();
    this.state = {
      rover: [],
      num: null,
    };
  }

  handleRover = () => {
    trackPromise(
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${this.state.num}&api_key=LSIdnYKnmx8rkGvSxebrLjPMDFJmDyGdFu5zWegw`
      )
        .then((data) => data.json())
        .then((res) => {
          this.setState({ rover: res.photos });
        })
    );
  };

  handleBach = (e) => {
    let num = parseInt(e.target.value);
    if (typeof num == "number") {
      this.setState({ num: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <div></div>
        <div>
          <h2>Mars rover images</h2>
          <p>You can generate some awesome images from NASA's rover on Mars!</p>
          <input placeholder="Numbers only..." onChange={this.handleBach} />
          <button onClick={this.handleRover} type="button">
            Generate
          </button>
          <br></br>
        </div>
        <br></br>
        <div className="rover">
          {this.state.rover.length > 0 ? (
            this.state.rover.map((item, i) => {
              return (
                <div className="rover" key={i}>
                  <img src={item.img_src} alt="Mars Landscape" />
                </div>
              );
            })
          ) : (
            <div>
              <p>
                This bach is empty, input a bach number and generate new photos
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Rover;
