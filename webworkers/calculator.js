const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");

add.addEventListener("click", function() {
  const worker = new Worker("worker_add.js");
  worker.postMessage([num1.value, num2.value]);
  worker.onmessage = function(e) {
    result.textContent = e.data;
    worker.terminate();
  };
});

subtract.addEventListener("click", function() {
  const worker = new Worker("worker_subtract.js");
  worker.postMessage([num1.value, num2.value]);
  worker.onmessage = function(e) {
    result.textContent = e.data;
    worker.terminate();
  };
});

multiply.addEventListener("click", function() {
  const worker = new Worker("worker_multiply.js");
  worker.postMessage([num1.value, num2.value]);
  worker.onmessage = function(e) {
    result.textContent = e.data;
    worker.terminate();
  };
});

divide.addEventListener("click", function() {
  const worker = new Worker("worker_divide.js");
  worker.postMessage([num1.value, num2.value]);
  worker.onmessage = function(e) {
    result.textContent = e.data;
    worker.terminate();
  };
});
