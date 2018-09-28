import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import camaro1 from "./images/camaro1.jpg"
import camaro2 from "./images/camaro2.jpg"
import challenger from "./images/challenger.jpg"
import corvette1 from "./images/corvette1.jpg"
import corvette2 from "./images/corvette2.jpg"
import fiesta from "./images/fiesta.jpg"
import gt from "./images/gt.jpg"
import mustang1 from "./images/mustang1.jpg"
import mustang2 from "./images/mustang2.jpg"
import mustang3 from "./images/mustang3.jpg"
import shelby from "./images/shelby.jpg"
import viper from "./images/viper.jpg"


import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "camaro1":
        return `${camaro1}`
      case "camaro2":
        return `${camaro2}`
      case "challenger":
        return `${challenger}`
      case "corvette1":
        return `${corvette1}`
      case "corvette2":
        return `${corvette2}`
      case "fiesta":
        return `${fiesta}`
      case "gt":
        return `${gt}`
      case "mustang1":
        return `${mustang1}`
      case "mustang2":
        return `${mustang2}`
      case "mustang3":
        return `${mustang3}`
      case "shelby":
        return `${shelby}`
      case "viper":
        return `${viper}`
      default:
        return `${mustang1}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
