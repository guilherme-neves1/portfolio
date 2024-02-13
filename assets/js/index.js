// ==================== More Projects ====================
const buttonMoreProjects = document.querySelector(".btn-more"),
  projects = document.querySelector("section.projects .container > div");

buttonMoreProjects.addEventListener("click", () => {
  projects.classList.toggle("project_active");

  if (projects.classList.contains("project_active")) {
    return (buttonMoreProjects.textContent = "Ver menos");
  }

  buttonMoreProjects.textContent = "Ver mais";
});

// ==================== SKILLS ====================

const skill = document.querySelectorAll("section.skills .grid i"),
  skillDesc = document.querySelector(".skills .skills_description p"),
  skillBar = document.querySelectorAll(".skills .grid .grid_item .bar");
skillBar[0].classList.add("barActive");

skill[0].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "O HTML5 é uma Linguagem de Marcação de Hipertexto, usado para construir a <strong>estrutura</strong> da página web e permitindo criar sites altamente eficientes por meio de tags específicas para cada tipo de conteúdo. <br /> Desenvolvo meu aprendizado em HTML através de cursos, da faculdade, de projetos, de tutoriais etc.";

  skill[0].classList.add("html-color");
  skill[1].classList.remove("css-color");
  skill[2].classList.remove("js-color");
  skill[3].classList.remove("bd-color");

  skillBar[0].classList.add("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[1].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "CSS é usado para <strong>estilizar</strong> elementos escritos em uma linguagem de marcação como HTML. Utilizando o CSS é possível alterar tanto a cor do texto e de botões, quanto criar animações por todo o site. <br /> Portanto, aprendo CSS em conjunto com o HTML, sempre buscando usar das boas práticas para criar um site acessível e bem construído.";

  skill[0].classList.remove("html-color");
  skill[1].classList.add("css-color");
  skill[2].classList.remove("js-color");
  skill[3].classList.remove("bd-color");

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.add("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[2].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "JavaScript é uma <strong>linguagem de programação</strong> que permite implementar itens complexos em páginas web, assim, a página faz mais do que simplesmente mostrar as informações estáticas do HTML e CSS. Com JavaScript é possível criar conteúdos interativos e dinâmicos no site, sendo possível desempenhar ações em cada elemento. <br /> Essa é a linguagem de programação que escolhi focar, tanto pelo seu potencial quanto a sua popularidade, facilitando na hora de buscar conteúdos. Além de também ser uma linguagem usada tanto para o Front End quanto o Back End, através de frameworks e bibliotecas.";

  skill[0].classList.remove("html-color");
  skill[1].classList.remove("css-color");
  skill[2].classList.add("js-color");
  skill[3].classList.remove("bd-color");

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.add("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[3].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "Um <strong>Banco de Dados Relacional</strong> é um banco de dados que modela os dados de uma forma que eles sejam percebidos pelo usuário como tabelas, ou mais formalmente relações. <br /> Dedico meus estudos também ao aprendizado de Banco de Dados SQL.";

  skill[0].classList.remove("html-color");
  skill[1].classList.remove("css-color");
  skill[2].classList.remove("js-color");
  skill[3].classList.add("bd-color");

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.add("barActive");
});

// ==================== Scroll Active Menu Link ====================
const sections = document.querySelectorAll("section[id]");

const scrollActiveMenuLink = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 300,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("menu_active");
    } else {
      sectionClass.classList.remove("menu_active");
    }
  });
};

window.addEventListener("scroll", scrollActiveMenuLink);

// ==================== Header Mobile Buttons ====================

function showMenuMobile() {
  const mobMenuShowClose = document.querySelectorAll(".show-close"),
    navMenuMobile = document.querySelector("nav");

  for (var i = 0; i < mobMenuShowClose.length; i++) {
    mobMenuShowClose[i].addEventListener("click", () => {
      return navMenuMobile.classList.toggle("show-menu-mobile");
    });
  }
}

showMenuMobile();

// btnClose.addEventListener("click", () => {
//   navMenu.classList.remove("show-menu");
// });

// ==================== Menu Mobile Hidden on Click ====================
function menuMobileHiddenClick() {
  const itemsMenu = document.querySelectorAll("header .menu_link");
  for (var i = 0; i < itemsMenu.length; i++) {
    const navMenu = document.querySelector("nav");

    itemsMenu[i].addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}

menuMobileHiddenClick();

// ==================== SCROLL REVEAL ====================
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
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

// ==================== SKILLS SWIPER ====================
if (window.innerWidth >= 1000) {
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
  });
}

if (window.innerWidth >= 700 && window.innerWidth < 1000) {
  var twoSwiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 60,
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
  });
}

if (window.innerWidth < 700) {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 60,
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
  });
}
