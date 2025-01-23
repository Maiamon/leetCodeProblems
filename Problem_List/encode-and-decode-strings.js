/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let result = "";
  for (let str of strs) {
    result = result + str.length + "/" + str;
  }
  return result;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  let result = [];

  while (str.length > 0) {
    let posSlash = str.indexOf("/");
    let length = parseInt(str.slice(0, posSlash));
    let strDecoded = str.slice(posSlash +1, posSlash + 1 + length);
    result.push(strDecoded);
    str = str.slice(posSlash + 1 + length);
  }
  return result;
}

let input =  ["neet","code","love","you"]

let encoded = encode(input);
let decoded = decode(encoded);
