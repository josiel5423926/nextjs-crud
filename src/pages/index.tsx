import Botao from "../components/Botão";
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
    style={{margin:"0", padding:"0",backgroundImage:"url('https://atomicpapers.com.br/web/wallpapers/choque-entre-planetas/1366x768.jpg') "}}
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-200 to-purple-500 text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">

        <Botao cor="gray" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
