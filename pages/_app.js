import '../styles/globals.scss';
import {wrapper} from "../redux/store";
import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import withReduxSaga from 'next-redux-saga';
import { historyActions, favoritesActions } from "../redux/actions";


const MyApp =({Component, pageProps})=>{

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(historyActions.setHistory({}));
        let favoritesStorage = localStorage.getItem('favorites');
        let favorites = favoritesStorage ? JSON.parse(favoritesStorage) : {};
        dispatch(favoritesActions.setFavorites(favorites));
    },[]);

    return <Component {...pageProps} />
};

export default wrapper.withRedux(withReduxSaga(MyApp))