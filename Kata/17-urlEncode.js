const splitOn = (str, char) => str.split(char);

const urlDecode = function (text) {
    text = text.replaceAll("%20", " ");
    let arr = splitOn(text, "&");
    arr = arr.map(s => splitOn(s, "="));
    let object = {};
    arr.forEach(element => {
        object[element[0]] = element[1];
    });
    return object;
  };
  
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);