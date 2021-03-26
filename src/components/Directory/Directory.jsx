import React from 'react';
import './Directory.scss';

//Components;
import MenuItem from '../MenuItem/MenuItem';
import {Data} from './Data';

export default class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:Data
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherProps})=><MenuItem key = {id} {...otherProps} />)}
            </div>
        )
    }
}

