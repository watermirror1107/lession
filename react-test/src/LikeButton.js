import React from 'react'

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        this.increaseLikes = this.increaseLikes.bind(this)
    }

    increaseLikes() {
        this.setState({
            num: ++this.state.num
        })//类似小程序，通过setstate来改变state里面的值，只能这么修改
        console.log(this.state.num)//如果constructor上面的没有bind this.这个时候会返回undefined,因为this指向的是实例后的对象，但是这里没有进行实例化
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.increaseLikes}>
                    👍 {this.state.num}
                </button>
            </div>
        )

    }
}

export default LikeButton