import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class DeleteModal extends Component {
  
  constructor(){
    super();
  }
  
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => {
    console.log('index = ' + this.props.index);
    this.props.onDelete(this.props.index);
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    return (
      <Modal
        trigger={<i className="trash icon" onClick={this.handleOpen}></i>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='是否刪除資料' />
        <Modal.Content>
          <h3>請不要隨便刪除資料</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> 知道了
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}