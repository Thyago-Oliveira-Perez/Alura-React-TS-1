import style from "./Stopwatch.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import tempoParaSegundos from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void
}

export default function Stopwatch(props: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (props.selecionado?.tempo) {
      setTempo(tempoParaSegundos(props.selecionado.tempo));
    }
  }, [props.selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }else{
        props.finalizarTarefa();
      }
    }, 1000);
  }

  const nameButton = "Começar!";

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock finalizarTarefa={props.finalizarTarefa} tempo={tempo} />
      </div>
      <Button nameButton={nameButton} onClick={() => regressiva(tempo)} />
    </div>
  );
}
