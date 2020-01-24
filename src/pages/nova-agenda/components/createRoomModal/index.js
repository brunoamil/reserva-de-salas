import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';

const CreateRoomModal = () => {

    return (
        <>
            <Button color='red'>
                <Icon name='remove' /> No
            </Button>
            <Button color='green'>
                <Icon name='checkmark' /> Yes
            </Button>
        </>
    )
}
export default CreateRoomModal;