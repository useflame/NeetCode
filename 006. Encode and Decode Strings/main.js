function encode(strs) {
  if (!strs.length) {
    return "";
  }
  const count = [];
  for (const s of strs) {
    count.push(s.length);
  }

  return strs
    .map((str, index) => {
      return `${count[index]}#${str}`;
    })
    .join("");
}

function decode(str) {
  let i = 0;
  let result = [];

  while (i < str.length) {
    let j = i;

    while (str[j] !== "#") {
      j++;
    }
    const wordLength = parseInt(str.substring(i, j));

    i = j + 1;
    j = i + wordLength;
    result.push(str.substring(i, j));
    i = j;
  }

  return result;
}

// Test cases
console.log(JSON.stringify(decode(encode(["neet","code","love","you"]))) === JSON.stringify(["neet","code","love","you"]))
console.log(JSON.stringify(decode(encode(["we","say",":","yes"]))) === JSON.stringify(["we","say",":","yes"]))
console.log(JSON.stringify(decode(encode([""]))) === JSON.stringify([""]))
console.log(JSON.stringify(decode(encode([]))) === JSON.stringify([]))
