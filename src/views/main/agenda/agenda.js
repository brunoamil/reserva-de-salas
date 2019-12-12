import React, { Component } from 'react';
import ReactAgenda from './ArquivosDaAgenda/reactAgenda';
import ReactAgendaCtrl from './ArquivosDaAgenda/reactAgendaCtrl';
import Modal from './Modal/Modal';

var now = new Date();

require('moment/locale/pt-br.js');

var colors = {
  "color-3": "rgba(235, 85, 59, 1)",
}


export default class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selected: [],
      cellHeight: (47 / 1),
      showModal: false,
      locale: "pt",
      rowsPerHour: 1,
      numberOfDays: 5,
      startDate: new Date()
    }
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this._openModal = this._openModal.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.changeView = this.changeView.bind(this)
    this.handleCellSelection = this.handleCellSelection.bind(this)

  }

  componentWillReceiveProps(next, last) {
    if (next.items) {

      this.setState({ items: next.items })
    }
  }
  handleItemEdit(item, openModal) {

    if (item && openModal === true) {
      this.setState({ selected: [item] })
      return this._openModal();
    }
  }
  handleCellSelection(item, openModal) {

    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] })

  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate })

  }

  handleRangeSelection(selected) {


    this.setState({ selected: selected, showCtrl: true })
    this._openModal();

  }

  _openModal() {
    this.setState({ showModal: true })
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false })
  }

  handleItemChange(items, item) {

    this.setState({ items: items })
  }

  handleItemSize(items, item) {

    this.setState({ items: items })

  }

  removeEvent(items, item) {

    this.setState({ items: items });
  }

  addNewEvent(items, newItems) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }
  editEvent(items, item) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days })
  }


  render() {

    // var AgendaItem = props => {
    //   console.log(' item component props', props)
    //   return <div style={{ display: 'block', position: 'absolute', background: '#000000' }}>{props.item.name} <button onClick={() => props.edit(props.item)}>Edit </button></div>
    // }
    return (

      <div className="content-expanded ">

        {/* <div className="control-buttons">
          <button className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
        </div> */}

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={18}
          cellHeight={this.state.cellHeight}
          locale="pt"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)} />
        {
          this.state.showModal ? <Modal clickOutside={this._closeModal} >
            <div className="modal-content">
              <ReactAgendaCtrl 
                items={this.state.items} 
                itemColors={colors} 
                selectedCells={this.state.selected} 
                Addnew={this.addNewEvent} 
                edit={this.editEvent} />
            </div>
          </Modal> : ''
        }


      </div>

    );
  }
}