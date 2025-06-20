# ⭐ Desafio Técnico Lacrei Saúde – Desenvolvedor(a) Front-End (Next.js)

​

## ⭐ Objetivo

​
Sua missão será desenvolver duas páginas web interativas, com foco em acessibilidade, responsividade e impacto visual — sempre respeitando a identidade da Lacrei Saúde e nossa missão de garantir que **cada pessoa se sinta segura ao buscar cuidado**.

Este desafio também se conecta com os fluxos de Back-end e DevOps, para garantir que a entrega esteja pronta para ambientes reais de produção, refletindo um trabalho colaborativo e completo.
​

---
​
##  ⭐ O que esperamos de você — Os itens abaixo são obrigatórios:

1 - **Header e Footer com essencia acolhedora e inclusiva da Lacrei Saúde**
    
2 - **Três botões interativos**

3 - **Respeito ao nosso guia de estilo**
           
4 - **Responsividade impecável**

  5 - **Tecnologias obrigatórias**
  - **Next.js** e **TypeScript** para estrutura moderna e escalável.
  - **Styled-Components** para estilização modular, clara e reutilizável.

  6 - **Testes unitários**
  - Utilize **Jest** para testar pelo menos dois componentes do seu projeto.
  - Documente a execução dos testes no `README`.

  7 - **Deploy da aplicação**
  - Faça o deploy da aplicação (recomendamos Vercel)
  - Inclua o link de produção no `README do GitHub.`
  ​

  ## 📝 Documentação esperada (README)

- Instruções para rodar o projeto localmente
- Instruções para build e deploy
- Registro dos testes aplicados
- Proposta de **rollback simples** (ex: como restaurar uma versão anterior na plataforma de deploy)
- Comentários sobre as escolhas visuais e técnicas realizadas
- (Opcional) Simulação de integração com a API de Back-end usando mock ou JSON local

  
# 📝 Documentação


### Rodando o projeto localmente

Antes de tudo, você precisa clonar o repositório

```bash
  git clone https://github.com/henriquegoncalvessilva/desafio-lacrei-saude
```

Após isso, entre no diretório

```bash
  cd minha-pasta/desafio-tech-front-lacreisaude\front>
```

Instale todas as dependências. Esse passo é muito importante para o sucesso das demais etapas.

```bash
  npm install
```

Rode o projeto com o código abaixo

```bash
  npm run dev
```

### Rodar o servidor localmente(Opicional)

**Os dados inicialmente estão mockados. Porém, você pode usar o JSON SERVER para rodar um servidor local. Basta acessar o link: https://www.npmjs.com/package/json-server e seguir os passos. É bem simples.**

Já para acessar os dados no Front, você precisa usar hooks(ex: useEffect) junto com o Axios(biblioteca JavaScript, utilizada para fazer requisições HTTP). Para mais informações sobre, basta acessar a documentação do próprio Next - https://nextjs.org/docs/app/getting-started/fetching-data#with-the-fetch-api


### Deploy

Para o deploy, utilizei o Vercel devido a sua fácilidade de realizar tal ação. Segue abaixo o link do **deploy**

https://lacreisaude-desafio.vercel.app/

## Rollback

Para realizar um **rollback** na VERCEL, basta:

1 -  Acessar o painel da Vercel

2 - Ir na aba "Deployments"

3 - Ao acessar a lista de deploys anteriores, podemos fazer o rollback clicando nos três pontinhos do lado direito do deploy e posteriormente clicar em "Redeploy" e por fim, confirme o redeploy.

Obs: É importante que o projeto do Vercel, esteja conectado a conta do GitHub, caso contrário, não dá para fazer o rollback usando a Vercel.


## Testes unitários

Para rodar os testes unitários, basta executar o comando abaixo, e no fim do test é gerado o vitest-report.json, onde pode encontrar todos os registros dos testes.

```bash
  npm run test
```

Para o teste utilizei o Vitest, pois tive algumas dificuldades com o Jest. 

Foram testados **3 componentes**, que são fundamentais para o funcionamento do projeto: 

- **Componente de listagem** dos cards dos profissionais;
- **Componente Card**, que é responsável por exibir os dados dos profissionais;
- **Componente Accordion**, que é utilizado na seção de Ajuda do projeto;

Foram testados cenários desde a exibição das informações, quanto a NÃO exibição das informações que compõe esses componentes.


# Screenshots


Estrutura das pastas e arquivos.

![Estrutura do projeto](https://i.ibb.co/d0xf91Wb/Captura-de-tela-2025-06-20-160908.png)

Obs: Preferi por dividir uma pasta para componentes e uma pasta para componentes em geral(ui). A estrutura basicamente de cada pasta consistem em: 

- componente
    - style
    - arquivoteste(se for o caso)


## Layouts

As telas foram testadas usando o plugin(navegador) Reponsive Viewer e o inspector do navegador.

### Mobile

![Mobile](https://i.ibb.co/rKktWTSk/11.png) 

Link da imagem - https://i.ibb.co/rKktWTSk/11.png


### Tablet

 ![Tablet](https://i.ibb.co/HLQ2w3hP/22.png)

 Link da imagem - https://i.ibb.co/HLQ2w3hP/22.png


### Notebook - Desktop

 ![Notebook - Desktop](https://i.ibb.co/6cDD76G4/03.png)

Link da imagem - https://i.ibb.co/6cDD76G4/03.png






