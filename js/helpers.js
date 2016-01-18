///
///
/// List of helper functions for common tasks
/// ------------------
/// sortAlpha(a, b); Array.Sort() - Sort items Alphabetically
/// sortAlphaObj(a, b); Array.Sort() - Sort object items Alphabetically by passed in object property
/// ------------------
/// setLocalStore(key, value); - Sets local storage item. Note: if value is null or undefined, the key is removed from storage
/// getLocalStore(key); - Retrieves local storage item by key
/// -------------------
/// removeClass(elem, className); - Runs a forEach loop on the passed in element(s) and removes the passed in className from each
///
///
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
  },

  setLocalStore(key, value) {
    if(key != null) {
      if(value == null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    }
  },

  getLocalStore(key) {
    if(key == null) {
      return null;
    }
    return localStorage.getItem(key);
  },

  removeClass(elem, className) {
    [].forEach.call(elem, function(el) {
      el.classList.remove(className);
    });
  }

};

export default helpers;
