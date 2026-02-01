# FFES Exclusive Platform - Sovereignty System v2.1

Esta é a plataforma de aceleração em inglês FFES, desenvolvida como uma PWA (Progressive Web App) para funcionar em dispositivos móveis e desktops, inclusive offline.

## 📂 Estrutura de Arquivos

Para que o sistema funcione corretamente, organize os arquivos da seguinte maneira:

/ (Raiz)
│── index.html (Painel Principal atualizado)
│── style.css (Estilos globais Glassmorphism)
│── script.js (Scripts globais)
│── sw.js (Service Worker para PWA/Offline)
│── manifest.json (Configuração de instalação App)
│── logo novo grande.webp
│── Teacher-Leo-Ramos.webp
│
├── Pasta002/ (Módulo Gramática & Estrutura)
│ ├── presentsimple.html
│ ├── presentcontinuous.html
│ ├── pastsimple.html
│ ├── pastcontinuous.html
│ ├── futuresimple.html
│ ├── futurecontinuous.html
│ ├── futureperfect.html
│ ├── futureperfectcont.html
│ ├── condicional0.html
│ ├── condicional1.html
│ ├── condicional2.html
│ ├── condicional3.html
│ ├── condicionalwould1.html
│ ├── condicionalwould2.html
│ ├── condicionalwould3.html
│ ├── condicionalwould4.html
│ ├── modal01.html
│ ├── modal02.html
│ ├── modal03.html
│ └── auxiliares3.html
│
├── Pasta003/ (Writing Lab)
│ └── writing001.html
│
└── Pasta004/ (Reading Zone)
└── reading001.html

## 🚀 Como Rodar

1. **Localmente:** Utilize a extensão "Live Server" do VS Code na pasta raiz.
2. **Hospedagem:** Faça upload de toda a estrutura para o Netlify, Vercel ou GitHub Pages.

## 📱 PWA (Instalação)

O arquivo `sw.js` e `manifest.json` permitem que o site seja instalado como um aplicativo.

- Certifique-se de servir o site via **HTTPS** (ou localhost) para que o Service Worker funcione.
