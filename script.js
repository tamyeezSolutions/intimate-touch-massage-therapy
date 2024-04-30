// Event listeners for page interactions
document.addEventListener("DOMContentLoaded", function () {
  initContactForm();
  initNavigation();
  initHamburgerMenu();
  loadBlogPosts();
});

// Initialize the contact form handling
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation
    if (this.name.value && this.email.value && this.message.value) {
      alert("Thank you for your message. We will get back to you soon!");
      this.reset(); // Reset the form after submission
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Initialize navigation link behavior
function initNavigation() {
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Initialize hamburger menu toggle
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// Load blog posts dynamically
function loadBlogPosts() {
  const posts = [
    {
      title: "The Benefits of Massage Therapy",
      date: "April 15, 2024",
      content:
        "Massage therapy can help reduce stress, relieve pain, and improve overall health.",
    },
    {
      title: "How Often Should You Get a Massage?",
      date: "April 10, 2024",
      content:
        "The frequency of massages can depend on your health, lifestyle, and personal needs.",
    },
    {
      title: "Types of Massages Explained",
      date: "April 5, 2024",
      content:
        "From Swedish to Deep Tissue, learn about different types of massages and what they offer.",
    },
  ];

  const blogPostsContainer = document.getElementById("blogPosts");
  blogPostsContainer.innerHTML = ""; // Clear existing content

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.innerHTML = `<h3>${post.title}</h3><small>${post.date}</small><p>${post.content}</p>`;
    blogPostsContainer.appendChild(postElement);
  });
}
