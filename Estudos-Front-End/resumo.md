# 📘 Resumo de Estudos — HTML, CSS e JavaScript

Este documento organiza os principais conceitos iniciais de **HTML**, **CSS** e **JavaScript**, servindo como um guia de consulta e estudo.

---

## 🟠 HTML (HyperText Markup Language)

HTML é uma **linguagem de marcação**, responsável pela **estrutura e significado do conteúdo** da página.

> **HTML = estrutura**
> **CSS = aparência**
> **JavaScript = comportamento**

### 📄 Arquivo principal

* **index.html** → normalmente é o arquivo principal de uma página web.

---

### 🏷️ Tags básicas

* `<head></head>` → Configurações da página (título, CSS, meta informações)
* `<p></p>` → Parágrafo
* `<hr />` → Linha horizontal de separação
* `<br />` → Quebra de linha
* `<i></i>` → Itálico
* `<b></b>` → Negrito
* `<u></u>` → Sublinhado

---

### 🧱 Títulos

* `<h1></h1>` → Título principal da página
* `<h2></h2>` → Subtítulo
* `<h3></h3>` → Níveis abaixo do principal

---

### 🔗 Tags com atributos especiais

* `<img src="" />` → Imagem (`src` = source / caminho da imagem)
* `<a href=""></a>` → Link (`href` = endereço do link)
* `<ul><li></li></ul>` → Lista não ordenada
* `<ol><li></li></ol>` → Lista ordenada
* `<input type="text" value="Hello World" />` → Campo de entrada de texto
* `<table><tr><td></td></tr></table>` → Tabela

  * `tr` → linha
  * `td` → coluna

#### Atributos importantes

* `disabled` → Desabilita a edição do campo pelo usuário

---

## 🔵 CSS (Cascading Style Sheets)

CSS é responsável pela **aparência visual** da página.

### 🎨 Propriedades básicas

* `color` → Cor do texto
* `background-color` → Cor de fundo
* `border` → Borda (largura, estilo e cor)

  * Exemplo: `border: 1px solid red;`

---

### 📍 CSS dentro do HTML (`<style>`)

O CSS pode ser colocado dentro da tag `<style>`, que fica no `<head>` da página.

O navegador carrega o CSS **antes de renderizar o conteúdo visual**.

O exemplo abaixo define estilos para **todas** as tags `<p>` e `<h1>`:

* Seletores por **nome da tag** aplicam o estilo a todas as ocorrências.

---

### 🎯 Seletores CSS

#### 1️⃣ Por tag

* Exemplo: `p { }`, `h1 { }`
* Aplica o estilo a **todas** as tags daquele tipo

#### 2️⃣ Por classe (`class`)

* Classe começa com `.` no CSS
* Usada para estilizar **vários elementos**, mas não todos

Padrão comum de nome:

* primeira palavra minúscula
* segunda palavra maiúscula (camelCase)

Exemplo:

* `.primeiroParagrafo { }`

#### 3️⃣ Por ID (`id`)

* ID começa com `#` no CSS
* Usado para estilizar **apenas um elemento específico**

Exemplo:

* `#logo { width: 200px; }`

---

### 📄 CSS externo

Para usar um arquivo CSS separado:

* Criar um arquivo `style.css`
* Importar no HTML dentro do `<head>`:

`<link rel="stylesheet" href="style.css" />`

---

### 📐 Cascata do CSS

* O CSS é **cascateado** (aplicado de cima para baixo)
* Estilos mais específicos sobrescrevem os mais genéricos

---

## 🟡 JavaScript

JavaScript adiciona **comportamento e interatividade** à página.

Quando o navegador encontra JavaScript:

* Ele envia o código para um **motor JavaScript**
* No Google Chrome, esse motor é o **V8**

---

### ⚠️ Script bloqueante

* Quando o navegador encontra `<script>`, ele **pausa o carregamento da página**
* Funções como `alert()` são **bloqueantes**

Exemplo:

* `alert("Hello World")` → Exibe um pop-up

---

### 🌐 Objeto Window

O JavaScript no navegador tem acesso ao objeto global **Window**:

* `window.location.href` → URL atual
* `window.location.search` → Parâmetros da URL (após `?`)
* `window.history` → Histórico de navegação da aba

---

### 📄 Objeto Document (DOM)

O **Document** representa a página HTML carregada.

* Permite acessar e modificar elementos HTML
* Essa manipulação é chamada de **DOM (Document Object Model)**

Exemplo:

* `document.getElementById("inputExemplo")` → Seleciona um elemento pelo ID

---

### ✏️ Manipulação de elementos

