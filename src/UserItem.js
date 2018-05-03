import React, { Component } from "react";
import UserSelect from "./UserSelect";

class UserItem extends Component {
    render() {
        return (
            <div classname="UserItem">
                {this.props.user.id} - {this.props.user.club}
                <UserSelect/>
            </div>
        )
    }
}

export default UserItem;