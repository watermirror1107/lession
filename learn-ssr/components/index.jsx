import React from "react";

const fetch = function () {
    return {
        title: 'react ssr',
        data: []
    }
}
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    //数据预取方法  静态 异步 方法
    static async getInitialProps(opt) {
        const fetch1 = await fetch('/xxx.com/a');
        const fetch2 = await fetch('/xxx.com/b');

        return {
            res: [fetch1, fetch2]
        }
    }

    render() {
        return <h1>{this.props.data.title}</h1>
    }
}

