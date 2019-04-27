import React, { Component } from 'react';
import FriendCard from "./Components/FriendCard/";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

import friends from "./friends"

class App extends Component {
  state = {
    friends: friends,
    score: 0,
    topScore: 0,
    alreadyChosenIds: [],
    round: ""
  }

  // thank you, google, for this shuffle thing
  //FISHER YATES SORTING FORMULA FOR SHUFFLING AN ARRAY
  shuffle = friendArray => {
    var i = 0
        , j = 0
        , temp = null

    for (i = friendArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = friendArray[i]
      friendArray[i] = friendArray[j]
      friendArray[j] = temp
    }
    // console.log("NEW ARRAY")
    return friendArray

  }


  handleSelect = (id) => {
    if (this.state.alreadyChosenIds.indexOf(id) === -1) { // if the specific id is not in the array of chosen ids
      this.handleScoring(); // run this function right now
      this.setState({alreadyChosenIds: this.state.alreadyChosenIds.concat(id)}); // add this id
    } else {
      if (this.state.alreadyChosenIds.indexOf(id) >= 0) {
        this.setState({round: "Doh!  You clicked something twice!  New round..."});
        this.handleEndOfGame();
      }
    }
  }

  handleScoring = () => {
    this.setState({round: "  Yeah Boiiiiii!"}); // this shows if you got it right
    const theScore = this.state.score + 1; // tracking score without directly setting state
    this.setState({score: theScore}) // set the score to theScore
    if (theScore > this.state.topScore) {
      this.setState({topScore: theScore}); // if your score is higher than the top score, reset the top score
    } else if (this.state.score === 12) {
      alert("wow! good job!")
    }
    this.setState({friends: this.shuffle(this.state.friends)}) // if it makes it this far, shuffle the images
  }


  handleEndOfGame = () => {
    // reset the state
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      alreadyChosenIds: [],
    });
    this.setState({ friends: this.shuffle(this.state.friends) }) // reset the state to shuffle the images
  }



  render() {
    return (
        <div className="container">
          <Navbar>

            <div className="row">
              <span id="score" className="navbar-item">Score: {this.state.score} </span>{" "}
              <span id="topScore" className="navbar-item">Top Score: {this.state.topScore} </span>
              {" "}
            </div>
            <div className="row">
              <span id="round" className="navbar-item">This round: {this.state.round} </span>
            </div>
          </Navbar>

          <Title />

          <Wrapper>

            {this.state.friends.map(friend => (
                <FriendCard
                    name={friend.name}
                    image={friend.image}
                    id={friend.id}
                    key={friend.id}
                    handleSelect={this.handleSelect}
                />
            ))}
            <Footer />
          </Wrapper>
        </div>
    );
  }
}



export default App;
