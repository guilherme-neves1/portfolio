// ==================== HEADER ====================
const btnToggle = document.querySelector(".btn-toggle"),
  btnClose = document.querySelector(".btn-close"),
  navMenu = document.querySelector("nav");

// ==================== PROJECTS ====================
const buttonMore = document.querySelector(".btn-more"),
  allProjects = document.querySelector("section.projects .container > div");

// ==================== SKILLS ====================
const skill = document.querySelectorAll("section.skills .grid i"),
  skillDesc = document.querySelector(".skills .skills_description p"),
  skillBar = document.querySelectorAll(".skills .grid .grid_item .bar");
skillBar[0].classList.add("barActive");

var texto = "";

// ==================== PROJECTS ====================
buttonMore.addEventListener("click", () => {
  allProjects.classList.toggle("project_active");

  if (allProjects.classList.contains("project_active")) {
    return (buttonMore.textContent = "Ver menos");
  }

  buttonMore.textContent = "Ver mais";
});
// ==================== END PROJECTS ====================

// ==================== SKILLS ====================
skill[0].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "O HTML5 é uma Linguagem de Marcação de Hipertexto, usado para construir a <strong>estrutura</strong> da página web e permitindo criar sites altamente eficientes por meio de tags específicas para cada tipo de conteúdo. <br /> Desenvolvo meu aprendizado em HTML através de cursos, da faculdade, de projetos, de tutoriais etc.";

  skillBar[0].classList.add("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[1].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "CSS é usado para <strong>estilizar</strong> elementos escritos em uma linguagem de marcação como HTML. Utilizando o CSS é possível alterar tanto a cor do texto e de botões, quanto criar animações por todo o site. <br /> Portanto, aprendo CSS em conjunto com o HTML, sempre buscando usar das boas práticas para criar um site acessível e bem construído.";

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.add("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[2].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "JavaScript é uma <strong>linguagem de programação</strong> que permite implementar itens complexos em páginas web, assim, a página faz mais do que simplesmente mostrar as informações estáticas do HTML e CSS. Com JavaScript é possível criar conteúdos interativos e dinâmicos no site, sendo possível desempenhar ações em cada elemento. <br /> Essa é a linguagem de programação que escolhi focar, tanto pelo seu potencial quanto a sua popularidade, facilitando na hora de buscar conteúdos. Além de também ser uma linguagem usada tanto para o Front End quanto o Back End, através de frameworks e bibliotecas.";

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.add("barActive");
  skillBar[3].classList.remove("barActive");
});

skill[3].addEventListener("mouseover", () => {
  skillDesc.innerHTML =
    "Um <strong>Banco de Dados Relacional</strong> é um banco de dados que modela os dados de uma forma que eles sejam percebidos pelo usuário como tabelas, ou mais formalmente relações. <br /> Dedico meus estudos também ao aprendizado de Banco de Dados SQL.";

  skillBar[0].classList.remove("barActive");
  skillBar[1].classList.remove("barActive");
  skillBar[2].classList.remove("barActive");
  skillBar[3].classList.add("barActive");
});
// ==================== END SKILLS ====================

// ==================== SCROLL ACTIVE ====================
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
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

window.addEventListener("scroll", scrollActive);
// ==================== END SCROLL ACTIVE ====================

// ==================== HEADER ====================
if (btnToggle) {
  btnToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    btnClose.classList.add("show-close");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    btnToggle.classList.remove("hidden-toggle");
    btnClose.classList.remove("show-close");
  });
}
// ==================== END HEADER ====================

// ==================== SKILLS SWIPER ====================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 90,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (window.innerWidth < 1000) {
  var swiperTwo = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlides: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (window.innerWidth < 700) {
  var swiperTwo = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
