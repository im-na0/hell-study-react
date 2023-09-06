export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // TODO: do something with the queue...
  queue.forEach((q) => {
    finalState = typeof q === "function" ? q(finalState) : q;
  });

  return finalState;
}
