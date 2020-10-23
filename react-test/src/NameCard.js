import React from "react";

class NameCard extends React.Component {
    render() {
        const {name, telphone, sex, age} = this.props;
        return (
            <div className="contain">
                <h4>{name}</h4>
                <ul>
                    <li>{telphone}</li>
                    <li>{sex}</li>
                    <li>{age}</li>
                </ul>
            </div>
        )

    }
}

export default NameCard