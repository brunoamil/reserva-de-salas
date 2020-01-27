import React, { useState } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import { CustomModalContent, ContainerModalContent, TitleContainerMC, Container, CustomForm } from './styles';

import firebase from "../../../../services/firebase"

const CreateRoomModal = () => {

    const [nomeSala, setNomeSala] = useState()
    const [msgErro, setMsgErro] = useState(false)

    function CreateRoom() {
        console.log(nomeSala);

        if (nomeSala === "" || nomeSala === undefined) {
            setMsgErro(true)
        }
        else {
            firebase.firestore().collection("salas")
                .add({ nome: nomeSala })
                .then(sucesso => {
                    console.log('deu certo')
                })
                .catch(erro => {
                    console.log(erro);
                })
        }
    }
    return (
        <>
            <CustomModalContent>
                <ContainerModalContent>
                    <TitleContainerMC>Cadastro de sala</TitleContainerMC>
                </ContainerModalContent>
                <Container>
                    <Form size="large" key="tiny" method="POST">
                        <CustomForm>
                            <Input
                                onChange={e => { setNomeSala(e.target.value) }}
                                icon="table"
                                iconPosition="left"
                                placeholder="Digite o nome da sala"
                            />
                        </CustomForm>
                    </Form>
                </Container>
                <Button fluid positive onClick={CreateRoom}>Criar sala</Button>

                {msgErro ?
                    <Message size = "small" header={"OPS! Você esqueceu o nome da sala"} color="red" icon="dont" />
                    : ""
                }
            </CustomModalContent>
        </>
    )
}
export default CreateRoomModal;