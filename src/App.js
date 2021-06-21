import React from "react";
import parrot from "./imgsrc.jpg";
import "./App.css";

class App extends React.Component {
  // State that contains all person's info a boolean show and a timer
  state = {
    Person: {
      fullName: "Einstein the bird",
      bio: "Einstein is an African grey parrot that was hatched in California in 1987",
      imgSrc: parrot,
      profession: "Parrot Act",
    },
    show: true,
    timer: 0,
  };

  render() {
    return (
      <div className="App">
        {/* Displaying elements if the show state is true */}
        {this.state.show && (
          <div>
            <p>Full Name : {this.state.Person.fullName}</p>
            <p>Bio : {this.state.Person.bio}</p>
            <p>Profession : {this.state.Person.profession}</p>
            <p>Time: {this.state.timer} second(s)</p>
            <img src={this.state.Person.imgSrc} alt="Einstein"></img>
          </div>
        )}
        {/* button to handle the show */}
        <button onClick={this.handleShows}>
          {this.state.show ? "hide" : "show"}
        </button>
      </div>
    );
  }

  handleShows = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
}

export default App;
