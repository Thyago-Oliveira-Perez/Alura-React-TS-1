import style from "./button.module.scss";

interface Props{
  type?: "button" | "submit" | "reset" | undefined;
  nameButton: string
  onClick?: () => void
}

export default function Button(props: Props) {
  return (
    <button onClick={props.onClick} type={props.type} className={style.botao}>
      {props.nameButton}
    </button>
  );
}
