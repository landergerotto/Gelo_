import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { AlertContext } from "../../context/alert";
import styles from "./styles.module.scss";
import { i18n } from "../../translation/i18n"


export default function AlertComponent() {

  const { message, variant, show, setShow } = useContext(AlertContext);
  
  return (
    <Alert
      show={show}
      variant={variant}
      onClose={() => setShow(false)}
      dismissible
      style={{
        position: "relative"
      }}
    >
      <p className={styles.alert}>{message}</p>
    </Alert>
  );
}
