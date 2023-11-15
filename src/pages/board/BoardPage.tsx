import { observer } from 'mobx-react';
import RootStore from '../../store/RootStore';
import useStores from '../../store/UseStores';
import BoardPageStore from './BoardPageStore';

const BoardPage = observer(() => {
    const rootStore: RootStore = useStores();
    const store: BoardPageStore = rootStore.boardPageStore;
    return (
        <div>
            <div>카운터 1 : {store.counter.count}</div>
            <div>카운터 2 : {store.counter2.count}</div>
            <button onClick={() => store.counter.addCount()}>카운터 1</button>
            <button onClick={() => store.addCount()}>카운터 2</button>
        </div>
    );
});

export default BoardPage;
