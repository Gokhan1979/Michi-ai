const MEMORY_KEY = "michi_memory";


export function saveMemory(data) {

  localStorage.setItem(
    MEMORY_KEY,
    JSON.stringify(data)
  );

}


export function getMemory() {

  const data = localStorage.getItem(MEMORY_KEY);

  return data
    ? JSON.parse(data)
    : [];

}


export function addMemory(item) {

  const memory = getMemory();

  memory.push(item);

  saveMemory(memory);

}
