function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach(project => {
    const tags = project.dataset.category.split(" ");
    project.style.display = (category === 'all' || tags.includes(category)) ? "block" : "none";
  });
}


function showDetails(title, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

