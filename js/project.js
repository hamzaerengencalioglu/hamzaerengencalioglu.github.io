function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");

    const projectElement = document.querySelector(`.project[data-id="${projectId}"]`);
    if (projectElement) {
        const imageSrc = projectElement.querySelector(".modal-data").dataset.image;
        const descriptionText = projectElement.querySelector(".modal-data").dataset.description;
        
        modalImage.src = imageSrc;
        modalDescription.textContent = descriptionText;
        modal.style.display = "block";
    }
}
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allProjectsButton').addEventListener('click', () => filterProjects('all'));
    
    document.getElementById('gameProjectsButton').addEventListener('click', () => filterProjects('game'));
    
    document.getElementById('webProjectsButton').addEventListener('click', () => filterProjects('web'));
});
