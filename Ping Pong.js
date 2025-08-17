function pingpong() {
  for (i = 1; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    }
    if ( i % 3 === 0) {
      console.log("Ping");
    }
    if ( i % 5 === 0) {
      console.log("Pong");
    }
    console.log(i)
  }
}
pingpong()