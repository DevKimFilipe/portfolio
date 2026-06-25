# Portfólio Pessoal — Kim Borges

Portfólio online (currículo digital) desenvolvido como **Atividade Prática** da
disciplina **Fundamentos da Programação Web**, do Centro Universitário UNINTER.

🔗 **Site publicado:** https://devkimfilipe.github.io/portfolio-kimborges/
📂 **Repositório:** https://github.com/devkimfilipe/portfolio-kimborges

---

## 📌 Sobre o projeto

O objetivo da atividade foi desenvolver um portfólio pessoal funcional, com no
mínimo 4 seções interligadas por um menu de navegação, aplicando os
fundamentos de **HTML5**, **CSS3** e **JavaScript**, sem o uso de frameworks ou
bibliotecas (como Bootstrap, Tailwind, React, Vue, jQuery, etc.), conforme
exigido no enunciado da atividade.

O site foi estruturado como uma **Single Page Website com navegação por
âncoras**: todo o conteúdo está em um único arquivo `index.html`, e o menu
fixo no topo direciona o usuário para cada seção através de links de âncora
(`#sobre`, `#formacao`, `#portfolio`, `#contato`), sem recarregar a página.

## 🗂️ Seções do site

| Seção | Âncora | Conteúdo |
|---|---|---|
| Sobre mim | `#sobre` | Apresentação pessoal e hobbies |
| Formação | `#formacao` | Graduação, cursos e idiomas |
| Portfólio | `#portfolio` | Projetos reais, com links para cada repositório publicado |
| Contato | `#contato` | Formulário validado em JavaScript |

## ⚙️ Funcionalidades em JavaScript

Conforme sugerido no item 5 do enunciado, foram implementadas as seguintes
interações, todas em JavaScript puro (vanilla):

- **Validação do formulário de contato**: verifica preenchimento dos campos
  nome, e-mail e mensagem, valida o formato do e-mail via expressão regular,
  e exibe mensagens de erro específicas por campo, em tempo real.
- **Simulação de envio do formulário**: após validação bem-sucedida, os
  campos são limpos e uma mensagem de confirmação é exibida na própria
  página.
- **Menu responsivo**: botão "hamburguer" que exibe/oculta o menu de
  navegação em telas pequenas (dispositivos móveis).
- **Alternância de tema claro/escuro**: troca as variáveis de cor do site e
  mantém a preferência do usuário salva no navegador.
- **Scrollspy**: o item do menu correspondente à seção visível na tela é
  destacado automaticamente conforme o usuário rola a página.
- **Animação das barras de idioma**: as barras de proficiência em idiomas são
  preenchidas dinamicamente quando entram na área visível da tela.

## 🛠️ Tecnologias utilizadas

- HTML5 semântico
- CSS3 puro (Custom Properties, Flexbox, Grid, media queries, gradientes)
- JavaScript (ES6+), sem frameworks ou bibliotecas
- Google Fonts: Sora e Inter

Nenhum framework de CSS (Bootstrap, Tailwind, Bulma, etc.) ou de JavaScript
(React, Angular, Vue, jQuery, etc.) foi utilizado, em conformidade com as
restrições do enunciado da atividade.

## 📁 Estrutura de arquivos

```
portfolio-kimborges/
├── index.html      # Página única, com todas as 4 seções via âncora
├── style.css       # Folha de estilos completa
├── script.js       # Toda a lógica de interação (tema, menu, formulário, etc.)
└── README.md
```

## 🚀 Como executar localmente

Como o projeto não utiliza nenhuma ferramenta de build, basta:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/devkimfilipe/portfolio-kimborges.git
   ```
2. Abrir o arquivo `index.html` diretamente no navegador, ou servir a pasta
   com qualquer servidor estático (por exemplo, a extensão *Live Server* do
   VS Code).

## 🌐 Publicação (Deploy)

O site está publicado via **GitHub Pages**, a partir da branch `main` do
repositório, e pode ser acessado em:

➡️ https://devkimfilipe.github.io/portfolio-kimborges/

## 🔗 Projetos referenciados no portfólio

A seção "Portfólio" do site traz três projetos próprios, cada um publicado em
seu repositório:

- **Chama Fácil** — protótipo de interface acessível para idosos
- **Cronograma de Estudos (Study Planner Pro)** — gerenciador de tarefas de
  estudo
- **Career Journey** — registro da trajetória acadêmica e técnica

## 👤 Autoria

Desenvolvido por **Kim Borges** como atividade individual da disciplina
Fundamentos da Programação Web — UNINTER.

## 📄 Licença

Este projeto está sob a licença MIT 
