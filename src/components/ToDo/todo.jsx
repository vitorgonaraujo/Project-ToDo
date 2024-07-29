import styles from "./styles.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import dayjs from "dayjs";

export default function ToDo(props) {
  const date = dayjs();

  return (
    <div className={styles.note}>
      <span> {props.decription} </span>
      <div className={styles.noteFooter}>
        <small> {date.format("DD/MM/YYYY")} </small>
        <div className={styles.icons}>
        <HiMiniPencilSquare className={styles.editIcon} />
        <FaRegTrashAlt className={styles.trashIcon}/>

        </div>
      </div>
    </div>
  );
}
