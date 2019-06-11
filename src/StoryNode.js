import React from 'react';
import "./StoryNode";
import Choice from './Choice'

class StoryNode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            character:props.character,
            choices:props.choices
        };
        this.changeState=props.changeState;

    }

    componentDidUpdate(prevProps){
        if(prevProps.character !== this.props.character){
            this.setState({
                choices:this.props.choices,
                character: this.props.character,
            });
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.character}</p>
                    {this.state.choices.map(choice => <Choice changeState={this.changeState} character={choice.character} outcomes={choice.outcomes}/>)}
            </div>

        );
    }
}

export default StoryNode;