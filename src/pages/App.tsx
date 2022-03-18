import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import style from "./app.module.scss";
import { useState } from "react";
import { ITarefa } from "../types/tarefas";

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAntigas) =>
      tarefasAntigas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAntigas) =>
        tarefasAntigas.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List selecionaTarefa={selecionaTarefa} tarefas={tarefas} />
      <Stopwatch finalizarTarefa={finalizarTarefa}
      selecionado={selecionado} />
    </div>
  );
}
