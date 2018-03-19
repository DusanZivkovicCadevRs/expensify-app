import React from 'react';

export default class Footer extends React.Component {

    state = {
        joke: ''
    }


    getJoke = () =>{
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(res => { console.log(JSON.stringify(res)); this.setState(() => ({ joke: res.value })) })
    }

    render() {
        return (
            <div>
                <h3>Really cool Footer</h3>
                <button onClick={this.getJoke}>Get Joke</button>
                <p>{this.state.joke}</p>
            </div>
        );
    }
}