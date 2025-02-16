import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);
  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {counter()} </h3>
      <button class="bg-blue-500 p-2 mr-2 rounded ">+1</button>
      <button class="bg-blue-500 p-2 mr-2 rounded ">-1</button>
    </>
  );
};
