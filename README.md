# Web-scraping

## Projeto criado para obter preço de jogos em sites variados

Atualmente o scraper recebe: nome do jogo, url, preço e o nome do site por meio de uma rota POST e os adiciona no banco de dados (sqlite).

A aplicação funciona em um intervalo pré-definido que vai de 30 a 39 minutos. Essa oscilação de tempo foi implementada para evitar bloqueio em sites que buscam padrão de scraping.

Após "scrapar" o valor, a aplicação irá verificar qual o preço desejado (armazenado previamente no db) e caso esse valor seja igual ou menor ao que foi armazenado, o bot irá enviar um e-mail para o usuário previamente configurado uma screenshot do site.

<strong>Sites adicionados até o momento:</strong>
<ul>
  <li>Big Boy Games</li>
  <li>Amazon</li>
</ul>

<hr>

<strong>Futuras implementações:</strong>
<ul>
  <li>Adição de novos sites ao projeto</li>
  <li>Adicionar novas validações para não ser bloqueado em sites com maior restrição</li>
  <li>Trocar imagem do corpo do e-mail para anexo</li>
  <li>Melhorar estrutura do e-mail enviado</li>
  <li>Adiciona outra forma de alertar o usuário (telegram ?)</li>
</ul>
