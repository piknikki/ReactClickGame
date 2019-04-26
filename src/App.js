import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import './App.css';

import friends from "./friends"

class App extends Component {
  state = {
    friends: friends
  }

  handleSelect = (id) => {
    // this is where we shuffle the cards NOT selected
    // need to fix this so it shuffles them ******************************
    // ********************************
    const remainingFriends = this.state.friends.filter(friend => (friend.id !== id));
    this.setState({friends: remainingFriends})
  }

  render() {
    return (
        <div>
          <Wrapper>
            <Navbar ></Navbar>
              <Title><h1 className="title">Memory Game</h1></Title>
            <p>Directions: Click on any image. After you click, the images will shuffle. Don't click on anything more than once.
            </p>

            {this.state.friends.map(friend => (
                <FriendCard
                    name={friend.name}
                    image={friend.image}
                    id={friend.id}
                    key={friend.id}
                    handleDelete={this.handleSelect}
                />
            ))}


          </Wrapper>
        </div>
    );
  }
}



export default App;
