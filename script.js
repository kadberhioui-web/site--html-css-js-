const toggleBtn = document.getElementById("toggle-all");
const sections = document.querySelectorAll("details");

if (sections.length) sections[0].open = true;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const openAll = [...sections].some((d) => !d.open);
    sections.forEach((d) => (d.open = openAll));
    toggleBtn.textContent = openAll ? "إغلاق الكل" : "فتح الكل";
  });
}

// الخاتمة في الصفحة الرئيسية: تظهر عند النقر وتُغلق بالنقر مرة أخرى
const conclBtn = document.getElementById("concl-btn");
const conclPanel = document.getElementById("concl-panel");
const conclClose = document.getElementById("concl-close");

if (conclBtn && conclPanel) {
  const setOpen = (open) => {
    conclPanel.hidden = !open;
    conclBtn.setAttribute("aria-expanded", open);
  };
  conclBtn.addEventListener("click", () => setOpen(conclPanel.hidden));
  if (conclClose) conclClose.addEventListener("click", () => setOpen(false));
}

// التنقل دون إضافة خطوات إلى سجل المتصفح، ليخرج زر الرجوع من الموقع مباشرة
document.querySelectorAll(".tabs a, .pages a, footer a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace(a.href);
  });
});
