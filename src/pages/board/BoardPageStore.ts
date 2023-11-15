import { makeObservable, observable } from 'mobx';
import Counter from './Counter';

export default class BoardPageStore {
    public counter: Counter = new Counter();
    public counter2 = { count: 1 };
    constructor() {
        makeObservable(this, {
            counter: observable,
            counter2: observable,
        });
    }
    public addCount() {
        this.counter2.count = this.counter2.count + 1;
    }
}
