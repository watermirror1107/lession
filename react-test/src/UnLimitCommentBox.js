import React from "react";

//非受控组件
class UnLimitCommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }


    submitForm(event) {
        alert(this.textInput.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.submitForm(e)}>
                <label>留言内容</label>
                <input type="text" ref={(textInput) => {
                    this.textInput = textInput
                }}/>
                <button type="submit">发送</button>
            </form>
        )
    }
}

export default UnLimitCommentBox