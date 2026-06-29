/* ===================================
   SISTEMA DE CADASTRO DE FILMES
   Arquivo: script.js
   
   Este arquivo contém toda a lógica JavaScript
   para gerenciar o cadastro de filmes.
   =================================== */

/* ===================================
   VARIÁVEIS GLOBAIS
   =================================== */

// Array que armazena todos os filmes cadastrados
// Cada filme é um objeto com: id, nome, genero, ano
let filmes = [];

// Referência ao elemento de entrada do nome do filme
const inputNome = document.getElementById("nome");

// Referência ao elemento de entrada do gênero
const inputGenero = document.getElementById("genero");

// Referência ao elemento de entrada do ano de lançamento
const inputAno = document.getElementById("ano");

// Referência ao botão que dispara o cadastro
const botaoCadastrar = document.getElementById("botaoCadastrar");

// Referência ao container onde os filmes serão exibidos
const listaFilmes = document.getElementById("listaFilmes");

// Referência ao elemento que exibe mensagens de validação
const mensagemValidacao = document.getElementById("mensagemValidacao");

// Referência ao elemento que mostra o contador de filmes
const contador = document.getElementById("contador");

/* ===================================
   INICIALIZAÇÃO - EVENT LISTENERS
   =================================== */

// Adiciona um ouvinte de evento ao botão de cadastrar
// Quando o usuário clica, executa a função cadastrarFilme()
botaoCadastrar.addEventListener("click", function() {
    cadastrarFilme();
});

// Adiciona um ouvinte para a tecla Enter no campo de ano
// Permite cadastrar filme ao pressionar Enter
inputAno.addEventListener("keyup", function(evento) {
    // keyCode 13 representa a tecla Enter
    if (evento.keyCode === 13) {
        cadastrarFilme();
    }
});

/* ===================================
   FUNÇÃO: CADASTRAR FILME
   
   O que faz:
   - Captura valores dos campos de entrada
   - Valida os dados (verifica se estão preenchidos)
   - Cria um objeto filme
   - Adiciona ao array de filmes
   - Atualiza a tela
   =================================== */

function cadastrarFilme() {
    // Captura o valor do campo de nome e remove espaços
    // trim() remove espaços em branco no início e fim
    const nome = inputNome.value.trim();

    // Captura o valor do campo de gênero
    const genero = inputGenero.value.trim();

    // Captura o valor do campo de ano
    const ano = inputAno.value.trim();

    /* VALIDAÇÃO 1: Verifica se todos os campos foram preenchidos */
    if (nome === "" || genero === "" || ano === "") {
        // Exibe mensagem de erro usando a função exibirMensagem()
        exibirMensagem("Preencha todos os campos!", false);
        // A função return interrompe a execução do código
        return;
    }

    /* VALIDAÇÃO 2: Verifica se o ano é válido */
    // Converte a string para número e valida o intervalo
    if (ano < 1900 || ano > 2100) {
        exibirMensagem("Digite um ano válido (1900-2100)!", false);
        return;
    }

    /* CRIAR OBJETO FILME */
    // Cria um novo objeto com os dados do filme
    const filme = {
        // ID único: Date.now() gera um número baseado no horário atual
        // Garante que cada filme tenha um identificador único
        id: Date.now(),
        
        // Nome do filme capturado do input
        nome: nome,
        
        // Gênero do filme capturado do input
        genero: genero,
        
        // Ano de lançamento capturado do input
        ano: ano
    };

    /* ADICIONAR FILME AO ARRAY */
    // push() adiciona um elemento no final do array
    filmes.push(filme);

    /* ATUALIZAR INTERFACE */
    // Exibe mensagem de sucesso
    exibirMensagem("Filme cadastrado com sucesso! 🎉", true);

    // Limpa os campos do formulário para novo cadastro
    limparFormulario();

    // Atualiza a exibição da lista de filmes na página
    atualizarListaFilmes();

    // Atualiza o número do contador
    atualizarContador();
}

/* ===================================
   FUNÇÃO: EXCLUIR FILME
   
   Parâmetro:
   - id: identificador único do filme a ser removido
   
   O que faz:
   - Encontra o filme no array
   - Remove do array
   - Atualiza a tela
   =================================== */

function excluirFilme(id) {
    // findIndex() procura no array o elemento que atender a condição
    // Retorna o índice (posição) ou -1 se não encontrar
    const indice = filmes.findIndex(function(filme) {
        // Compara o id do filme com o id buscado
        return filme.id === id;
    });

    // Verifica se o filme foi encontrado (índice !== -1)
    if (indice !== -1) {
        // splice() remove elementos do array
        // O primeiro parâmetro é o índice onde começar
        // O segundo parâmetro é quantos elementos remover
        filmes.splice(indice, 1);

        // Atualiza a exibição dos filmes
        atualizarListaFilmes();

        // Atualiza o contador
        atualizarContador();
    }
}

/* ===================================
   FUNÇÃO: ATUALIZAR LISTA DE FILMES
   
   O que faz:
   - Limpa o container de filmes
   - Verifica se há filmes
   - Se vazio: exibe mensagem
   - Se tem filmes: cria um card para cada filme
   =================================== */

