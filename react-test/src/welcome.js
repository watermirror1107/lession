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
                    list.map((item, index) => {
                            if (isLogin) {
                                return <li key={index}>{item + 1}</li>
                            } else {
                                return <li key={index}>{item}</li>
                            }
                        }
                    )
                }
            </div>
        )
    }
}

export default Welcome