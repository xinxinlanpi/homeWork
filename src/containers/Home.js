// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { increase, decrease } from '../actions/count'
// import * as actions from '../actions/count'

// @connect(
//     state => ({
//         number: state.update.number
//     }),
//     dispatch => bindActionCreators(actions, dispatch)
// )
class Home extends Component {
    render() {
        const { number, increase, decrease } = this.props

        return (
            <div>
                {/* <p>这里显示的是当前值eeewwwwwwwww1: <span className="badge">{number}</span></p>
                <br />
                <button type="button" className="btn btn-default" onClick={() => increase(1)}>+1按钮</button>
                {' '}
                <button type="button" className="btn btn-default" onClick={() => decrease(1)}>-1按钮</button>
                {' '}
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/foo')}>跳转到 /foo</button>
                <div className="theme1">test
                <span className='test'>llllllll</span>sss
                </div> */}
                <div className="m-container">
                    <div className="left">
                        <div className="sub-1"></div>
                        <div className="sub-2"></div>
                    </div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
            </div>

        )
    }
}

const getNumber = state => {
    return {
        number: state.update.number
    }
}

export default connect(
    getNumber,
    { increase, decrease }
)(Home)

