describe('Teste de Carrinho de Compras', () => {
    let produtos = []; // Array para armazenar os nomes dos produtos

    

    // Função que adiciona um produto ao carrinho.
    const AdicionarProdutoAoCarrinho = (index) => {
        cy.get('.productinfo.text-center').eq(index).within(() => {
            cy.get('p').invoke('text').then((texto) => {
                // Armazenar nome do produto
                produtos.push(texto.trim());
                // Log do produto sendo adicionado
                cy.log(`Adicionando produto: ${texto.trim()}`); 
                cy.contains('Add to cart').click();
            });
        });

        // Espera o modal aparecer e o botão ser clicável
        cy.get('.modal-footer').should('be.visible'); // Verifica se o modal está visível
        cy.get('.modal-footer > .btn').click(); // Clica no botão de fechar o modal
        cy.log('Produto adicionado ao carrinho e pop-up fechado.');
    };

    beforeEach(() => {
        // Navega até a página para os testes.
        cy.visit('https://automationexercise.com/');
        cy.log('Navegando para a página principal.');
    });
    
    it('Teste de Adição de produtos ao Carrinho', () => {
        // Navega até a página para os testes.
        cy.visit('https://automationexercise.com/');
        cy.log('Navegando para a página principal.');

        cy.log('Adicionando Produtos...');
        AdicionarProdutoAoCarrinho(1);
        AdicionarProdutoAoCarrinho(3);
        AdicionarProdutoAoCarrinho(5);

        // Clica em Cart para visualizar produtos no carrinho.
        cy.log('Navegando para o carrinho.');
        cy.get(':nth-child(3) > a').contains('Cart').click();

        // Verifica se a URL está correta
        cy.url().should('include', 'view_cart');

        // Segunda verificação, desta vez, verificando pela barra de navegação
        cy.contains('Cart').should('be.visible');

      // Validar que os produtos estão no carrinho
      produtos.forEach((produto) => {
        cy.contains(produto).should('be.visible').then(() => {
            cy.log(`O produto "${produto}" está visível no carrinho.`); 
        });
    });

    
        
    });

    it.only('Preenchendo Formulário', () => {
         
    
         cy.contains('Contact us').should('be.visible').click();
        
        
         cy.get('[data-qa="name"]').type('Hello World!');
         cy.get('[data-qa="email"]').type('email@teste.com');
         cy.get('[data-qa="subject"]').type('Assunto Teste');
         cy.get('[data-qa="message"]').type('Teste de preenchimento de formulário. - Teste de preenchimento de formulário.');

         cy.get('[data-qa="submit-button"]').click();

         cy.get('#form-section > .btn').click();

    });
});
