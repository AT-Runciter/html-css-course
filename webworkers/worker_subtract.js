onmessage = function(e) {
    const result = Number(e.data[0]) - Number(e.data[1]);
    postMessage(result);
  }