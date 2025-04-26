// Save as: app.js

function resetAll() {
  if (confirm('Are you sure you want to delete all data?')) {
    localStorage.clear();
    alert("All data has been cleared!");
    location.reload();
  }
}
