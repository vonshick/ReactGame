import React from 'react';
import "./Choice";
import data from './story.json';

class Choice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            character:props.character,
            outcomes:props.outcomes
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeState=props.changeState;
    }

    componentDidUpdate(prevProps){
        if(prevProps.character !== this.props.character){
            this.setState({
                character: this.props.character,
                outcomes: this.props.outcomes
            });
        }
    }

    handleClick(e){
        let outcome = Math.random();
        let nextCharacter = '';
        
        if(outcome < this.state.outcomes[0].probability){
            nextCharacter = this.state.outcomes[0].nextCharacter;
        } else {
            nextCharacter = this.state.outcomes[1].nextCharacter;  
        }

        let nextCharacterIndex = data.findIndex(function(item, i){
            return item.character === nextCharacter
        });

        this.changeState(nextCharacterIndex);
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.character}</button>
        );
    }
}

export default Choice;