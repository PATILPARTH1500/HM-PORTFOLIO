document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Animation
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Burger Menu Toggle
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            this.reset();
        }
    });

    // Gallery Image Click Effect
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", function () {
            let imgSrc = this.src;
            let modal = document.createElement("div");
            modal.innerHTML = `<div class="modal-bg">
                                  <img src="${imgSrc}" class="modal-img">
                               </div>`;
            document.body.appendChild(modal);

            modal.addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
