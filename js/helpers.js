let helpers = {

  sortAlpha(a, b) {
    if(a < b) {
      return -1;
    }

    if(a > b) {
      return 1;
    }
    return 0;
  },

  // Sort by object property (prop)
  sortAlphaObj(prop, a, b) {
    let sortA = a[prop].toLowerCase(),
        sortB = b[prop].toLowerCase();

    if(sortA < sortB) {
      return -1;
    }

    if(sortA > sortB) {
      return 1;
    }
    return 0;
  }

};

export default helpers;
