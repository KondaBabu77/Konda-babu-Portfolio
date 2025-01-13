const projects = [
  {
    "title": "Random Person Selector",
    "description": "A web app to randomly select individuals, featuring interactive JavaScript logic and smooth CSS animations.",
    "image": "random.jpg",
    "link": "https://KondaBabu77.github.io/selecting-random-persons/"
  },
  {
    "title": "Grid Game",
    "description": "An engaging grid-based game where players interact with dynamic elements, showcasing creative use of CSS and JavaScript.",
    "image": "grid.jpg",
    "link": "https://kondababu77.github.io/My-Grid-Game/"
  },
  {
    "title": "Calculator",
    "description": "A responsive calculator app for basic and advanced arithmetic operations, built with modern design principles and JavaScript.",
    "image": "cal.jpg",
    "link": "https://kondababu77.github.io/simple-calculator/"
  }
];

const projectList = document.querySelector(".project-list");

projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-img">
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    </div>
  `;

  projectList.appendChild(projectCard);
});
