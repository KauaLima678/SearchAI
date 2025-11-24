let cardContainer = document.querySelector(".cardsContainer");
let dados = [];

const PAGE_SIZE = 6;
let currentIndex = 0;
let filteredDados = [];
const loadMoreBtn = document.querySelector(".more");

// Carrega os dados do JSON e aplica filtro/paginação
async function buscar() {
  if (dados.length === 0) {
    try {
      const response = await fetch("data.json");
      dados = await response.json();
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
      return;
    }
  }

  const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
  filteredDados = dados.filter((dado) =>
    dado.nameAI.toLowerCase().includes(searchTerm) || dado.desenvolvedor.toLowerCase().includes(searchTerm)
  );

  // reset pagination
  currentIndex = 0;
  cardContainer.innerHTML = "";

  // se não trouxe resultados, mostra mensagem e oculta botão
  if (!filteredDados || filteredDados.length === 0) {
    cardContainer.innerHTML = '<div class="no-results">Nenhum item encontrado.</div>';
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  updateLoadMore();
  showNext();
}

function renderItems(items) {
  for (let dado of items) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
        <h2>${dado.nameAI}</h2>
        <div class="developer info">
        <span class="subTitle">Desenvolvedor:</span>
        <span>${dado.desenvolvedor}</span>
        </div>
        <div class="date info">
          <span class="subTitle">Lançamento:</span>
          <span>${dado.releaseDate}</span>
        </div>
        <div class="function info">
          <span class="subTitle">Funcionalidade:</span>
          <span>${dado.function}</span>
        </div>
        <div class="recommendation info">
          <span class="subTitle">Indicação de uso:</span>
          <span>${dado.recommendation}</span>
        </div>
        <div class="link">
            <a href="${dado.url}" target="_blank">Testar IA</a>
        </div>
        `;
    cardContainer.appendChild(article);
  }
}

function showNext() {
  if (!filteredDados || filteredDados.length === 0) return;
  const nextItems = filteredDados.slice(currentIndex, currentIndex + PAGE_SIZE);
  renderItems(nextItems);
  currentIndex += nextItems.length;
  updateLoadMore();
}

function updateLoadMore() {
  if (!loadMoreBtn) return;
  if (currentIndex >= filteredDados.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-block";
    const remaining = filteredDados.length - currentIndex;
  }
}

window.addEventListener('DOMContentLoaded', function () {
  // conecta o botão "Ver mais"
  if (loadMoreBtn) loadMoreBtn.addEventListener('click', showNext);

  // carregar e exibir a primeira página ao abrir
  buscar();
});

// Inicializa particles.js apontando para a configuração em Imgs (se a lib foi carregada)
;(function initParticles() {
  function tryLoad() {
    if (typeof particlesJS !== "undefined") {
      particlesJS.load(
        "particles-js",
        "Imgs/particles.js-master/demo/particles.json",
        function () {
          console.log("particles.js carregado (Imgs)");
        }
      );
    } else {
      console.warn(
        "particles.js não encontrado no momento da inicialização. Verifique se 'Imgs/particles.js-master/particles.min.js' está sendo carregado antes de 'script.js'."
      );
    }
  }

  // tenta executar logo (script.js é carregado após particles.min.js normalmente)
  if (document.readyState === "complete" || document.readyState === "interactive") {
    tryLoad();
  } else {
    window.addEventListener("DOMContentLoaded", tryLoad);
  }
})();
