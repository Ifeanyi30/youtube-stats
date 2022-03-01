import React, { Component } from 'react';
import Form from './form';
import Results from './results';
import instance from '../youtube';
 

class Body extends Component {
    state = {
        tags: [],
        title: '',
        channelTitle: '',
        views: ''
    }

    handleSubmit = async (term) => {
        const response = await instance.get('/videos',{
            params: {
                id: term
            }
        })
        this.setState({
            tags: response.data.items[0].snippet.tags,
            title: response.data.items[0].snippet.title,
            channelTitle: response.data.items[0].snippet.channelTitle,
            views: response.data.items[0].statistics.viewCount
        })
    }
    render() {
        return(
            <div className='w-full container mx-auto my-12'>
                <Form handleFormSubmit={this.handleSubmit}/>
                <Results data={this.state} />
            </div>
        );
    }
}

export default Body;