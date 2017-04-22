import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'

// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]
export default class DropdownList extends Component {
    
    constructor(){
        super();
    }
    render(){
        let stateOptions = this.props.options;
        return <Dropdown placeholder='房屋類型' search selection options={stateOptions} value={this.props.type}/>
    }
}