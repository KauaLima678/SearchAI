
# SearchAI — Portfólio de IAs

![Preview](./imgs/SearchAI.png)

Resumo
------
SearchAI é uma landing estática desenvolvida durante a Imersão Dev IA 2025 (Alura). O site lista ferramentas de Inteligência Artificial em formato de cards, com busca por nome/desenvolvedor, paginação incremental e um background em partículas (particles.js).

Link do projeto
------
- Demo: [Acesse aqui](https://kaualima678.github.io/imersaoDev25/) (GitHub Pages)

Principais recursos
-------------------
- Busca por `nameAI` e `desenvolvedor`.
- Paginação incremental: 6 cards por vez com botão "Ver mais".
- Background com `particles.js` (paleta roxo / aqua / branco).
- Gerador Node (`node/gerador.js`) que cria/atualiza `data.json`.


Estrutura do repositório
------------------------
- `index.html` — página principal.
- `style.css` — estilos globais.
- `script.js` — lógica de carregamento, busca, paginação e inicialização do particles.
- `data.json` — conteúdo das IAs exibidas (gerado/atualizado pelo gerador).
- `Imgs/` — imagens e assets (inclui cópia opcional de `particles.js` no subdiretório `particles.js-master`).
- `node/gerador.js` — script Node para gerar/atualizar `data.json`.

Formato do `data.json`
----------------------
Cada item em `data.json` segue este esquema simplificado:

```json
{
	"nameAI": "Nome da IA",
	"desenvolvedor": "Empresa/Autor",
	"releaseDate": "YYYY-MM-DD",
	"type": "Categoria",
	"function": "Breve descrição",
	"recommendation": "Indicação de uso",
	"url": "https://...",
}
```

Contato
-------
- Autor: `KauaLima678`
- Repositório: `imersaoDev25`
- Email: `kauablima26@gmail.com`
---
