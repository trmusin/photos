import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./styles.module.scss";

export default ()=> {

    return (
        <div className={styles.loader}>
            <CircularProgress color="secondary" />
        </div>
    );
}