const makeCase = function(input, _case) {
    //list of vowels to test against
    const vowels = ['a','e','i','o','u'];

    //helper functions to manage strings and arrays
    const splitOn = (str, char) => str.split(char);
    const joinWith = (arr, char) => arr.join(char);

    const unwords = (str) => splitOn(str, ' ');
    const unword = (str) => splitOn(str, '');
    const rewords = (arr) => joinWith(arr, " "); //not used but nice to have
    const reword = (arr) => joinWith(arr, "");

    //special function to capitalize first letter
    const title = (arrChar) => {
        arrChar[0] = arrChar[0].toUpperCase();
        return arrChar;
    } 

    //object containing functions based on the case selection
    //more elegant than nested ifs or switch statements argue with the wall
    const selection = {
        "camel": (str) => {
            const words = unwords(str);
            const chars = words.map(unword);
            for (let i = 1; i < chars.length; i++) { //i = 1 skips first word
                chars[i][0] = chars[i][0].toUpperCase();
            }
            return reword(chars.map(reword)); //reword removes spaces
        },
        "pascal": (str) => {
            const words = unwords(str);
            const chars = words.map(unword);
            for (let i = 0; i < chars.length; i++) {
                chars[i][0] = chars[i][0].toUpperCase();
            }
            return reword(chars.map(reword));
        },
        "snake": (str) => str.replaceAll(" ", "_"), //easy
        "kebab": (str) => str.replaceAll(" ","-"),//also easy
        "title": (str) => joinWith(splitOn(str, " ").map(title), ' '),
        "vowel": (str) => {
            const arr = unword(str);
            for (let i = 0; i < arr.length; i++){
                if (vowels.includes(arr[i])){
                    arr[i] = arr[i].toUpperCase();
                }
            }
            return reword(arr);
        },
        "consonant": (str) => {
            const arr = unword(str);
            for (let i = 0; i < arr.length; i++){
                if (!vowels.includes(arr[i])){
                    arr[i] = arr[i].toUpperCase();
                }
            }
            return reword(arr);
        },
        "upper": (str) => str.toUpperCase(),
        "lower": (str) => str.toLowerCase(), 
    }

    if (typeof _case === "string"){ //not an array
        return selection[_case](input);
    } else {                        //is an array
        const firstCase = _case.pop(); //a hack, only works if upper and lower are first. should sort before
        return selection[_case.pop()](makeCase(input, firstCase)); //ReCuRsIoN
    }
  }
  
  console.log(makeCase("this is a string", "camel"));//thisIsAString
  console.log(makeCase("this is a string", "pascal"));//ThisIsAString
  console.log(makeCase("this is a string", "snake"));//this_is_a_string
  console.log(makeCase("this is a string", "kebab"));//this-is-a-string
  console.log(makeCase("this is a string", "title"));//This Is A String
  console.log(makeCase("this is a string", "vowel"));//thIs Is A strIng
  console.log(makeCase("this is a string", "consonant"));//THiS iS a STRiNG
  console.log(makeCase("this is a string", ["upper", "snake"]));//THIS_IS_A_STRING