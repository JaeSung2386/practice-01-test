import React, { Component } from 'react';
import axios from 'axios';

var search = {
    name: '둘리',
    startdate: '미친',
    enddate:'놈'
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startdate: '',
            enddate: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        axios.post('http://localhost:8080/test/list', search)
        .then( response => {
            alert(response);
        })
        .catch( response => {
            alert(response);
        });
    }

    // get 방식
    /*
    handleSubmit(e) {
        axios.get('http://localhost:8080/test/list')
        .then( response => {
            alert(response);
        })
        .catch( response => {
            alert(response);
        });
    }    
    */
/*
    fetchUserInfo = async (e) => {
        var search = {
            startdate: e.state.startdate,
            enddate: e.state.enddate,
            name: e.state.name
        }

        axios.post('http://localhost:8080/test/list', search)
        .then( response => {
            alert(response);
        })
        .catch( response => {
            alert(response);
        });
    }
*/
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                    <input 
                        title="시작 날짜" 
                        type="date"
                        value={this.state.startdate}
                        onChange={this.handleChange}
                        name="startdate"
                    />
                    ~
                    <input 
                        title="끝 날짜" 
                        type="date"
                        value={this.state.enddate}
                        onChange={this.handleChange}
                        name="enddate"
                    />
                    <input
                        title="이름"
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name">
                    </input>
                    <button type="submit" >검색</button>
            </form>
            <div>{this.state.name}</div>
        </div>
        );
    }
}

export default Search;