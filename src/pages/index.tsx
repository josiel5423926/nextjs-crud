import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 26, "3"),
    new Cliente("Daniel", 20, "4"),
  ];

  function clienteSelecionado (cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido (cliente: Cliente){
    console.log("Cliente exluido",cliente.nome)
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-200 to-purple-500 text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
