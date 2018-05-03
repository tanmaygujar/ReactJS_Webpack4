import React, { Component } from "react";
import UserItem from "./UserItem";

class users extends Component {

    constructor() {
        super();
        this.state = {
            players: ['Messi', 'Ronaldo', 'Ibra', 'Neymar']
        }
    }

    render() {
        let userItem;
        if (this.props.projects) {
            userItem = this.props.projects.map(user => {
                return (
                    <UserItem key={user.id} user={user} />
                );
            });
        }

        let players;
        if (this.state.players) {
            players = this.state.players.map(player =>
                <select>{props.data.map(x => <option>{x}</option>)}</select>)
        }

        console.log(this.props);
        return (
            <div classname="users">
                <h1>{this.props.projects[0].club}</h1>
                {this.props.test} My users
                All Clubs :
                <br />
                {userItem}
                <br />
                <select ref="userInput" defaultValue="" required>
                    <option>
                        {this.state.players}
                    </option>
                </select>
            </div>
        )
    }
}

export default users; 