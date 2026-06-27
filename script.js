const adminHours = {
    open: 9,
    close: 21
};

function renderAdminStatus() {
    const target = document.querySelector("[data-admin-status]");

    if (!target) {
        return;
    }

    const hour = new Date().getHours();
    const isOnline = hour >= adminHours.open && hour < adminHours.close;

    target.className = `status ${isOnline ? "online" : "offline"}`;
    target.innerHTML = isOnline
        ? "Admin sedang online. Jam operasional 09:00 - 21:00 WIB."
        : "Admin sedang offline. Pesan tetap bisa dikirim dan akan dibalas saat admin online.";
}

function markActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

renderAdminStatus();
markActiveNav();
