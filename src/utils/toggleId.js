import checkDay from './checkName';

const toggleCellId = day => {
  console.log(checkDay(day))
  switch(checkDay(day)) {
    case 'SEG':
      return -4;
    case 'TER':
      return -3;
    case 'QUA':
      return -2;
    case 'QUI':
      return -1;
    case 'SEX':
      return 0; 
    default:
      return '';
  }
}

export default toggleCellId;