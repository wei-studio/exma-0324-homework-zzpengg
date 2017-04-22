import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class HouseDetail extends Component {
    
    constructor(){
        super();
        
    }

    render() {
        let {title, area, address, vacancy, rent, checkwater, checkele, checknet, type, score} = this.props.data;
        let uri = `http://maps.google.com/maps/api/staticmap?center=${address}&zoom=15&size=400x400&sensor=false`;
        return (
            <Modal trigger={<p>{title}</p>}>
                <Modal.Header>HouseDetail</Modal.Header>
                  <Modal.Content image>
                  <Image wrapped size='medium' src={uri} />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>area: {area}</p>
                    <p>address: {address}</p>
                    <p>vacancy: {vacancy}</p>
                    <p>rent: {rent}</p>
                    <p>type: {type}</p>
                    <p>score: {score}</p>
                  </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}