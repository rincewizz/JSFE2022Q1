import AppController from '../controller/controller';
import { ResponseNewsEverything, ResponseNewsSources } from '../types';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    private sourceId: string;

    constructor() {
        this.sourceId = '';
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sourcesEl: HTMLElement | null = document.querySelector('.sources');
        if (!sourcesEl) throw new Error('.sources does not exist');

        sourcesEl.addEventListener('click', async (e: Event) => {
            await this.controller.getNews(e, (data: ResponseNewsEverything) => this.view.drawNews(data));
            const newsEl: HTMLElement = document.querySelector('.news') as HTMLElement;
            newsEl.scrollIntoView();

            const sourceTarget: HTMLElement = e.target as HTMLElement;
            const sourceItemEl: HTMLElement | null = sourceTarget.closest('.source__item');
            if (!sourceItemEl) return;

            this.sourceId = sourceItemEl.getAttribute('data-source-id') as string;

            this.controller.page = 1;
        });

        document.body.addEventListener('click', async (e: Event) => {
            if (!this.sourceId) return;
            const target: HTMLButtonElement = e.target as HTMLButtonElement;
            if (target && target.classList.contains('load-more')) {
                this.controller.page++;
                target.setAttribute('data-source-id', this.sourceId);
                await this.controller.getNews(e, (data: ResponseNewsEverything) => this.view.drawNews(data, true), {
                    pageSize: '10',
                    page: String(this.controller.page),
                });
            }
        });

        this.controller.getSources((data: ResponseNewsSources) => this.view.drawSources(data));
    }
}

export default App;
