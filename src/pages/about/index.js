import React, { Component } from 'react'
import Header from 'components/Header'
import './style.css'

export class Archives extends Component {
    render() {
        return (
            <div className='about'>
                <Header/>
                <div className="content">关于</div>
            </div>
        )
    }
}

export default Archives
