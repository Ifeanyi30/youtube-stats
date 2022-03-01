import React, {Component} from 'react';

class Form extends Component {
    state = {
        term: ''
    }

    handleChange = event => {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.term)
    }
    render(){
        return(
            <div>
                <h3 className='font-bold text-xl text-center my-10'>Video Stats</h3>
                <form className='w-full max-w-xl mx-auto' onSubmit={this.handleSubmit}>
                    <div className='flex items-center border-b border-b-2 
                    border-red-700 py-2'>
                        <input className='appearance-none bg-transparent border-none 
                        w-full text-gray-700 mr-3 py-1 px-2 leading-tight
                        focus:outline-none' type="text" placeholder="Jane Doe" 
                        aria-label="Enter video ID" value={this.state.term} 
                        onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        );
    }
}


export default Form