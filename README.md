
# Check-in de Convites

Sistema desenvolvido para realizar o controle de entrada de convidados na confraternização do Grupo Belmont.

A aplicação permite consultar convites, validar QR Codes e registrar a entrada dos convidados, facilitando o trabalho da equipe responsável pela portaria.

## Funcionalidades

- Leitura de convites por QR Code.
- Busca de convidados pelo nome.
- Validação de convites.
- Registro de check-in.
- Controle de entradas já realizadas.
- Suporte para múltiplas portarias.
- Sincronização de informações com Google Sheets.
- Armazenamento local para funcionamento offline.
- Exportação dos registros em CSV.
- Interface adaptada para celulares, tablets e computadores.
- Instalação como aplicativo (PWA).

## Tecnologias

- HTML
- CSS
- JavaScript
- Google Sheets
- LocalStorage
- Service Worker
- Progressive Web App (PWA)

## Como executar

Clone o repositório:

```bash
git clone https://github.com/GabrielOiliveira/check-in-convites.git
```

Entre na pasta do projeto:

```bash
cd check-in-convites
```

Abra o projeto utilizando um servidor local ou publique os arquivos em uma hospedagem com HTTPS.

**Observação:** o acesso por HTTPS ou localhost é necessário para utilizar recursos do navegador, como a câmera para leitura dos QR Codes.

## Funcionamento

Ao acessar o sistema, a equipe da portaria pode consultar os convidados através da leitura do QR Code ou pela busca por nome.

Após localizar o convite, o sistema verifica sua situação e permite registrar a entrada quando estiver disponível.

Os registros são armazenados localmente e podem ser sincronizados com o Google Sheets, permitindo o acompanhamento das entradas realizadas em diferentes portarias.

## Desenvolvedor

**Gabriel Oliveira**

[GitHub](https://github.com/GabrielOiliveira)
