function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if(!campoPesquisa){
      section.innerHTML = "<p>Nada foi encontrado. Voce precisa digitar nome ou esporte.</p>"
      return ;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo, descricao, tag;
    titulo = descricao = tag = "";
    // Itera sobre os dados da pesquisa e gera o HTML para cada resultado
    for (let dado of dados) 
    {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tag = dado.tags.toLowerCase();
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa))//Linha para verificar se a palavra ta dentro do titulo
      {
        //Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_self">${dado.titulo}</a></h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a target="_blank" href="${dado.link}">
            Mais informações.
          </a>
        </div>
        `;
      }
    }
    if(!resultados){ //! --> Refere para JS se nao tiver nada, ou seja, vazio.
      resultados = "<p>Nada foi encontrado para "+campoPesquisa+"</p>"
    }
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
}