import {useState} from 'react';
import LinkMU from '@material-ui/core/Link';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import CollectionsIcon from '@material-ui/icons/Collections';
import styles from './styles.module.scss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from "@material-ui/core/Badge/Badge";
import {useOutsideClick} from "../../plugins/outside";
import {Search} from "../index";

export default ({count, refMenu})=> {

    const [state, setState] = useState(false);

    const showMenu =()=>{
          let elem = document.getElementById("app-menu");
          if(state){
              elem.style.top = "-180";
          } else{
              elem.style.top = "0";
          }
          setState(!state);
    };

    const closeMenu =()=>{
        let elem = document.getElementById("app-menu");
        elem.style.top = "-180px";
        setState(false);
    };

    useOutsideClick(refMenu, closeMenu);

    return (
        <>
            <div className={styles.burger}>
                <IconButton  aria-label="menu" onClick={showMenu}>
                    <MenuIcon />
                </IconButton>
            </div>
            <div id="app-menu" className={styles.menu}>
                <Search />
                <Link href={"/"} passHref>
                    <LinkMU component="a" color="textPrimary" >
                        <HomeIcon className={styles.iconLink}/>
                        Главная
                    </LinkMU>
                </Link>
                <Link href={"/collections"} passHref>
                    <LinkMU component="a" color="textPrimary" >
                        <CollectionsIcon className={styles.iconLink} />
                        Коллекции
                    </LinkMU>
                </Link>
                <Link href={"/favorites"} passHref>
                    <LinkMU component="a" color="textPrimary" >
                        <Badge badgeContent={count} color="error"
                               anchorOrigin={{vertical: 'top', horizontal: 'left',}}
                               className={styles.badge}
                        >
                            <FavoriteIcon className={styles.iconLink} />
                        </Badge>
                        Избранное
                    </LinkMU>
                </Link>
                <Link href={"/history"} passHref>
                    <LinkMU component="a" color="textPrimary">
                        <HistoryIcon className={styles.iconLink} />
                        История
                    </LinkMU>
                </Link>
            </div>
        </>
    );
};

