// ==================== Scroll Active Menu Link ====================
// const sections = document.querySelectorAll("section[id]");

// const scrollActiveMenuLink = () => {
//   const scrollDown = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 300,
//       sectionId = current.getAttribute("id"),
//       sectionClass = document.querySelector(
//         ".nav_menu a[href='#" + sectionId + "']"
//       );

//     if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//       sectionClass.classList.add("menu_active");
//     } else {
//       sectionClass.classList.remove("menu_active");
//     }
//   });
// };

// window.addEventListener("scroll", scrollActiveMenuLink);

// ==================== Header Mobile Buttons ====================
const navMenuMobile = document.querySelector("nav");

function showMenuMobile() {
  const mobMenuShowClose = document.querySelectorAll(".show-close");

  for (let i = 0; i < mobMenuShowClose.length; i++) {
    mobMenuShowClose[i].addEventListener("click", function () {
      navMenuMobile.classList.toggle("show-menu-mobile");
    });
  }
}

showMenuMobile();

// ==================== Menu Mobile Hidden on Click Link ====================
function menuMobileHiddenClick() {
  const itemsMenu = document.querySelectorAll("header .menu_link");
  for (let i = 0; i < itemsMenu.length; i++) {
    itemsMenu[i].addEventListener("click", () => {
      navMenuMobile.classList.remove("show-menu-mobile");
    });
  }
}

menuMobileHiddenClick();

// ==================== Projects Scroll Reveal ====================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 20;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// ==================== More Projects ====================
function toggleShowProjects() {
  const btnMoreProjects = document.querySelector(".btn-more"),
    projects = document.querySelector("section.projects .container > div");

  btnMoreProjects.addEventListener("click", () => {
    projects.classList.toggle("project_active");

    if (projects.classList.contains("project_active")) {
      btnMoreProjects.textContent = "Ver menos";
    } else {
      btnMoreProjects.textContent = "Ver mais";
    }
  });
}

toggleShowProjects();

// ==================== Skills Swiper ====================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 60,
    },
  },
});

// ==================== Skills Content ====================
const skills = document.querySelectorAll("section.skills .skills-grid i");
const skillDesc = document.querySelector(".skills .skills_description p");
const skillBar = document.querySelectorAll(".skills .skills-grid .skill .bar");
skillBar[0].classList.add("barActive");

const skillContents = [
  "O HTML5 é uma Linguagem de Marcação de Hipertexto, usado para construir a <strong>estrutura</strong> da página web e permitindo criar sites altamente eficientes por meio de tags específicas para cada tipo de conteúdo. <br /> Desenvolvo meu aprendizado em HTML através de cursos, da faculdade, de projetos, de tutoriais etc.",

  "CSS é usado para <strong>estilizar</strong> elementos escritos em uma linguagem de marcação como HTML. Utilizando o CSS é possível alterar tanto a cor do texto e de botões, quanto criar animações por todo o site. <br /> Portanto, aprendo CSS em conjunto com o HTML, sempre buscando usar das boas práticas para criar um site acessível e bem construído.",

  "JavaScript é uma <strong>linguagem de programação</strong> que permite implementar itens complexos em páginas web, assim, a página faz mais do que simplesmente mostrar as informações estáticas do HTML e CSS. Com JavaScript é possível criar conteúdos interativos e dinâmicos no site, sendo possível desempenhar ações em cada elemento. <br /> Essa é a linguagem de programação que escolhi focar, tanto pelo seu potencial quanto a sua popularidade, facilitando na hora de buscar conteúdos. Além de também ser uma linguagem usada tanto para o Front End quanto o Back End, através de frameworks e bibliotecas.",

  "Um <strong>Banco de Dados Relacional</strong> é um banco de dados que modela os dados de uma forma que eles sejam percebidos pelo usuário como tabelas, ou mais formalmente relações. <br /> Dedico meus estudos também ao aprendizado de Banco de Dados SQL.",
];

skills.forEach((skill, index) => {
  skill.addEventListener("mouseover", () => {
    skillDesc.innerHTML = skillContents[index];
    skills.forEach((s, i) => {
      if (i === index) {
        s.classList.add(`${["html", "css", "js", "bd"][index]}-color`);
      } else {
        s.classList.remove(`${["html", "css", "js", "bd"][i]}-color`);
      }
    });
    skillBar.forEach((bar, i) => {
      if (i === index) {
        bar.classList.add("barActive");
      } else {
        bar.classList.remove("barActive");
      }
    });
  });
});

// ==================== Scroll to Section href ====================
const scrollToSection = (targetId) => {
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetOffset = targetElement.getBoundingClientRect().top;
    const scrollTo = targetOffset + window.scrollY - window.innerHeight / 4;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  }
};

// Menu-link highlighted
const sections = document.querySelectorAll("section[id]");

const scrollActiveMenuLink = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 300,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav_menu a[href='#" + sectionId + "']"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("menu_active");
    } else {
      sectionClass.classList.remove("menu_active");
    }
  });
};

// Click menu-link
document.querySelectorAll(".menu_link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    scrollToSection(targetId);
  });
});

window.addEventListener("scroll", scrollActiveMenuLink);
