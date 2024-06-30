// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

function toggleMode() {
    document.body.classList.toggle('dark');
    const toggleButton = document.querySelector('.toggle-mode');
    toggleButton.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';
}
