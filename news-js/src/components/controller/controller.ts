import AppLoader from './appLoader';
import { Endpoint, ResponseNewsSources, ResponseNewsEverything, callbackFn } from '../types/index';

class AppController extends AppLoader {
    public getSources<T extends ResponseNewsSources>(callback: callbackFn<T>) {
        super.getResp({ endpoint: Endpoint.sources }, callback);
    }

    public getNews<T extends ResponseNewsEverything>(e: Event, callback: callbackFn<T>) {
        let target: HTMLElement = e.target as HTMLElement;
        const newsContainer: HTMLElement | null = e.currentTarget as HTMLElement;
        if (!target || !newsContainer) return;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
