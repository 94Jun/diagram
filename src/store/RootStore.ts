import { makeObservable } from 'mobx';
import { BoardPageStore } from '../pages';

export default class RootStore {
    public boardPageStore: BoardPageStore = new BoardPageStore();
    constructor() {
        makeObservable(this, {});
    }
}
