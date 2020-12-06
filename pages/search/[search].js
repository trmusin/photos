import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {LayoutApp, withScroll} from "../../modules";
import {EmptyState, PhotoCard} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import appActions from "../../redux/actions/appActions";
import searchActions from "../../redux/actions/searchActions";




const SearchList = withScroll(PhotoCard);

const Search =()=> {

    let state = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter();

    const {search: {count, hasMore, data, response}, history:{history}} = state;

    const searchPhoto = () => dispatch(searchActions.getSearch({search: router.query.search, history, page: count}));

    useEffect(() => {
        dispatch(appActions.showLoader(true));
        dispatch(searchActions.reset());
        searchPhoto();
    }, [router.query.search]);


    return (
        <LayoutApp>
            <Head>
                <title>Поиск</title>
            </Head>
            {data.length
                ? < SearchList data={data} action={searchPhoto} hasMore={hasMore} />
                : <EmptyState text="Ничего не найдено" />
            }
        </LayoutApp>
    )
};

export default Search;
