//MODEL
// Responsável por armazenar e manipular os dados (as tarefas)
let tarefas = ['Estudar JavaScript', 'Fazer o exercício de MVC'];
// Função que pertence ao Model
function adicionarTarefa(novaTarefa) {
  if (novaTarefa) {
    tarefas.push(novaTarefa);
    console.log("Model: Tarefa adicionada com sucesso.");
  }
}

//VIEW
// Responsável por exibir os dados na tela (renderizar o HTML)
function renderizarTarefas() {
  const listaUl = document.getElementById('lista-de-tarefas');
  // Limpa a lista antiga para não duplicar itens
  listaUl.innerHTML = ''; 
  // Cria um elemento <li> para cada tarefa no array do Model
  for (let i = 0; i < tarefas.length; i++) {
    const itemLi = document.createElement('li');
    itemLi.textContent = tarefas[i];
    listaUl.appendChild(itemLi);
  }
  console.log("View: Tarefas exibidas/atualizadas na tela.");
}

//CONTROLLER
// Responsável por conectar o usuário (eventos) com o Model e a View
function configurarAdicaoDeTarefa() {
  const botaoAdicionar = document.getElementById('botao-adicionar');
  const inputTarefa = document.getElementById('input-tarefa');

  botaoAdicionar.addEventListener('click', function() {
    console.log("Controller: Usuário clicou no botão Adicionar.");
    
    // 1. Pega o dado da View (o que o usuário digitou)
    const textoDaTarefa = inputTarefa.value;

    // 2. Manda o dado para o Model processar
    adicionarTarefa(textoDaTarefa);

    // 3. Pede para a View se atualizar com os novos dados
    renderizarTarefas();

    // 4. Limpa o input para a próxima tarefa
    inputTarefa.value = '';
  });
}

// Inicia o sistema
configurarAdicaoDeTarefa();
renderizarTarefas(); // Mostra as tarefas iniciais