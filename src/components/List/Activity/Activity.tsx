import { ITarefa } from "../../../types/tarefas";
import style from "./activity.module.scss";

interface Props {
  tarefa: ITarefa;
  selecionaTarefa: (tarefa: ITarefa) => void;
}

export default function Activity(props: Props) {
  return (
    <li
      className={`${style.item} ${
        props.tarefa.selecionado ? style.itemSelecionado : ""
      } ${props.tarefa.completado ? style.itemCompletado : ""}`}
      onClick={() => ! props.tarefa.completado && props.selecionaTarefa(props.tarefa)}
    >
      <h3>{props.tarefa.tarefa}</h3>
      <span>{props.tarefa.tempo}</span>
      {props.tarefa.completado && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
