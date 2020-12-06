import {useRef} from 'react';
import styles from './styles.module.scss';
import {Navigation} from "../../components/index";
import {useSelector} from "react-redux";
import {Loader} from "../../components";


export default ({ children })=>{

    let state = useSelector(state => state);

    const {app:{showLoader}, favorites} = state;
    let refMenu = useRef(null);

return(
    <div className={styles.container} >
        <div className={styles.navigation} ref={refMenu}>
            <Navigation  refMenu={refMenu} count={Object.values(favorites.favorites).length}/>
        </div>
        <div className={styles.content} id="scrollableDiv">
            { showLoader
                ? <Loader />
                : <>{children}</>
            }
        </div>
    </div>
    )
};