import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <td>Código</td>
        <td>Nome</td>
        <td>Idade</td>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
     return(
        <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.idade}</td>
        </tr>
     )
    });
  }
  return (
    <table>
      <thead> {renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
