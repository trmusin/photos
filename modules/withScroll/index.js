import InfiniteScroll from 'react-infinite-scroll-component';
import LinearProgress from "@material-ui/core/LinearProgress";



export default (Component)=> {

    const List =({data=[], action, hasMore})=> {

        return (
            <InfiniteScroll
                dataLength={data.length}
                next={action}
                hasMore={hasMore}
                loader={<LinearProgress color="secondary" />}
                hasChildren={true}
                scrollableTarget="scrollableDiv"
            >
                {data.map((item, index)=> <Component key={index} item={item}/>)}
            </InfiniteScroll>
        )
    };
    return List
};