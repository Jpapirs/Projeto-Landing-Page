const section = document.querySelectorAll(".js-scroll");

const AlturaWindow = window.innerHeight * 0.6;
if (section.length) {
  function aparecer() {
    section.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top - AlturaWindow;
      if (sectionTop < 0) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
    });
  }
}

window.addEventListener("scroll", aparecer);
