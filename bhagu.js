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
