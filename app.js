import React, { Component } from 'react';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    countUp = () => {
        let count = this.state.count;
        count++;
        this.setState({
            count: count,
        })
    }

    countDown = () => {
        let count = this.state.count;
        count--;
        this.setState({
            count: count,
        })
    }

    reset = () => {
        this.setState({
            count: 0,
        })
    }

    render() {
        return (
            <div className='container-fluid p-5 text-center'>
                <div className='d-inline-block'>
                    <div className='p-4 display font-weight-bold'>
                        {this.state.count}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success px-4 py-3 shadow-none rounded-0' onClick={this.countUp}><span className="fas fa-plus"></span></button>
                        <button className='btn btn-info px-4 py-3 shadow-none rounded-0' onClick={this.reset}><span className="fas fa-redo"></span></button>
                        <button className='btn btn-danger px-4 py-3 shadow-none rounded-0' onClick={this.countDown}><span className="fas fa-minus"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;