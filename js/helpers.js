let multiplyObj = {

  multiply(x,y) {
    return x * y;
  },

  showX() {
    return "Lyndsey";
  },

  doY() {
    return "you are...";
  },

  doZ() {
    return "my name is " + this.showX();
  }

};

export default multiplyObj;
