##  Integrantes

Arthur Brito da Silva | RM562085
Luiz Felipe Flosi dos Santos | RM563197
Pedro Henrique Brum Lopes | RM561780

## 📦 Descrição geral

Neste projeto, vocês irão criar uma página interativa com HTML, CSS e JavaScript simulando uma batalha entre um gorila e 100 humanos. O gorila pode atacar, se defender e recuperar energia. Os humanos agem automaticamente. A ideia é trabalhar **lógica de programação, eventos, manipulação de DOM e armazenamento com localStorage**, tudo de forma visual e funcional.

---

## ✅ Requisitos técnicos (10 questões x 10 pontos)

| Nº | Critério                                                                                                                                                     | Pontos |
|----|---------------------------------------------------------------------------------------------------------------|--------|
| 1  | **Interface HTML completa** com gorila, humanos e barra de status                                                    | 10     |
| 2  | **Evento de clique em botão** para o gorila atacar (com animação ou efeito visual simples)               | 10     |
| 3  | **Atualização de valores no DOM** como vida, humanos restantes, ataques feitos                              | 10     |
| 4  | **Uso de funções** para modularizar ações: atacar, defender, curar                                                      | 10     |
| 5  | **Uso de array** para representar os 100 humanos (ex: `const humanos = []`)                                      | 10     |
| 6  | **Loop** para reduzir humanos vivos a cada ataque e atualizar a interface                                           | 10     |
| 7  | **Criação de logs de batalha** (mensagens mostradas dinamicamente no HTML)                                | 10     |
| 8  | **Salvar estado da partida com `localStorage`** (quantos humanos restam, vida do gorila etc)            | 10     |
| 9  | **Validação de fim de jogo** (gorila derrotado ou todos os humanos eliminados)                               | 10     |
| 10 | **Estilização com CSS externa**: interface clara, responsiva e temática (gorila, selva, humanos etc)    | 10     |

---

## 📁 Estrutura sugerida
gorilla-bass/
├── index.html
├── README.md
├── /css
│   └── style.css
├── /js
│   └── script.js
├── /assets
│   ├── gorila.png
│   ├── humano.png
│   └── som-ataque.mp3

---

## 🔧 Tecnologias obrigatórias

- `HTML5`
- `CSS3` (externo)
- `JavaScript puro` (externo) (sem frameworks)
- `localStorage` para salvar progresso
- `Manipulação do DOM` com  as principais funções de document, etc.

---

## 📝 Regras de entrega

- A entrega deve ser realizada no formato de um arquivo .zip
- O repositório deve conter no mínimo **15 commits**, com mensagens significativas
- Todos os alunos devem participar ativamente
- O projeto deve funcionar sem dependências externas
- A pontuação será aplicada com base nas **10 questões técnicas**
- Projetos com partes copiadas ou sem funcionalidade prática serão desclassificados

---

## 💡 Dicas

- Usem **`setInterval()` ou `setTimeout()`** para fazer os humanos reagirem automaticamente
- Usem **classes CSS** para mostrar visualmente quem está vivo ou derrotado
- Guardem o histórico das ações do gorila em uma `<div id="log">` com `.innerHTML += ...`
- Dividam bem o trabalho: 1 faz o HTML, outro o CSS, dois no JS (mas todos devem tocar em todos)

---

## 📘 Avaliação (Resumo)

| Critério técnico                                       | Peso |
|--------------------------------------------|-------|
| Manipulação de DOM                            | 30%  |
| Lógica e estrutura JS                              | 30%  |
| Interface HTML/CSS e experiência         | 20%  |
| Uso correto de localStorage                   | 10%  |
| Organização e trabalho em grupo         | 10%  |
| Entregas atrasadas terão desconto  de  | -20% |


---