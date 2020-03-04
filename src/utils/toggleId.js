import checks from './checks';

const toggleCellId = day => {
  switch(checks.splitDate(day)[0]) {
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