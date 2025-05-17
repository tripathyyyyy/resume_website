 HEAD
function showSection(id) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// Show 'Profile' section by default
window.onload = () => {
  showSection('profile');
};

function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
      section.classList.add("hidden");
    });
  
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  // Default view
  document.addEventListener("DOMContentLoaded", () => {
    showSection("profile");
  });
 
