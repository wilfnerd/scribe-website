// WritePath Consulting — Interactions

// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('show');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu on link click (mobile)
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Intersection Observer for reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => io.observe(el));

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.className = 'btn back-top hidden';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  const show = window.scrollY > 420;
  backToTop.classList.toggle('hidden', !show);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================== AUTH ==================

// SIGN IN
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signinForm.email.value.trim();
    const password = signinForm.password.value.trim();

    if (!email || !password) {
      alert("❌ Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Login successful!");
        window.location.href = "index.html"; // redirect after login
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error. Please try again later.");
    }
  });
}

// SIGN UP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const strengthBar = document.getElementById("strengthBar");
  const passwordHint = document.getElementById("passwordHint");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");

  // Password strength
  if (password) {
    password.addEventListener("focus", () => {
      passwordHint.style.display = "block";
    });

    password.addEventListener("input", () => {
      const val = password.value;
      let strength = 0;
      if (val.match(/[a-z]/)) strength++;
      if (val.match(/[A-Z]/)) strength++;
      if (val.match(/[0-9]/)) strength++;
      if (val.match(/[^a-zA-Z0-9]/)) strength++;
      if (val.length >= 8) strength++;

      strengthBar.style.width = (strength * 20) + "%";
      strengthBar.style.background =
        strength <= 2 ? "red" :
        strength === 3 ? "orange" :
        strength === 4 ? "gold" : "green";
    });
  }

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let isValid = true;
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    const email = signupForm.email.value.trim();
    const passVal = password.value;
    const confirmVal = confirmPassword.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (passVal.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (passVal !== confirmVal) {
      confirmError.textContent = "Passwords do not match.";
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password: passVal }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Signup successful! You can now sign in.");
        window.location.href = "signin.html";
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error. Please try again later.");
    }
  });
}
