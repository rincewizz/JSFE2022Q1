import Loader from './loader';

class AppLoader extends Loader {
    private _page: number;

    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '5a1ab8b8adb14433bfa629db69429b7f', // получите свой ключ https://newsapi.org/
        });
        this._page = 1;
    }
    get page() {
        return this._page;
    }
    set page(n) {
        this._page = n;
    }
}

export default AppLoader;
