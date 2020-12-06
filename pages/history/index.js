import Head from "next/head";
import { useEffect } from 'react';
import {LayoutApp} from "../../modules";
import {HistoryList, EmptyState} from "../../components";
import {historyActions} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function() {

    const state = useSelector(state => state);
    const { history } = state.history;

    const dispatch = useDispatch();

    const clearHistory =()=>{
        localStorage.removeItem('history');
        dispatch(historyActions.setHistory({}));
    };
    const removeSelected =(checked)=>{
        let newHistory = history;
        checked.map( key => delete newHistory[key]);
        localStorage.setItem('history', JSON.stringify(newHistory));
        dispatch(historyActions.setHistory(newHistory));
    };

    let sortHistory = Object.values(history).sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });

    useEffect(()=>{
        dispatch(historyActions.setHistory({}))
    },[]);

    return (
        <LayoutApp>
            <Head>
                <title>История</title>
            </Head>
            {
                sortHistory.length ?
                    <HistoryList
                        history={sortHistory}
                        clear={clearHistory}
                        remove={removeSelected}
                    />
                : <EmptyState text="История поиска пуста" />
            }
        </LayoutApp>
    )
};