//MODEL
// Responsável por gerenciar os dados (a lista de produtos)
const Model = {
    produtos: [],
    proximoId: 1,

    adicionarProduto(nome, preco) {
        const novoProduto = {
            id: this.proximoId++,
            nome: nome,
            preco: parseFloat(preco)
        };
        this.produtos.push(novoProduto);
        console.log("Model: Produto adicionado.", this.produtos);
    },

    obterProdutos() {
        return this.produtos;
    }
};


//VIEW
// Responsável por exibir os dados na interface do usuário (HTML)
const View = {
    listaProdutosDiv: document.getElementById('lista-produtos'),

    renderizarProdutos(produtos) {
        // Limpa a lista atual para evitar duplicatas
        this.listaProdutosDiv.innerHTML = '';

        if (produtos.length === 0) {
            this.listaProdutosDiv.innerHTML = '<p>Nenhum produto cadastrado.</p>';
            return;
        }

        // Cria e adiciona o HTML para cada produto
        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto';
            produtoDiv.innerHTML = `
                <strong>${produto.nome}</strong>
                <span>Preço: R$ ${produto.preco.toFixed(2)}</span>
            `;
            this.listaProdutosDiv.appendChild(produtoDiv);
        });
        console.log("View: Produtos renderizados na tela.");
    }
};


//CONTROLLER
const Controller = {
    form: document.getElementById('form-produto'),
    inputNome: document.getElementById('input-nome-produto'),
    inputPreco: document.getElementById('input-preco-produto'),

    iniciar() {
        // Adiciona o "ouvinte" de evento ao formulário
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que a página recarregue

            const nome = this.inputNome.value;
            const preco = this.inputPreco.value;

            // Validação simples
            if (nome && preco) {
                // 1. Envia os dados para o Model
                Model.adicionarProduto(nome, preco);

                // 2. Pede ao Model os dados atualizados
                const produtosAtualizados = Model.obterProdutos();

                // 3. Envia os dados atualizados para a View renderizar
                View.renderizarProdutos(produtosAtualizados);

                // Limpa o formulário
                this.form.reset();
            }
        });

        // Renderiza a lista inicial (vazia)
        View.renderizarProdutos(Model.obterProdutos());
    }
};

// Inicia a aplicação
Controller.iniciar();