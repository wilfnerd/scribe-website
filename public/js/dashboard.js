// dashboard.js

// ✅ Check if user is logged in
const token = localStorage.getItem("token");
if (!token) {
  alert("You must log in first!");
  window.location.href = "signin.html"; // redirect to login page
}

// ✅ Fetch user profile info
fetch("http://localhost:5000/api/auth/me", {
  headers: { "Authorization": "Bearer " + token }
})
  .then(res => res.json())
  .then(data => {
    if (data.email) {
      document.getElementById("userEmail").textContent = "Logged in as: " + data.email;
    } else {
      document.getElementById("userEmail").textContent = "Error loading user info.";
    }
  });

// ✅ Fetch dashboard stats
fetch("http://localhost:5000/api/dashboard/stats", {
  headers: { "Authorization": "Bearer " + token }
})
  .then(res => res.json())
  .then(data => {
    // Replace hardcoded stats
    document.getElementById("total-projects").textContent = data.totalProjects || 0;
    document.getElementById("active-users").textContent = data.totalUsers || 0;
    document.getElementById("messages").textContent = data.totalMessages || 0;

    // Populate activity list
    const activityList = document.getElementById("recent-activity");
    activityList.innerHTML = "";

    if (data.recentUsers && data.recentUsers.length > 0) {
      data.recentUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `✔ New user: ${user.username} (${user.email})`;
        activityList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "No recent activity";
      activityList.appendChild(li);
    }
  })
  .catch(err => console.error("Error loading stats:", err));

// ✅ Logout button
document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("token");
  window.location.href = "signin.html";
});
