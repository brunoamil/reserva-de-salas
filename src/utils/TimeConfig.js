import moment from 'moment';

let now = moment()

let dia = now.day();

if (dia === 0) {
  now.add(1,'days')
}
if (dia === 6) {
  now = now.add(2, 'days');
  dia = 0
}
while (dia > 1) {
  now = now.subtract(1, 'days');
  dia = dia - 1;
}

export const daysOfWeek = [
  `SEG ${now.format("D/M")}`,
  `TER ${now.add(1,'days').format("D/M")}`,
  `QUA ${now.add(1,'days').format("D/M")}`,
  `QUI ${now.add(1,'days').format("D/M")}`,
  `SEX ${now.add(1,'days').format("D/M")}`
];

export const horas = [
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