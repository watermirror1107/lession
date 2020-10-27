import React from "react";

class TimeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 6
        }
    }

    componentDidMount() {//组件挂载
        this.time = setInterval(() => {
            this.setState({
                age: ++this.state.age
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //组件数据更新时,state和Prop还有强制更新会调用到这个生命周期
        console.log(prevState)//当前的state
    }

    componentWillUnmount() {//组件销毁
        console.log('销毁组件')
        clearInterval(this.time)
    }

    render() {
        return (
            <div className="contain">
                <p>{this.state.age}</p>
            </div>
        )
    }
}

export default TimeBox