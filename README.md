# LL-Burger - Sistema de Gerenciamento de Pedidos

## Sobre o projeto
O LL-Burger é uma aplicação web desenvolvida para gerenciar o menu e os pedidos de uma lanchonete fictícia. Os clientes podem visualizar o cardápio com detalhes dos itens, adicionar produtos ao carrinho, revisar os pedidos e enviar uma solicitação via WhatsApp com endereço e itens selecionados.

A aplicação utiliza HTML, CSS e JavaScript para a interface do usuário, além de bibliotecas externas para funcionalidades avançadas.

---

## Funcionalidades da aplicação

### Visão geral das funcionalidades:
1. **Exibição de Cardápio:**
   - O menu apresenta hambúrgueres, acompanhamentos e bebidas com imagens, descrições detalhadas e preços.
   - Interface intuitiva com imagens e textos organizados.

2. **Gerenciamento do Carrinho de Compras:**
   - Adicionar itens ao carrinho diretamente do menu.
   - Atualização em tempo real do total de itens e do valor total.
   - Opção para remover itens do carrinho ou ajustar a quantidade.

3. **Envio de Pedidos:**
   - Finalização do pedido com envio automático para o WhatsApp do restaurante, incluindo endereço de entrega e itens selecionados.

4. **Verificação de Funcionamento do Restaurante:**
   - O sistema verifica se o restaurante está aberto com base no horário configurado (18h às 22h).
   - Mensagens de aviso são exibidas caso o restaurante esteja fechado.

5. **Interface Responsiva:**
   - Design adaptado para diferentes tamanhos de tela, garantindo acessibilidade em dispositivos móveis e desktops.

---

## Uso

### Pré-requisitos
- Navegador atualizado com suporte a ES6+.
- Conexão com a internet para carregar bibliotecas externas.

### Configuração
1. **Estrutura de Arquivos:**
   - Certifique-se de que as imagens estão na pasta `./assets/images/`.
   - Atualize o arquivo HTML se necessário, incluindo caminhos corretos para imagens e fontes.

2. **Ajuste de Configuração:**
   - Substitua o número de telefone no código (variável `telefone`) para direcionar os pedidos ao WhatsApp correto.

### Execução
1. Abra o arquivo `index.html` no navegador para visualizar o sistema.
2. Navegue pelo menu, adicione itens ao carrinho e finalize seu pedido.

---

## Visualização

Aqui está um exemplo do funcionamento do projeto:

![Visualização do menu](./assets/screenshots/menu-preview.jpg)

---

## Ferramentas utilizadas

Para o desenvolvimento do LL-Burger, foram utilizadas as seguintes ferramentas:
- **HTML5:** Estruturação da página.
- **CSS3 e Tailwind CSS:** Estilização da interface.
- **JavaScript:** Manipulação da lógica do carrinho e integração com o WhatsApp.
- **Bibliotecas externas:**
  - Font Awesome (ícones).
  - Toastify (notificações).
- **Editor de código:** VSCode.

---

## Contribuição

Contribuições são bem-vindas! Caso queira sugerir melhorias ou reportar problemas, envie um Pull Request ou crie uma Issue no repositório.

---

## Licença

Este projeto é distribuído sob a licença MIT.
