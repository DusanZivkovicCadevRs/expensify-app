import React from 'react';

export default class Banner extends React.Component {

    state = {
        joke: ''
    }


    getJoke = () => {
        fetch('https://picsum.photos/200/300/?random')
            .then(res => res.json())
            .then(res => { console.log(JSON.stringify(res)); this.setState(() => ({ joke: res })) })
    }

    getBannerImage = () => {
        return (
            <div>
                <img src='https://picsum.photos/200/300/?random' />
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3>Superior Banner</h3>
                <img src='https://picsum.photos/300/200/?random' />
            </div>
        );
    }
}