import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5a1ab8b8adb14433bfa629db69429b7f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
