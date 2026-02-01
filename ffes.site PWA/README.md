# FFES Exclusive | Sovereignty System v3.0

> **Plataforma Tática de Aceleração em Inglês - Teacher Leo Ramos**

Este repositório contém o código-fonte da PWA (Progressive Web App) FFES Exclusive. O sistema foi projetado sob a filosofia "No-Framework", utilizando HTML5, CSS3 e Vanilla JS puros para garantir performance máxima, soberania de código e funcionamento offline.

## 🛠 Tech Stack & Arquitetura

- **Core:** HTML5 Semântico, CSS3 (Glassmorphism UI), JavaScript ES6+.
- **PWA:** Service Workers para cacheamento agressivo e funcionamento 100% offline.
- **Armazenamento:** LocalStorage para persistência de dados (XP e progresso) sem backend.
- **Design Pattern:** Estrutura modular baseada em pastas numeradas (001-015) para escalabilidade vertical.

## 📂 Estrutura de Diretórios (Mapa Tático)

O sistema opera com um `index.html` central que distribui o fluxo para 15 submódulos independentes:

/ (Raiz)
│── index.html (Dashboard Principal - Command Center)
│── sw.js (Service Worker - Núcleo Offline)
│── manifest.json (Configuração de Instalabilidade)
│── style.css (Identidade Visual Global)
│── script.js (Lógica Global)
│
├── Pasta001/ (Estrutura Básica)
├── Pasta002/ (Estrutura Avançada & Condicionais)
├── Pasta003/ (Writing Lab)
├── Pasta004/ (Reading Zone)
├── Pasta005/ (Speaking Studio - Web Speech API)
├── Pasta006/ (Listening Station)
├── Pasta007/ (Quiz Rápido)
├── Pasta008/ (Múltipla Escolha)
├── Pasta009/ (Preencher Lacunas)
├── Pasta010/ (Caça-Erros)
├── Pasta011/ (Memory Game & Word Search)
├── Pasta012/ (Verbos Dinâmicos)
├── Pasta013/ (Pronomes Master)
├── Pasta014/ (Aulas Temáticas)
└── Pasta015/ (Ranking & XP System)

## 🚀 Instalação e Deploy

1. **Deploy:** Basta fazer upload desta estrutura raiz para qualquer host estático (Netlify, Vercel, GitHub Pages).
2. **Local:** Utilize um servidor local (Live Server) para testar o Service Worker (SWs exigem HTTPS ou localhost).

## 📱 Funcionalidades PWA

- **Installable:** O app pode ser instalado na Home Screen (Android/iOS).
- **Offline-First:** O sistema armazena automaticamente os exercícios visitados para estudo sem internet.
- **Low Latency:** Carregamento instantâneo devido à ausência de bibliotecas pesadas.

---

© 2026 FFES - Teacher Leo Ramos. All Rights Reserved.
