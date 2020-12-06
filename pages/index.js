import Head from 'next/head';
import {LayoutApp, withScroll} from "../modules";
import {PhotoCard} from "../components";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import {appActions, homeActions} from "../redux/actions";


const PhotosList = withScroll(PhotoCard);

export default function Home(props) {

    let state = useSelector(state => state);
    const dispatch = useDispatch();

    const {home: {count, hasMore, data, response},} = state;

    const getPhotos = () => dispatch(homeActions.getData(count));

    useEffect(() => {
        if(count===1){
            dispatch(appActions.showLoader(true));
            getPhotos();
        }
    }, []);

    return (
        <LayoutApp>
            <Head>
                <title>Главная</title>
            </Head>
            <PhotosList data={data} action={getPhotos} hasMore={hasMore}/>
        </LayoutApp>
    )
}

