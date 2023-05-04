![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Web-scraping Typescript

<strong> Projeto criado para obter preço de jogos em sites variados </strong>

Atualmente o scraper recebe: nome do jogo, url, preço e o nome do site por meio de uma rota POST e os adiciona no banco de dados (sqlite).

A aplicação funciona em um intervalo de 30 a 40 minutos (utilizando Math.random). Essa oscilação de tempo foi implementada para evitar bloqueio em sites que buscam padrão de scraping.

Após "scrapar" o valor, a aplicação irá verificar qual o preço desejado (armazenado previamente no db) e caso esse valor seja igual ou menor ao que foi armazenado, o bot irá enviar um e-mail para o usuário previamente configurado uma screenshot do site.

<strong>Sites adicionados até o momento:</strong>
<ul>
  <li>Big Boy Games</li>
  <li>Amazon</li>
</ul>


## Instruções de uso

Para utilizar essa aplicação, será necessário clonar este repositório e executar o comando <b>"npm install"</b> para baixar todas as dependências do projeto.
<ul>
  <li>Subir o servidor: <b>"npm run dev"</b></li>
</ul
