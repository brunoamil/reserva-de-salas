import React, { useState } from 'react'
import ReactAgenda from './ArquivosDaAgenda/reactAgenda';
import ReactAgendaCtrl from './ArquivosDaAgenda/reactAgendaCtrl';
import Modal from './Modal/Modal';

const now = new Date();

require('moment/locale/pt-br.js');

const colors = {
    "color-3": "rgba(235, 85, 59, 1)",
}

export default function Agenda(props) {
    const [item, setComponentWillReceive] = useState([])
    const [selected, setHandleItemEdit] = useState([])
    const [cellHeight,] = useState((50 / 1))
    const [showModal, set_openModal] = useState(false)
    const [locale,] = useState('pt')
    const [rowsPerHour,] = useState(1)
    const [numberOfDays, setChangeView] = useState(5)
    const [startDate, setHandleDateRangeChange] = useState(new Date())

    function componentWillReceiveProps(next, last) {
        if (next.items) {
            setState({ items: next.items })
        }
    }

    function handleItemEdit(item, openModal) {
        if (item && openModal === true) {
            setState({ selected: [item] })
            return _openModal();
        }
    }

    function handleCellSelection(item, openModal) {
        if (state.selected && state.selected[0] === item) {
            return _openModal();
        }
        setState({ selected: [item] })

    }

    function handleDateRangeChange(startDate, endDate) {
        setState({ startDate: startDate })

    }

    function handleRangeSelection(selected) {


        setState({ selected: selected, showCtrl: true })
        _openModal();

    }

    function _openModal() {
        setState({ showModal: true })
    }
    _closeModal(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setState({ showModal: false })
    }

    function handleItemChange(items, item) {

        setState({ items: items })
    }

    function handleItemSize(items, item) {

        setState({ items: items })

    }

    function removeEvent(items, item) {

        setState({ items: items });
    }

    function addNewEvent(items, newItems) {

        setState({ showModal: false, selected: [], items: items });
        _closeModal();
    }
    function editEvent(items, item) {

        setState({ showModal: false, selected: [], items: items });
        _closeModal();
    }

    function changeView(days, event) {
        setState({ numberOfDays: days })
    }

    return (
        <div className="content-expanded ">
            <ReactAgenda
                minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
                maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
                startDate={state.startDate}
                startAtTime={8}
                endAtTime={18}
                cellHeight={state.cellHeight}
                locale="pt"
                items={state.items}
                numberOfDays={state.numberOfDays}
                headFormat={"ddd DD MMM"}
                rowsPerHour={state.rowsPerHour}
                itemColors={colors}
                helper={true}
                //itemComponent={AgendaItem}
                view="calendar"
                autoScale={false}
                fixedHeader={true}
                onRangeSelection={handleRangeSelection.bind()}
                onChangeEvent={handleItemChange.bind()}
                onChangeDuration={handleItemSize.bind()}
                onItemEdit={handleItemEdit.bind()}
                onCellSelect={handleCellSelection.bind()}
                onItemRemove={removeEvent.bind()}
                onDateRangeChange={handleDateRangeChange.bind()} />
            {
                state.showModal ? <Modal clickOutside={_closeModal} >
                    <div className="modal-content">
                        <ReactAgendaCtrl
                            items={state.items}
                            itemColors={colors}
                            selectedCells={state.selected}
                            Addnew={addNewEvent}
                            edit={editEvent} />
                    </div>
                </Modal> : ''
            }


        </div>

    )
}