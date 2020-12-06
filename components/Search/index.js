import {useState} from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles.module.scss';
import { searchActions } from "../../redux/actions";
import {useDispatch} from "react-redux";




export default ()=>{

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleChange =(e)=>{
        setSearch(e.currentTarget.value);
    };



    const router = useRouter();

    const handleSearch =()=>{
        if(search!==''){
            dispatch(searchActions.reset());
            router.push(`/search/${search}`)
        }
    };

    const pressEnter =(e)=>{
        if(e.key === 'Enter'){
            handleSearch();
        }
    };

    return(
        <div className={styles.search}>
            <TextField
                value={search}
                id="standard-search"
                label="Поиск..."
                type="search"
                onChange={handleChange}
                onKeyPress={pressEnter}
            />
        </div>
    )
}