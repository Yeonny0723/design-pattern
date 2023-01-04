import { singletonCounter } from "./counter";

const button = document.getElementById("blue");

button.addEventListener("click", () => {
  console.log("Counter total: ", singletonCounter.increment());
});
