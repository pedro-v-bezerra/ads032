import { useForm } from "react-hook-form";
import { useContext } from "react";
import ContatosContext from "../context/ContatosContext";
import { useNavigate } from "react-router-dom";

export default function Novo() {
  const navigate = useNavigate()
  const {incluirContato} = useContext(ContatosContext)
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const validaNome = {
    required: {
      value: true,
      message: "Campo Obrigatório",
    },
  };
  const validaTelefone = {
    required: {
      value: true,
      message: "Campo Obrigatório",
    },
  };

  function onSubmit(data) {
    incluirContato(data)
    navigate("/")
  }

  return (
    <>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Nome">Nome</label>
          <input type="name" id="nome" {...register("nome", validaNome)} />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="Telefone">Telefone</label>
          <input
            type="number"
            id="telefone"
            {...register("telefone", validaTelefone)}
          />
          {errors.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button>Salvar</button>
      </form>
    </>
  );
}
