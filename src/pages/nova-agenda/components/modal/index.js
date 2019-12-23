import React from 'react'
import { Button, Modal, ModalContent, ModalActions, ModalHeader } from 'semantic-ui-react'

const ModalExampleShorthand = ({ enableModal, setEnableModal }) => {

    const closeModal = () => {

        setEnableModal(false)
    }

    return (
        <Modal
            size={"tiny"}
            open={enableModal}
            onClose={closeModal}
        >
            <ModalHeader>reserva</ModalHeader>
            <ModalContent>awdaqfawd</ModalContent>
            <ModalActions>
                <Button onClick={closeModal}>fechar</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalExampleShorthand;
