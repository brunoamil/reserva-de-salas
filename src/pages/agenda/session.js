import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { TransitionablePortal, Segment, Header } from 'semantic-ui-react';

import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as RoomsActions } from '../../store/ducks/salas';


function Session() {

    const dispatch = useDispatch()
    const History = useHistory();

    const [count, setCount] = useState(240)

    const actionLogout = useCallback(() => {
        setTimeout(() => {
            dispatch(UsersActions.log_out());
            dispatch(RoomsActions.roomEvents([]));
            dispatch(UsersActions.name(''))
        }, 1000);
    }, [dispatch])

    // Contador da sessão
    useEffect(() => {
        var session = setInterval(function () {
            if (count === 0) {
                clearInterval(session)
                actionLogout()
                windowRedirect()

                function windowRedirect() {
                    History.push("/")
                }
            }
            // console.log(count);
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(session)
        }
    }, [History, actionLogout, count])

    return (
        <>
            <TransitionablePortal open={count < 15}>
                <Segment
                    style={{
                        left: '40%',
                        position: 'fixed',
                        top: '5%',
                        zIndex: 1000,
                    }}>
                    <Header>Sua sessão vai expirar!</Header>
                    <p>Em 15 segundos você será redirecionado a tela inicial.</p>
                </Segment>
            </TransitionablePortal>
        </>
    )
}
export default Session;