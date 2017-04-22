import React, {Component} from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

import DropdownList from './DropdownList';

export default class UpdateModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          rent: this.props.data.rent,
          modalOpen: false
        }
    }
    
    handleUpdate = () => {
      console.log('rent = ' + this.state.rent);
      this.props.onUpdate(this.props.index, this.state.rent);
      this.setState({
        modalOpen: false,
      })
    }
    
    handleChange = (e) => {
      this.setState({rent: e.target.value});
    }
    
    handleOpen = (e) => this.setState({
      modalOpen: true,
    })

    render(){
        let {title, area, address, vacancy, rent, checkwater, checkele, checknet, type, score} = this.props.data;
        let uri = `http://maps.google.com/maps/api/staticmap?center=${address}&zoom=15&size=400x400&sensor=false`;
        let options=[{ key: '0', value: '套房', text: '套房' },
                     { key: '1', value: '雅房', text: '雅房' }];
        return (
          <Modal 
            trigger={<i className="edit icon" onClick={this.handleOpen} ></i>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
            <Modal.Header>更改資料</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='large' src={uri} />
              <Modal.Description>
                <Header>{title}</Header>
                <div className="ui left icon input">
                  <input type="text" value={this.state.rent} 
                    onChange={this.handleChange}
                  />
                  <i className="dollar icon"></i>
                </div>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick={this.handleUpdate} >
                修改資料 <Icon name='right chevron' />
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
}