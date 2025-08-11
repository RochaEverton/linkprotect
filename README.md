# LinkProtect

O **LinkProtect** é uma aplicação descentralizada (dApp) construída com **Next.js** no front-end e integrada a um **smart contract** na Binance Smart Chain Testnet.  
Seu objetivo é permitir a criação de links protegidos por pagamento on-chain. Somente após o pagamento o usuário pode acessar o conteúdo do link.

---

## 🎥 Demonstração

*(Adicione aqui um GIF mostrando o fluxo de criar link, pagar e acessar o conteúdo)*

![Demonstração do LinkProtect](/demo.gif)

---

## 📸 Capturas de Tela

**Tela inicial - Criar link protegido**  
![Tela inicial](/tela-criar-link.png)

**Página de pagamento do link**  
![Página de pagamento](/tela-pagamento.png)

---

## 🚀 Funcionalidades

- Criar links protegidos com uma taxa definida (em BNB)
- Armazenar o link no smart contract
- Exigir pagamento via carteira Web3 para liberar acesso
- Integração com MetaMask para assinatura de transações
- Redirecionamento automático após pagamento confirmado

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React para o front-end
- **[Web3.js](https://web3js.readthedocs.io/)** — Biblioteca para interação com o smart contract
- **[object-hash](https://www.npmjs.com/package/object-hash)** — Para gerar identificadores únicos (`linkId`) a partir da URL
- **Binance Smart Chain Testnet** — Rede blockchain onde o contrato está implantado
- **MetaMask** — Extensão de carteira para conexão e execução de transações

---

## 📂 Estrutura do Projeto

```
src/
 ├── app/
 │   ├── page.js            # Página principal para criar links
 │   ├── [linkId]/page.js   # Página dinâmica para pagamento/acesso do link
 │
 ├── services/
 │   ├── Web3Service.js     # Conexão com o contrato e funções addLink, payLink, etc.
 │   └── ABI.json           # ABI do contrato inteligente
```

---

## 🔗 Fluxo de Uso

1. **Criar link protegido**  
   - Informe a URL de destino e a taxa (em BNB).  
   - A taxa mínima é definida pelo contrato e impede criação abaixo do limite.
   - O sistema gera um `linkId` único e registra no smart contract via `addLink`.

2. **Compartilhar link**  
   - O link gerado segue o formato:  
     ```
     https://linkprotect-lime.vercel.app/{linkId}
     ```

3. **Pagamento e acesso**  
   - Quem acessar um link protegido verá o valor a pagar (`payLink`) e deverá concluir a transação via carteira.  
   - Após o pagamento confirmado on-chain, ocorre o redirecionamento para a URL protegida.

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` (para desenvolvimento) ou defina no painel da Vercel:

```
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_SITE_URL=https://linkprotect-lime.vercel.app
```

> **Observação:** `NEXT_PUBLIC_SITE_URL` é opcional e só usada como fallback para montar URLs.

---

## 📦 Instalação e Execução Local

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/linkprotect.git
cd linkprotect

# 2. Instalar dependências
npm install
# ou
yarn install

# 3. Rodar em modo desenvolvimento
npm run dev
# Acesse: http://localhost:3000
```

---

## 🚀 Deploy no Vercel

1. Suba o projeto no GitHub/GitLab/Bitbucket.
2. No [Vercel](https://vercel.com), clique em **New Project** e importe o repositório.
3. Defina as variáveis de ambiente necessárias.
4. Deploy automático — a aplicação estará acessível no domínio gerado pelo Vercel.

---

## 📜 Licença

Este projeto está licenciado sob a **Licença MIT** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
**Autor:** Everton Luis Rocha
