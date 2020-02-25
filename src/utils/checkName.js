const checkName = name => {
  if (name) {
    if (name.indexOf(" ") > -1) {
      let firstName = name.split(" ");
      return firstName[0];
    } else {
      return name;
    }
  }
};

export default checkName;
