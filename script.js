/* =====================================================================
   PORTFÓLIO KIM BORGES — SCRIPT
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  inicializarTema();
  inicializarMenuMobile();
  inicializarScrollSpy();
  inicializarBarrasIdioma();
  inicializarFormulario();
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
});

const CHAVE_TEMA = "kim-portfolio-tema";

function inicializarTema() {
  const botao = document.getElementById("themeButton");
  const icone = document.getElementById("themeIcone");
  const salvo = localStorage.getItem(CHAVE_TEMA);

  if (salvo === "claro") {
    document.body.classList.add("tema-claro");
  }
  atualizarIcone();

  botao.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");
    const atual = document.body.classList.contains("tema-claro") ? "claro" : "escuro";
    localStorage.setItem(CHAVE_TEMA, atual);
    atualizarIcone();
  });

  function atualizarIcone() {
    const claro = document.body.classList.contains("tema-claro");
    icone.textContent = claro ? "☀" : "☾";
  }
}

function inicializarMenuMobile() {
  const botao = document.getElementById("menuButton");
  const lista = document.getElementById("navLista");

  botao.addEventListener("click", function () {
    const aberto = lista.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  lista.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      lista.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}


function inicializarScrollSpy() {
  const secoes = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");

  if (!secoes.length || !("IntersectionObserver" in window)) return;

  const observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          const id = entrada.target.getAttribute("id");
          links.forEach(function (link) {
            link.classList.toggle("ativo", link.dataset.secao === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  secoes.forEach(function (secao) {
    observador.observe(secao);
  });
}

/* -----------------------------------------------------------------
   BARRAS DE PROFICIÊNCIA EM IDIOMAS
   ----------------------------------------------------------------- */
function inicializarBarrasIdioma() {
  const barras = document.querySelectorAll(".idioma__progresso");
  if (!barras.length) return;

  if (!("IntersectionObserver" in window)) {
    barras.forEach(preencher);
    return;
  }

  const observador = new IntersectionObserver(
    function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          preencher(entrada.target);
          obs.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  barras.forEach(function (barra) {
    observador.observe(barra);
  });

  function preencher(barra) {
    barra.style.width = (barra.getAttribute("data-nivel") || "0") + "%";
  }
}

function inicializarFormulario() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const resultado = document.getElementById("resultado");

  const erroNome = document.getElementById("erroNome");
  const erroEmail = document.getElementById("erroEmail");
  const erroMensagem = document.getElementById("erroMensagem");

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    resultado.textContent = "";
    resultado.className = "";

    let valido = true;

    if (nome.value.trim() === "") {
      marcarErro(nome, erroNome, "Informe seu nome.");
      valido = false;
    } else {
      limparErro(nome, erroNome);
    }

    if (email.value.trim() === "") {
      marcarErro(email, erroEmail, "Informe seu e-mail.");
      valido = false;
    } else if (!emailValido.test(email.value.trim())) {
      marcarErro(email, erroEmail, "Digite um e-mail válido.");
      valido = false;
    } else {
      limparErro(email, erroEmail);
    }

    if (mensagem.value.trim() === "") {
      marcarErro(mensagem, erroMensagem, "Escreva sua mensagem.");
      valido = false;
    } else {
      limparErro(mensagem, erroMensagem);
    }

    if (!valido) return;

    resultado.textContent = "Mensagem enviada com sucesso!";
    resultado.className = "sucesso";
    form.reset();
  });

  function marcarErro(campo, elementoErro, texto) {
    campo.classList.add("invalido");
    elementoErro.textContent = texto;
  }

  function limparErro(campo, elementoErro) {
    campo.classList.remove("invalido");
    elementoErro.textContent = "";
  }
}