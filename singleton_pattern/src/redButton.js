import { singletonCounter } from "./counter";

const button = document.getElementById("red");

button.addEventListener("click", () => {
  console.log("Counter total: ", singletonCounter.increment());
});
