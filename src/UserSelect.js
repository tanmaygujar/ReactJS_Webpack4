import React, { Component } from "react";

class UserSelect extends Component {

    constructor() {
        super();
        this.state = {
            players: [{
                id: 1,
                title: "La Liga",
                category: "Football",
                club: "Barcelona",
                name: "Messi"
            },
            {
                id: 2,
                title: "La Liga",
                category: "Football",
                club: "Real Madrid",
                name: "Ronaldo"
            }
            ]

        }
    }

    handlePlayerClick(event){
        event.preventDefault()
        alert("Selected Player : " + event.target.value)
    }

    render() {
        let i = 0;

        let playersList = this.state.players.map(function (option) {
            return React.createElement(
                'option',
                { value: option.name, key: option.id },
                option.name
            );
        });

        return React.createElement(
            'select',
            { onChange: this.handlePlayerClick },
            playersList
        );
    }
}

export default UserSelect;