import AppController from '../controller/controller';
import { ResponseNewsEverything, ResponseNewsSources } from '../types';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sourcesEl: HTMLElement | null = document.querySelector('.sources');
        if (!sourcesEl) throw new Error('.sources does not exist');

        sourcesEl.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: ResponseNewsEverything) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ResponseNewsSources) => this.view.drawSources(data));
    }
}

export default App;
