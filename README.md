# Trybers-and-Dragons🚀
Projeto  desenvolvido durante formação do curso da Trybe
Projeto Trybers and Dragons realizado durante a formação acadêmica na Trybe com o objetivo de colocar em prática os conhecimentos adquiridos sobre POO e Clean Code com os princípios SOLID. O objetivo era criar classes, interfaces, types e utilizá-los para criar um sistema de um jogo RPG com dinâmicas de batalhas, evolução de personagem etc.
A aplicação foi desenvolvida com `Typescript` seguindo o paradigma Orientado a Objetos.

## `Monsters` 
A classe *Monster* implementa a interface SimpleFighter e possui os métodos *receiveDamage()*, que recebe a quantidade de dano por parâmetro e implementa a lógica de dano sofrido, atualizando seus pontos de vida, e *attack()*, que recebe um SimpleFighter por parâmetro e implementa a lógica de dano imposto ao inimigo.

## `Dragons` <>
A classe *Dragon* herda os métodos e atributos da class Monster e apenas implementa os pontos de vida do dragão, podendo ser passado manualmente, por parâmetro ou deixar o valor padrão de 999. 

## `Characters` <>
A classe *Character* implementa a interface Fighter, que também implementa a interface SimpleFighter. *Character* define como será a criação de um personagem do mundo RPG, possuindo nome, uma raça e um arquétipo, que podem ser passados por parâmetro ou não (caso não seja, será criado um mago, de raça élfica por padrão).

## `Archetypes` <>
A class *Archetype* possui originalmente 4 tipos, Mage, Necromancer, Ranger e Warrior, cada uma possui um especial específico e um tipo de energia.
Para Mage e Necromancer é consumido *mana*, enquanto para Ranger e Warrior, *stamina*.

## `Battles` <>
A classe Battles implementa a lógica de combate do RPG, podendo haver PVP (player vs player) e PVE (player vs environment).

## `Race` <>
A classe Race determina a que raça pertence o personagem, podendo ser Dwarf, Elf, Halfling ou Orc, cada um com atributos de vida já definifos por padrão.

## 🛠️ tecnologias e frameworks utilizados
* [Typescript](http://expressjs.com/);

## ✒️ Autores
Este projeto foi realizado por mim, [Patrick Gomes](https://www.linkedin.com/in/patrickgomesc/), porém foi proposto pela [Trybe](https://www.betrybe.com/), tendo sido fornecido pela instituição os testes implementados.

## 🎁 Honras

* Agradeço primeiramente a Deus;
* Agradeço à Instituição [Trybe](https://www.betrybe.com/) pelo estímulao diário a melhorar 🫂;
* Dediquei-me como sempre faço a este trabalho e espero que tenham gostado. A evolução é constante!
* Colossenses 3:23;

---
feito por [Patrick Gomes da Conceição](https://github.com/Patrickfromjesus);
