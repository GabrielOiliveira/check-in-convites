🎟️ Check-in de Convites — Grupo Belmont

Sistema web desenvolvido para facilitar e agilizar o controle de entrada de convidados na Confraternização do Grupo Belmont.

A aplicação permite validar convites por QR Code ou pesquisar convidados pelo nome, registrar entradas e acompanhar os check-ins realizados em tempo real, oferecendo mais organização, segurança e praticidade para a equipe responsável pela portaria.

🚀 Funcionalidades
Leitura de QR Code: identificação e validação de convites através da câmera do dispositivo.
Busca de convidados: pesquisa rápida pelo nome do convidado ou titular do convite.
Validação de convites: identificação de convites válidos, inválidos ou já utilizados.
Controle de entrada: registro individual dos convidados que já realizaram o check-in.
Múltiplas portarias: identificação de diferentes pontos de entrada.
Sincronização de dados: integração com Google Sheets para compartilhar os registros entre portarias.
Modo offline: armazenamento local das entradas quando não houver conexão com a internet, com sincronização posterior quando disponível.
Exportação CSV: possibilidade de baixar os registros de entrada.
Interface responsiva: utilização em computadores, tablets e smartphones.
Aplicação instalável: suporte a recursos de Progressive Web App (PWA).
🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias web:

HTML5
CSS3
JavaScript
Google Sheets (integração para sincronização de dados)
Service Worker
Web App Manifest
LocalStorage
API de câmera e leitura de QR Code
📱 Como utilizar
Acesse o endereço disponibilizado para o evento.
Abra a aplicação pelo navegador, preferencialmente Google Chrome ou Safari.
Informe a senha de acesso da portaria.
Aguarde o carregamento da lista de convidados.
Utilize a câmera para ler o QR Code do convite ou pesquise pelo nome do convidado.
Confira as informações apresentadas.
Se o convite estiver válido, clique em Registrar entrada.
O sistema atualizará os registros de check-in.
🔄 Funcionamento offline

A aplicação possui armazenamento local para permitir que os registros de entrada continuem funcionando mesmo em situações de instabilidade na conexão com a internet.

Quando configurada a integração com a planilha Google, os registros pendentes são sincronizados automaticamente quando a conexão é restabelecida.

📂 Estrutura do projeto
text
check-in-convites/
│
├── index.html             # Aplicação principal
├── manifest.webmanifest   # Configurações do PWA
├── sw.js                  # Service Worker
├── apple-touch-icon.png   # Ícone para dispositivos Apple
├── icon-192.png           # Ícone da aplicação
├── icon-512.png           # Ícone em alta resolução
└── README.md              # Documentação do projeto

💻 Executando o projeto

O projeto utiliza tecnologias nativas da web e não necessita de instalação de dependências ou processo de build.

Para executar:

Faça o clone do repositório:
bash
git clone https://github.com/GabrielOiliveira/check-in-convites.git

Entre na pasta:
bash
cd check-in-convites

Execute a aplicação utilizando um servidor web local ou publique os arquivos em uma hospedagem com HTTPS.

Importante: para utilizar recursos como câmera e criptografia do navegador, acesse a aplicação por HTTPS ou localhost. Abrir o arquivo index.html diretamente pode impedir o funcionamento de alguns recursos.

🎯 Objetivo

Desenvolver uma solução simples, prática e eficiente para gerenciamento de convidados e controle de acesso em eventos, reduzindo processos manuais e proporcionando maior agilidade no atendimento da portaria.

👨‍💻 Desenvolvedor

Gabriel Oliveira

GitHub: @GabrielOiliveira

<p align="center">
Desenvolvido para facilitar a organização e o controle de acesso da Confraternização do Grupo Belmont.
</p>
