//! Плавный скролл для якорей ***************************
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").slice(1);
    document
      .getElementById(blockID)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
