var encryptThis = function (text) {
    // Implement me! :)
    text = text.split(" ");
    let str = "";
    text.forEach((e) => {
      let len = e.length - 1;
  
      if (len + 1 == 1) {
        e = e.replace(e[0], e.charCodeAt(0));
        str += " " + e;
      } else if (len == 1) {
        str += " " + e.charCodeAt(0) + e[1];
      } else {
        str += " " + e.charCodeAt(0) + e[len] + e.slice(2, len) + e[1];
      }
    });
  
    return str.slice(1);
  };
  