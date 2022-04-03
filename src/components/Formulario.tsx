import { useState } from "react";
import Cliente from "../core/Cliente";
//import Botao from "./Botao";
//import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}
