import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { guid, getLast, getFirst } from './helpers';
import Rdate from 'react-datetime';
import './reactAgendaCtrl.css';

var now = new Date()

export default function reactAgendaCtrl(props) {
    const [editMode, setEditMode] = useState(false)
    const [showCtrl, setShowCtrl] = useState(false)
    const [multiple, setMultiple] = useState({})
    const [name, setName] = useState('')
    const [classes, setClasses] = useState('priority-1')
    const [startDateTime, setStartDateTime] = useState(now)
    const [endDateTime, setEndDateTime] = useState(now)

    useEffect(() => {
        if (props.itemColors) {
            setClasses({
                classes: Object.keys(props.itemColors)[0]
            })

        }
        setTimeout(function () {
            if (refs.eventName) {
                refs.eventName.focus()
            }

        }, 50)

        if (!props.selectedCells) {
            let start = now
            let endT = moment(now).add(15, 'Minutes')
            return setEditMode({ editMode: false, name: '', startDateTime: start, endDateTime: endT })
        }

        if (props.selectedCells && props.selectedCells[0] && props.selectedCells[0]._id) {

            let start = moment(props.selectedCells[0].startDateTime)
            let endT = moment(props.selectedCells[0].endDateTime)

            return setEditMode({ editMode: true, name: props.selectedCells[0].name, classes: props.selectedCells[0].classes, startDateTime: start, endDateTime: endT })

        }

        if (props.selectedCells && props.selectedCells.length === 1) {
            let start = moment(getFirst(props.selectedCells))
            let endT = moment(getLast(props.selectedCells)).add(15, 'Minutes')
            return setEditMode({ editMode: false, name: '', startDateTime: start, endDateTime: endT })
        }

        if (props.selectedCells && props.selectedCells.length > 0) {
            let start = moment(getFirst(props.selectedCells))
            let endT = moment(getLast(props.selectedCells)) || now;
            setEditMode({ editMode: false, name: '', startDateTime: start, endDateTime: endT })
        }
    }, [])

    let handleChange = event => {
        if (event.target.tagName === 'BUTTON') {
            event.preventDefault()
        }

        const [data, setData] = useState(event.target.name)
        data[event.target.name] = event.target.value;

        setData(data)
    }

    let handleDateChange = (ev, date) => {
        var endD = moment(endDateTime)
        var data = state;
        data[ev] = date;

        if (ev === 'startDateTime' && endD.diff(date) < 0) {
            data['endDateTime'] = moment(date).add(15, 'minutes')
        }

        useState(data)

    }


    let dispatchEvent = obj => {
        var newAdded = []
        var items = props.items;
        if (obj['multiple']) {
            var array = obj['multiple']
            Object.keys(array).forEach(function (key) {
                var newAr = array[key].filter(function (val, ind) {
                    return array[key].indexOf(val) === ind;
                })
                var start = newAr[0];
                var endT = newAr[newAr.length - 1] || now;
                var lasobj = {
                    _id: guid(),
                    name: obj.name,
                    startDateTime: new Date(start),
                    endDateTime: new Date(endT),
                    classes: obj.classes
                }
                items.push(lasobj)
                newAdded.push(lasobj)
            })
            return props.Addnew(items, newAdded)
        }

        obj._id = guid()
        items.push(obj)
        props.Addnew(items, obj)
    }

    let addEvent = e => {
        if (name.length < 1) {
            return;
        }

        if (props.selectedCells && props.selectedCells.length > 0) {

            var obj = props.selectedCells.reduce((r, v, k = v.substring(0, 10)) => ((r[k] = r[k] || []).push(v), r), {})

            if (Object.values(obj).length > 1) {
                const newObj = {
                    name: name,
                    startDateTime: new Date(startDateTime),
                    endDateTime: new Date(endDateTime),
                    classes: classes,
                    multiple: obj
                }

                return dispatchEvent(newObj)

            }

        }

        var newObj = {
            name: name,
            startDateTime: new Date(startDateTime),
            endDateTime: new Date(endDateTime),
            classes: classes
        }

        dispatchEvent(newObj)
    }

    let updateEvent = e => {
        if (props.selectedCells[0]._id && props.items) {

            var newObj = {
                _id: props.selectedCells[0]._id,
                name: name,
                startDateTime: new Date(startDateTime),
                endDateTime: new Date(endDateTime),
                classes: classes
            }
            var items = props.items
            for (var i = 0; i < items.length; i++) {
                if (items[i]._id === newObj._id)
                    items[i] = newObj;
            }
            if (props.edit) {
                props.edit(items, newObj)
            }

        }

    }


    let handleSubmit = e => {
        e.preventDefault()
        addEvent(e)
    }

    let handleEdit = e => {
        e.preventDefault()
        updateEvent(e)
    }

    var itc = Object.keys(props.itemColors)
    var colors = itc.map(function (item, idx) {
        return( <div style={{
            background: props.itemColors[item]
        }} className="agendCtrls-radio-buttons" key={item}>
            <button name="classes" value={item} className={classes === item ? 'agendCtrls-radio-button--checked' : 'agendCtrls-radio-button'} onClick={handleChange} />
        </div>
        )})


    const divStyle = {}

    if (editMode) {
        return (
            <div className="agendCtrls-wrapper" style={divStyle}>
                <form onSubmit={handleEdit}>
                    <div className="agendCtrls-label-wrapper">
                        <div className="agendCtrls-label-inline">
                            <label>Evento</label>
                            <input type="text" name="name" autoFocus ref="eventName" className="agendCtrls-event-input" value={name} onChange={handleChange} placeholder="Nome do evento" />
                        </div>
                        <div className="agendCtrls-label-inline ">
                            <label>Cor</label>
                            <div className="agendCtrls-radio-wrapper">
                                {colors}</div>
                        </div>
                    </div>
                    <div className="agendCtrls-timePicker-wrapper">
                        <div className="agendCtrls-time-picker">
                            <label >Inicio</label>
                            <Rdate value={startDateTime} onChange={handleDateChange(null, 'startDateTime')} input={false} viewMode="time" ></Rdate>
                        </div>
                        <div className="agendCtrls-time-picker">
                            <label >Termino</label>
                            <Rdate value={endDateTime} onChange={handleDateChange(null, 'endDateTime')} input={false} viewMode="time" ></Rdate>
                        </div>
                    </div>

                    <input type="submit" value="Save" />
                </form>
            </div>
        )}

    return(
        <div className="agendCtrls-wrapper" style={divStyle}>
            <form onSubmit={handleSubmit}>
                <div className="agendCtrls-label-wrapper">
                    <div className="agendCtrls-label-inline">
                        <label>Evento</label>
                        <input type="text" ref="eventName" autoFocus name="name" className="agendCtrls-event-input" value={name} onChange={handleChange} placeholder="Nome do evento" />
                    </div>
                    <div className="agendCtrls-label-inline">
                        <label>Cor</label>
                        <div className="agendCtrls-radio-wrapper">
                            {colors}</div>
                    </div>
                </div>
                <div className="agendCtrls-timePicker-wrapper">
                    <div className="agendCtrls-time-picker">
                        <label >Inicio</label>
                        <Rdate value={startDateTime} onChange={handleDateChange(null, 'startDateTime')} input={false} viewMode="time" ></Rdate>
                    </div>
                    <div className="agendCtrls-time-picker">
                        <label >Termino</label>
                        <Rdate value={endDateTime} onChange={handleDateChange(null, 'endDateTime')} input={false} viewMode="time" ></Rdate>
                    </div>
                </div>

                <input type="submit" value="Salvar" />
            </form>
        </div>
    )

}