function atualizarListaFilmes() {
    // innerHTML = "" limpa todo o conteúdo do elemento
    listaFilmes.innerHTML = "";

    /* VERIFICAÇÃO: Lista está vazia? */
    if (filmes.length === 0) {
        // Cria um novo elemento div
        const emptyState = document.createElement("div");

        // Adiciona a classe CSS "empty-state" para estilização
        emptyState.classList.add("empty-state");

        // Define o conteúdo HTML do elemento vazio
        emptyState.innerHTML = `
            <div class="emoji">🍿</div>
            <p>Nenhum filme cadastrado ainda. Comece adicionando seus filmes favoritos!</p>
        `;

        // Adiciona o elemento ao container
        listaFilmes.appendChild(emptyState);

        // Para a execução da função
        return;
    }

    /* CRIAR CARD PARA CADA FILME */
    // forEach() percorre cada elemento do array
    filmes.forEach(function(filme) {
        // Chama a função que cria o card visual
        criarCardFilme(filme);
    });
}

/* ===================================
   FUNÇÃO: CRIAR CARD DO FILME
   
   Parâmetro:
   - filme: objeto com os dados do filme
   
   O que faz:
   - Cria um novo elemento div
   - Adiciona classe CSS
   - Define o conteúdo HTML com dados do filme
   - Adiciona ao container
   =================================== */

function criarCardFilme(filme) {
    // Cria um novo elemento div
    // Este será o "card" visual do filme
    const card = document.createElement("div");

    // Adiciona a classe CSS "filme"
    // classList.add() adiciona uma classe de estilo
    card.classList.add("filme");

    /* DEFINIR CONTEÚDO HTML DO CARD */
    // innerHTML permite adicionar conteúdo HTML como string
    // Template literals (`) permitem quebra de linha e inserção de variáveis
    card.innerHTML = `
        <!-- Título do filme com ícone de filme -->
        <h3>🎬 ${filme.nome}</h3>

        <!-- Container com informações adicionais -->
        <div class="filme-info">
            <!-- Linha com gênero -->
            <div class="info-row">
                <span>🎭</span>
                <strong>${filme.genero}</strong>
            </div>

            <!-- Linha com ano -->
            <div class="info-row">
                <span>📅</span>
                <strong>${filme.ano}</strong>
            </div>
        </div>

        <!-- Botão para excluir o filme -->
        <!-- onclick chama a função excluirFilme passando o id do filme -->
        <button class="btn-excluir" onclick="excluirFilme(${filme.id})">
            🗑️ Excluir
        </button>
    `;

    /* ADICIONAR CARD AO CONTAINER */
    // appendChild() adiciona um elemento filho ao final
    listaFilmes.appendChild(card);
}

/* ===================================
   FUNÇÃO: ATUALIZAR CONTADOR
   
   O que faz:
   - Define o texto do contador como o total de filmes
   - Chamada toda vez que um filme é adicionado ou removido
   =================================== */

function atualizarContador() {
    // textContent define o texto do elemento
    // filmes.length retorna a quantidade de filmes no array
    contador.textContent = filmes.length;
}

/* ===================================
   FUNÇÃO: LIMPAR FORMULÁRIO
   
   O que faz:
   - Limpa todos os campos de entrada
   - Coloca o foco no primeiro campo
   =================================== */

function limparFormulario() {
    // Define o valor do input de nome como vazio
    inputNome.value = "";

    // Define o valor do input de gênero como vazio
    inputGenero.value = "";

    // Define o valor do input de ano como vazio
    inputAno.value = "";

    // focus() coloca o cursor no campo
    // Facilita o usuário adicionar outro filme
    inputNome.focus();
}

/* ===================================
   FUNÇÃO: EXIBIR MENSAGEM
   
   Parâmetros:
   - texto: mensagem a ser exibida
   - sucesso: true para mensagem de sucesso, false para erro
   
   O que faz:
   - Cria um elemento com a mensagem
   - Aplica estilo apropriado
   - Remove automaticamente após 4 segundos
   =================================== */

function exibirMensagem(texto, sucesso) {
    // Limpa mensagens anteriores
    mensagemValidacao.innerHTML = "";

    // Cria um novo elemento div para a mensagem
    const mensagem = document.createElement("div");

    // Adiciona a classe base "validation-message"
    mensagem.classList.add("validation-message");

    /* APLICAR ESTILO DE SUCESSO OU ERRO */
    if (sucesso) {
        // Se for sucesso, adiciona classe "success"
        // classList.add() adiciona uma classe CSS
        mensagem.classList.add("success");
    }

    // Define o texto da mensagem
    // textContent define o conteúdo de texto (seguro)
    mensagem.textContent = texto;

    // Adiciona a mensagem ao container
    mensagemValidacao.appendChild(mensagem);

    /* REMOVER MENSAGEM AUTOMATICAMENTE */
    // setTimeout() executa código após um tempo (em milissegundos)
    // 4000 = 4 segundos
    setTimeout(function() {
        // Verifica se a mensagem ainda existe na página
        // parentNode verifica se o elemento tem um pai
        if (mensagem.parentNode) {
            // remove() remove o elemento do DOM
            mensagem.remove();
        }
    }, 4000);
}

/* ===================================
   FIM DO ARQUIVO
   =================================== */
