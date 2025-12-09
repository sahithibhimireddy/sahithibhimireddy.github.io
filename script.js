function openTab(tabName) {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
}

// Show home tab by default
document.getElementById("home").classList.add("active");