* Atributos e valores podem ser lidos ou alterados
* Exemplo: alterar o valor de um input

`input.value = "Luan"`

---

### ⚡ Eventos

* Propriedades que começam com `on` são **eventos**
* Exemplo comum:

  * `onclick` → Disparado ao clicar

Exemplo:

* Um botão que executa JavaScript ao ser clicado

⚠️ Evite colocar muito código diretamente no HTML.

✔️ **Boa prática**: criar funções no JavaScript e chamá-las no evento.

---

## 🟠 HTML (continuação — mais tags e conceitos)

### 🧩 Estrutura semântica (HTML5)

Essas tags ajudam a **organizar melhor o conteúdo** e melhorar acessibilidade e SEO:

* `<header>` → Cabeçalho da página ou seção
* `<nav>` → Área de navegação (menus)
* `<main>` → Conteúdo principal da página
* `<section>` → Seção de conteúdo
* `<article>` → Conteúdo independente (post, card, notícia)
* `<aside>` → Conteúdo lateral
* `<footer>` → Rodapé

---

### ✍️ Outras tags de texto

* `<span>` → Elemento inline para pequenos trechos
* `<small>` → Texto menor
* `<mark>` → Texto marcado (highlight)
* `<code>` → Código em linha
* `<pre>` → Texto pré-formatado
* `<strong>` → Importância (semântica)
* `<em>` → Ênfase (semântica)

---

### 🧾 Formulários (básico)

* `<form>` → Formulário
* `<label>` → Rótulo de campo
* `<input type="text">` → Texto
* `<input type="password">` → Senha
* `<input type="email">` → Email
* `<input type="number">` → Número
* `<input type="checkbox">` → Caixa de seleção
* `<input type="radio">` → Seleção única
* `<textarea>` → Texto longo
* `<select><option>` → Lista suspensa
* `<button>` → Botão

Atributos comuns:

* `placeholder` → Texto de dica
* `required` → Campo obrigatório
* `readonly` → Somente leitura
* `name` → Nome do campo

---

## 🔵 CSS (continuação — mais conceitos)

### 📦 Box Model (muito importante)

Todo elemento é uma caixa composta por:

* `content` → Conteúdo
* `padding` → Espaço interno
* `border` → Borda
* `margin` → Espaço externo

Propriedade útil:

* `box-sizing: border-box;`

---

### 📏 Medidas CSS

* `px` → pixels (fixo)
* `%` → relativo ao elemento pai
* `vw` / `vh` → largura / altura da tela
* `em` → relativo ao elemento pai
* `rem` → relativo ao `html`

---

### 🖋️ Fontes e texto

* `font-family`
* `font-size`
* `font-weight`
* `text-align`
* `line-height`
* `text-decoration`

---

### 🎯 Display e posicionamento

* `display: block;`

* `display: inline;`

* `display: inline-block;`

* `display: none;`

* `position: static;`

* `position: relative;`

* `position: absolute;`

* `position: fixed;`

* `position: sticky;`

---

### 🧲 Flexbox (noção básica)

Usado para layout em linha ou coluna:

* `display: flex;`
* `flex-direction`
* `justify-content`
* `align-items`
* `gap`

---

### 🎨 Pseudo-classes

* `:hover` → ao passar o mouse
* `:active` → ao clicar
* `:focus` → ao focar
* `:first-child`
* `:last-child`

---

## 🟡 JavaScript (continuação — conceitos básicos)

### 🔤 Variáveis

* `var` → antiga (evitar)
* `let` → variável mutável
* `const` → constante

---

### 🔢 Tipos de dados

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `object`
* `array`

---

### 🧠 Estruturas básicas

* `if / else`
* `switch`
* `for`
* `while`
* `forEach`

---

### 🔧 Funções

* Função simples
* Função com parâmetros
* Função com retorno

---

### 📄 DOM (mais métodos úteis)

* `document.querySelector()`
* `document.querySelectorAll()`
* `element.innerText`
* `element.innerHTML`
* `element.classList.add()`
* `element.classList.remove()`
* `element.style`

---

### 🎯 Eventos comuns

* `click`
* `change`
* `input`
* `submit`
* `keydown`

---

## 🧠 Boas práticas iniciais

* Separar HTML, CSS e JS
* Evitar CSS inline
* Usar nomes claros para classes e IDs
* Manter o código organizado
* Comentar quando necessário

---

## ✅ Conclusão

Este resumo serve como **guia rápido de revisão**.

A ideia não é decorar tudo, mas **bater o olho e lembrar**:

* O que cada tecnologia faz
* Quais ferramentas existem
* Onde procurar quando precisar

Conforme o estudo avança, esse material pode crescer junto.