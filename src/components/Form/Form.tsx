import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Button from "../Button";
import style from "./form.module.scss";
import { v4 as uuidV4 } from "uuid";

export default function Form(props: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  function salvarTarefa(e: React.FormEvent) {
    e.preventDefault();
    props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa: tarefa,
        tempo: tempo,
        selecionado: false,
        completado: false,
        id: uuidV4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00:00");
  }

  const botaoName = "Adicionar";

  return (
    <form className={style.novaTarefa} onSubmit={salvarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma nova tarefa:</label>
        <input
          onChange={(e) => {
            setTarefa(e.target.value);
          }}
          value={tarefa}
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você deseja estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo:</label>
        <input
          onChange={(e) => {
            setTempo(e.target.value);
          }}
          value={tempo}
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type={"submit"} nameButton={botaoName}/>
    </form>
  );
}
