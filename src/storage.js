function saveStorage(todos) {
  localStorage.setItem("projects", JSON.stringify(todos));
}

function loadFromStorage() {
  const data = localStorage.getItem("projects");
  return data ? JSON.parse(data) : [];
}

export { saveStorage, loadFromStorage };
