import style from "./list.module.scss";
import Activity from "./Activity";
import { ITarefa } from "../../types/tarefas";

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefa: ITarefa) => void
}

export default function List(props: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {props.tarefas.map((item) => (
          <Activity 
          selecionaTarefa={props.selecionaTarefa}
          key={item.id}
          tarefa={item} />
        ))}
      </ul>
    </aside>
  );
}
