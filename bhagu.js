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
  