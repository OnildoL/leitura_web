# GERÊNCIA
**Requisitos funcionais**
- []

**Requisitos não funcionais**
- []

**Regra de negócio**
- []
---

# CPD
**Requisitos funcionais**
- *Notas*
- [] Deve ser possível **lançar entradas de notas por planilha** (.xlsx);
- [] Deve ser possível **inserir novas notas por planilha** (.xlsx);
- [] Deve ser possível **cadastrar novas notas**;
- [] Deve ser possível **listar todas as notas fiscais**;
- [] Deve ser possível **consultar por**: **nota fiscal e fornecedor**;
- [] Deve ser possível fazer **edições nos seguintes campos** de cada nota fiscal: **Recebimento, Etiqueta, Chegou, Entrada, Frete, Situação, Observações**;
- *Produtos*
- [] Deve ser possível **capturar produtos** das notas fiscais por planilha (.csv) ou (.xlsx);
- [] Deve ser possível **listar** todos os produtos por nota fiscal;
- [] Deve ser possível **conferir o cadastro** de todos os itens de uma nota fiscal;
- *Pedidos*
- [] Deve ser possível **inserir pedidos a parte por planilha** (.xlsx);
- *Conferência*
- [] Deve ser possível **inserir pedidos na hora de fazer uma conferência**;
- [] Deve ser possível **remover a conferência de uma nota fiscal** do banco de dados;
- [] Deve ser possível **remover uma conferência** do banco de dados;
- *Faltantes*
- [] Deve ser possível **inserir manualmente produtos em faltantes**;
- [] Deve ser possível **remover as faltantes de uma nota fiscal** do banco de dados;
- [] Deve ser possível **remover as faltantes** do banco de dados;
- *Divergências*
- [] Deve ser possível **listar divergências junto com listagem dos produtos** na mesma linha;
- *Relatórios*
- [] Deve ser possível gerar um **relatório de todas as notas fiscais**;
- [] Deve ser possível gerar um **relatório de todos os produtos** de uma nota fiscal;
- [] Deve ser possível gerar um **relatório de todas as divergências** de uma nota fiscal;

**Requisitos não funcionais**
- *Notas*
- *Produtos*
- *Pedidos*
- [] Os pedidos com **mais de três meses** deverão ser **excluídos** do banco de dados;
- *Conferência*
- [] Conferência dos **produtos por código de barras**, comparando quantidade de cada código com quantidade da nota fiscal;
- [] Conferência dos **produtos por nome** caso o código não seja encontrado, comparando quantidade de cada código com quantidade da nota fiscal;
- [] Produtos **a mais** devem ser consultados no banco de dados na tabela de **faltantes e abatidos**;
- [] Produtos **a mais** devem ser classificados como "divergência" caso não seja encontrado em nenhuma das opções acima;
- [] Produtos **a menos** devem ser classificados como "faltante" caso não seja encontrado na nota fiscal;
- [] Produtos **não encontrados** no pedido devem ser classificaos como "sem pedido";
- *Faltantes*
- *Divergências*
- *Relatórios*

**Regra de negócio**
- *Notas*
- [] Não deve ser possível **lançar entradas de númerações que ja estejam preenchidas**;
- [] Não deve ser possível **inserir novas notas com mesma númeração e mesmo fornecedor** através de planilha;
- [] Não deve ser possível **cadastrar notas com mesma númeração e mesmo fornecedor** através se inserção manual;
- [] Não deve ser possível **outros cargos além de: ADMIN, GERENTE, COORDENADOR E CPD**. Inserir novas notas;
- *Produtos*
- [] Não deve ser possível **capturar e inserir produtos de notas fiscais** que ja estejam salvos no banco de dados;
- [] Não deve ser possível **outros cargos além de: ADMIN, GERENTE, COORDENADOR E CPD**. Inserir novos produtos;
- *Pedidos*
- [] Não deve ser possível **inserir pedidos com mais de três meses**;
- [] Não deve ser possível **inserir pedidos de editoras que já foram inseridos**;
- [] Não deve ser possível **outros cargos além de: ADMIN, GERENTE, COORDENADOR E CPD**. Inserir novos pedidos;
- *Conferência*
- []
- [] Não deve ser possível **outros cargos além de: ADMIN, GERENTE, COORDENADOR E CPD**. Fazer conferênia;
- *Faltantes*
- [] 
- [] Não deve ser possível **outros cargos além de: ADMIN, GERENTE, COORDENADOR E CPD**. Inserir faltantes;
- *Divergências*
- [] 
- *Relatórios*
- []
---

# LIVRARIA
**Requisitos funcionais**
- []

**Requisitos não funcionais**
- []

**Regra de negócio**
- []
---