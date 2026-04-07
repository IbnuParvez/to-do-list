function loadPages(project) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = project.name;

  content.appendChild(header);
  project.todos.forEach((todo) => {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = todo.title;
    div.appendChild(title);
    content.appendChild(div);
  });
}
export default loadPages;
