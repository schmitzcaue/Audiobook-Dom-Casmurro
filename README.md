# 🎧 Audiobook Dom Casmurro

Link do projeto: [https://github.com/schmitzcaue/Audiobook-Dom-Casmurro](https://github.com/schmitzcaue/Audiobook-Dom-Casmurro)

Bem-vindo ao projeto **Audiobook Dom Casmurro**, desenvolvido com **HTML, CSS e JavaScript**.  
Este aplicativo foi criado para proporcionar uma experiência interativa e envolvente de narrativa em áudio, combinando conteúdo clássico com tecnologia web moderna.

---

## 📖 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)  
- [Objetivo](#-objetivo)  
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [Funcionalidades](#-funcionalidades)  
- [Estrutura do Projeto](#-estrutura-do-projeto)  
- [Como Executar o Projeto](#-como-executar-o-projeto)  
- [Explicação Técnica](#-explicação-técnica)  
- [HTML](#html)  
- [CSS](#css)  
- [JavaScript](#javascript)  
- [Estilização (Parte 8)](#estilização-parte8)  
- [Integração JavaScript (Parte 9)](#integração-javascript-parte9)  
- [Demonstração](#-demonstração)  
- [Aprendizados e Conceitos Aplicados](#-aprendizados-e-conceitos-aplicados)  
- [Autor](#-autor)  
- [Licença](#-licença)

---

## 💡 Sobre o Projeto  
O projeto **Audiobook Dom Casmurro** é uma aplicação web que simula um player de áudio para o livro clássico *Dom Casmurro*, de Machado de Assis.  
Permite ao usuário:  
- Visualizar a capa do livro;  
- Ver as informações do capítulo e autor;  
- Controlar a reprodução de áudio (play, pause, capítulo anterior/próximo).  
- Ter uma interface estilizada e responsiva, com navegação entre capítulos.

Ele foi desenvolvido do zero com o objetivo de aplicar os fundamentos de **HTML, CSS e JavaScript**, e também criar uma experiência de usuário realista para audiolivros.

---

## 🎯 Objetivo  
Construir um aplicativo funcional e atraente que simule um audiobook baseado em web, aplicando os conceitos essenciais de desenvolvimento front-end moderno.

---

## 🛠 Tecnologias Utilizadas  
- **HTML5** – Estrutura e marcação da aplicação;  
- **CSS3** – Estilização, layout e responsividade;  
- **JavaScript (ES6+)** – Funcionalidades interativas, controle de áudio e manipulação do DOM;  
- **Extensão Live Server (VS Code)** – Para pré-visualização e atualização em tempo real durante o desenvolvimento.

---

## ⚙️ Funcionalidades  
- ✅ Exibição da capa do livro;  
- ✅ Exibição de informações do capítulo e autor;  
- ✅ Reprodução de áudio com botões personalizados: **Anterior**, **Play/Pause**, **Próximo**;  
- ✅ Navegação entre capítulos (ciclo de capítulos ao alcançar o final ou início);  
- ✅ Layout moderno, estilizado e centralizado;  
- ✅ Integração entre HTML, CSS e JavaScript para manipulação dinâmica da interface.

---

## 🧩 Estrutura do Projeto  
```bash
📦 Audiobook-Dom-Casmurro
 ┣ 📂 audios
 ┃ ┣ 📜 1.mp3
 ┃ ┣ 📜 2.mp3
 ┃ ┗ 📜 …  
 ┣ 📂 imagens
 ┃ ┗ 📜 capa-livro.png  
 ┣ 📜 index.html  
 ┣ 📜 style.css  
 ┣ 📜 script.js  
 ┗ 📜 README.md  
🧠 Explicação Técnica

🧱 HTML
O HTML estrutura a página com:

Elemento <audio> para carregar e tocar os arquivos de áudio;

Divs para exibir a capa, autor, capítulo;

Botões com SVGs para controles de áudio.

🎨 CSS
O CSS estiliza o layout para ficar visualmente atraente:

🧥 Estilização – Parte 8
Reset dos estilos padrões para evitar diferenças entre navegadores.

⚙️ Integração JavaScript – Parte 9
Criação de script.js para controle de funcionalidade.


🎬 Demonstração
Insira aqui uma imagem ou gif que mostre o player funcionando:

markdown
Copiar código
![Preview do projeto](./imagens/preview.png)
📚 Aprendizados e Conceitos Aplicados
Estruturação semântica com HTML5;

Reset, classes e ids no CSS, box-sizing;

Layout Flexbox para centralização;

Controles estilizados e responsivos;

Manipulação de DOM com JavaScript;

Eventos, funções, variáveis, estados;

Navegação entre capítulos de forma dinâmica;

Uso de Live Server para desenvolvimento rápido.

👨‍💻 Autor
Cauê Schmitz
Desenvolvedor Front-End • Estudante de Programação Web
🔗 GitHub – schmitzcaue

🪪 Licença
Este projeto está sob a licença MIT.
Sinta-se à vontade para usar, adaptar e aprimorar conforme sua necessidade.
