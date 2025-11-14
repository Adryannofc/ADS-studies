document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.getElementById('tipo-select');
    const selectSelected = customSelect.querySelector('.select-selected');
    const selectItems = customSelect.querySelector('.select-items');
    const tagsContainer = document.getElementById('tags-tipos');
    const geracoesSelect = document.getElementById('geracoes-select');
    const btnLimpar = document.querySelector('.btn-limpar');

    let selectedTypes = new Set(); // Usaremos um Set para armazenar tipos únicos

    // --- Lógica para o Select Customizado (Tipos de Pokémon) ---
    selectSelected.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique se propague para o document
        selectItems.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
        this.classList.toggle('focus');
    });

    selectItems.querySelectorAll('div').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();

            const typeValue = this.getAttribute('data-value');
            const typeColor = this.getAttribute('data-color');

            if (selectedTypes.has(typeValue)) {
                // Se já estiver selecionado, remove
                selectedTypes.delete(typeValue);
            } else {
                // Se não estiver selecionado, adiciona
                selectedTypes.add(typeValue);
            }
            
            updateTags(); // Atualiza as tags na interface
            // Não fecha o dropdown para permitir múltiplas seleções contínuas
        });
    });

    // Função para atualizar as tags exibidas
    function updateTags() {
        tagsContainer.innerHTML = ''; // Limpa as tags existentes

        if (selectedTypes.size === 0) {
            selectSelected.textContent = 'Selecione um ou mais tipos';
        } else {
            // Se houver tipos selecionados, o texto do select-selected pode ser vazio
            // ou mostrar uma contagem, mas não precisa ser os tipos
            selectSelected.textContent = 'Tipos selecionados (' + selectedTypes.size + ')';
        }

        selectedTypes.forEach(type => {
            const tag = document.createElement('div');
            tag.classList.add('tag');
            tag.setAttribute('data-type', type); // Adiciona o tipo como data-attribute
            tag.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--color-${type.toLowerCase()}`);
            // Ajusta a cor do texto para tags com fundo claro
            if (['Electric', 'Ice', 'Ground', 'Steel', 'Fairy', 'Normal'].includes(type)) {
                tag.style.color = '#333';
            }


            tag.innerHTML = `
                <span>${type}</span>
                <button class="remover-tag">&times;</button>
            `;
            tagsContainer.appendChild(tag);

            tag.querySelector('.remover-tag').addEventListener('click', (e) => {
                e.stopPropagation(); // Impede que o clique no 'x' afete a tag inteira
                selectedTypes.delete(type);
                updateTags(); // Re-renderiza as tags
            });
        });
    }

    // Fecha o dropdown quando clicar fora dele
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target) && !selectItems.classList.contains('select-hide')) {
            selectItems.classList.add('select-hide');
            selectSelected.classList.remove('select-arrow-active');
            selectSelected.classList.remove('focus');
        }
    });

    // --- Lógica para o Botão "Limpar" ---
    btnLimpar.addEventListener('click', () => {
        // Limpa os tipos selecionados
        selectedTypes.clear();
        updateTags(); // Atualiza a exibição das tags

        // Reseta o select de gerações
        geracoesSelect.value = ''; // Define para o valor da primeira option (placeholder)
        
        // Opcional: Aqui você faria uma chamada para recarregar os pokemons sem filtros, etc.
        console.log('Filtros limpos!');
    });

    // Inicializa as tags (caso haja algo predefinido, embora neste exemplo não haja)
    updateTags();
});