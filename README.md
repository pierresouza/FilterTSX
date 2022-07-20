# Map, Filter e Reduce

## repositório criado com o intuito de aprimorar habilidades com a função filter cuja tem o objetivo de filtrar um array de acordo com o parâmetro passado.

### após clonar o respositório, vá até seu terminal e rode o comando **YARN** ou **NPM INSTALL**

> caso queria visualizar o funcionamento de algum dos campos, efetue a seguinte alteração no .map :

```
{inputNome.map(({ nome, id, categoria, tamanho, cor }) => (
          <Item key={id}>
            <div>
              <strong>item: {nome}</strong>
              <p>categoria: {categoria}</p>
              <p>tamanho: {tamanho}</p>
              <p>cor: {cor}</p>
            </div>
          </Item>
        ))}
```

remova a variável **inputNome** e cole no lugar a variável **selectNome** ou **selectcor**, o estado já estará atrelado ao select, então após essa alteração, volte ao seu terminal e rode o comando **YARN DEV** e será possível visualizar o funcionamneto no localhost
