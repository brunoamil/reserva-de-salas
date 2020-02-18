// import {useDispatch, useSelector} from 'react-redux';


// const event = useSelector(state=> state.salas.roomEvents);
const horas = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ];

export const renderReserve = event => {
    if (event) {
      event.map(info => {
        let divCell = document.getElementById(`${info.id}`);

        const reserveHour = horas.filter(
          hour => hour > info.inicio && hour <= info.termino
        );

        if (divCell.childNodes.length === 0) {
          renderFinalReserve(divCell, info.id, info.setor);
          if (reserveHour.length > 1) {
            let idCellTermino = parseInt(info.id);
            reserveHour.pop();

            reserveHour.map(hour => {
              let divCellTermino = document.getElementById(
                String((idCellTermino += 5))
              );

              return renderFinalReserve(divCellTermino, info.id, info.setor);
            });
          }
        }
        return "";
      });
    }
  };

  const renderFinalReserve = (divCell, id, setor) => {
    const spanct = document.createElement("span");
    const titleReserveTermino = document.createElement("h2");

    spanct.setAttribute("class", "spanCell");
    spanct.setAttribute("id", `${id}`);
    titleReserveTermino.setAttribute("id", `${id}`);
    titleReserveTermino.innerText = `${setor}`;

    spanct.appendChild(titleReserveTermino);
    divCell.appendChild(spanct);
  };
