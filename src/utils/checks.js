export default {
  checkName: name => {
    if (name) {
      if (name.indexOf(" ") > -1) {
        let firstName = name.split(" ");
        return firstName[0];
      } else {
        return name;
      }
    }
  },
  splitDate: date => {
    if (date) {
      if (date.indexOf(" ") > -1) {
        let newdate = date.split(" ");
        return newdate;
      }
    }
  },
  splitNumberDate: date => {
    if (date.indexOf("/") > -1) {
      let ndate = date.split("/");
      return Number(ndate[0]);
    }
  }
};
