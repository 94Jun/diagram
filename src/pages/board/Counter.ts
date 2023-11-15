import { makeObservable, observable } from 'mobx';

export default class Counter {
    constructor() {
        makeObservable(this, {
            count: observable,
        });
    }
    public count = 1;
    public addCount() {
        this.count = this.count + 1;
    }
}
