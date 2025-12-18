const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


// ===== ПУЗЫРЬКИ =====
const bubblesContainer = document.createElement("div");
bubblesContainer.className = "bubbles";
document.body.appendChild(bubblesContainer);

function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const size = Math.random() * 40 + 10;
  bubble.style.width = bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = (Math.random() * 10 + 8) + "s";

  bubblesContainer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 20000);
}

setInterval(createBubble, 600);
