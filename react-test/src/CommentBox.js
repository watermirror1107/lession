import React from "react";

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ev) {
        this.setState({//这个方法是异步要注意
            val: ev.target.value
        })
        console.log(this.state.val)
    }

    submitForm(event) {
        //触发父级的方法
        this.props.onAddComment(this.state.val)
        this.setState({
            val: ''
        })
        // alert(this.state.val)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.submitForm(e)}>
                <label>留言内容</label>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
                <button type="submit">发送</button>
                <p>已有{this.props.commentListLength}条评论</p>
            </form>
        )
    }
}

export default CommentBox