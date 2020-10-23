import React from 'react'

class Welcome extends React.Component {
    render() {
        const list = [1, 2]
        const isLogin = true;
        return (
            <div className="contain">
                <h1>hello world</h1>
                {
                    isLogin ? <p>已登录</p> : <p>未登录</p>
                }
                {
                    list.map(item => {
                            if (isLogin) {
                                return <li>{item + 1}</li>
                            } else {
                                return <li>{item}</li>
                            }
                        }
                    )
                }
            </div>
        )
    }
}

export default Welcome