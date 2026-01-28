# Digital Laboratory & Poetic Science

> *"The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves."* — Ada Lovelace

## Sobre
Este repositório hospeda o código-fonte do meu site pessoal, que atua não apenas como portfólio, mas como um **Laboratório Digital** e **Jardim de Aprendizado**.

Aqui, investigo a interseção entre o rigor da Ciência da Computação e a abstração da experiência humana — o que chamo de **"Ciência Poética"**. O objetivo é documentar minha jornada de estudante a pesquisador, aplicando conceitos de *Learning in Public*.

**Acesse o Laboratório:** [gabrielhca.github.io](https://gabrielhca.github.io)

---

## Engenharia

* **Renderização Nativa:** Controle total do *Critical Rendering Path* do navegador.
* **Arquitetura CSS:** Uso de CSS Moderno (Grid, Flexbox, Custom Properties) organizado em módulos, sem pré-processadores.
* **Vanilla JavaScript:** Manipulação direta do DOM e gestão de estado leve para interatividade e internacionalização.

## Arquitetura do Projeto

A estrutura de arquivos segue princípios de separação de responsabilidades para garantir manutenibilidade e escalabilidade.

```text
gabrielhca.github.io/
│
├── index.html          # Landing Page (PT-BR)
├── index-en.html       # Landing Page (EN)
├── lab.html            # Lab Notes & DevLog
│
├── CSS/                # Arquitetura de Estilos Modular
│   ├── style.css       # Entry Point (Gerenciador de Imports)
│   ├── lab.css         # Estilos específicos do Jardim Digital e Cards
│   ├── project.css     # Componentes de apresentação de projetos
│   ├── header.css      # Navegação e identidade visual
│   └── utility/        # Variáveis globais (Cores, Animações)
│
└── js/                 # Lógica Client-Side
    ├── language.js     # Gerenciamento de rotas de idioma
    └── script.js       # Comportamentos de UI e animações

```

## O Conceito de Lab Notes & DevLog

A seção `Lab Notes` (implementada em `lab.html`) reflete a metodologia de aprendizado contínuo. Diferente de um blog estático, o conteúdo é classificado por **maturidade botânica**, permitindo a publicação de ideias em diferentes estágios de desenvolvimento:

* **🌱 Seed (Semente):** Rascunhos, questionamentos filosóficos e ideias iniciais.
* **🌿 Budding (Brotando):** Projetos em andamento, logs de refatoração e aprendizados práticos.
* **🌳 Evergreen (Perene):** Artigos técnicos consolidados, tutoriais e teorias validadas.

---

## Contato & Colaboração

Meu laboratório está aberto para discussões sobre Arquitetura de Software, Filosofia da Computação e colaborações acadêmicas ou Open Source.

* [LinkedIn](https://www.linkedin.com/in/gabriel-henrique-carneiro-amorim-16396b236/)
* [Email](mailto:gabrielohca@gmail.com)


<div align="center">
<small>© 2025 Gabriel Amorim. Todos os direitos reservados.</small>
</div>