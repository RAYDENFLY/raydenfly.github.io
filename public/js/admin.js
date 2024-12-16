// Load data from localStorage or fallback to defaultData
let editableData = JSON.parse(localStorage.getItem("data")) || data;

// Populate admin panel with existing data
document.addEventListener("DOMContentLoaded", () => {
    populateForm(editableData);

    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault();
        saveForm();
    });

    document.getElementById("logout").addEventListener("click", () => {
        sessionStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });
});

// Populate form fields dynamically
function populateForm(data) {
    document.getElementById("page-title").value = data.pageTitle || "";
    document.getElementById("page-description").value = data.pageDescription || "";
    document.getElementById("about-title").value = data.aboutMe.title || "";
    document.getElementById("about-description").value = data.aboutMe.description.join("\n") || "";
    document.getElementById("approach").value = data.approach.join("\n") || "";
}

// Save form changes back to localStorage
function saveForm() {
    // Read values from the form
    editableData.pageTitle = document.getElementById("page-title").value;
    editableData.pageDescription = document.getElementById("page-description").value;

    editableData.aboutMe.title = document.getElementById("about-title").value;
    editableData.aboutMe.description = document
        .getElementById("about-description")
        .value.split("\n")
        .filter((line) => line.trim()); // Split description into an array

    editableData.approach = document
        .getElementById("approach")
        .value.split("\n")
        .filter((line) => line.trim()); // Split approach into an array

    // Save to localStorage
    localStorage.setItem("data", JSON.stringify(editableData));

    // Feedback to the user
    alert("Settings saved successfully!");
}
