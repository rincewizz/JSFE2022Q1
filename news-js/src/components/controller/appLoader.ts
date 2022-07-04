import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '5a1ab8b8adb14433bfa629db69429b7f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
