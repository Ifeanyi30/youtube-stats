import {React, Component} from 'react';
import Tags from '../metrics/Tags';
import Info from '../metrics/Info';

class Results extends Component {
    
    render() {
        return(
            <div className='w-full container mx-auto m-24'>
                <div id='tags'>
                    <div className='px-2'>
                        <div className='flex mx-4'>
                            <Tags tags={this.props.data.tags} />
                            <Info title={this.props.data} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Results;
