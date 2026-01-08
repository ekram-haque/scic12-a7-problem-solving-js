function pingPong(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "PingPong, ";
    } else if (i % 3 === 0) {
      result += "Ping, ";
    } else if (i % 5 === 0) {
      result += "Pong, ";
    } else {
      result += i + ", ";
    }
  }

  return result;
}
const result = pingPong(10);
console.log(result);
