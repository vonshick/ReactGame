import React from 'react';
import './App.css';
import data from './story.json';
import StoryNode from './StoryNode'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      state:0
    };
    this.story=data;
    this.changeState = this.changeState.bind(this);
  }

  changeState(newState){
    this.setState({
        state:newState
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>Defeat the enemy!</p>
          <StoryNode changeState={this.changeState} character={this.story[this.state.state].character} choices={this.story[this.state.state].choices}/>
        </header>
      </div>
    );
  }
}

export default App;
