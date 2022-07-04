import AppLoader from './appLoader';
import { Endpoint, ResponseNewsSources, ResponseNewsEverything, callbackFn, Options } from '../types/index';

class AppController extends AppLoader {
    public getSources<T extends ResponseNewsSources>(callback: callbackFn<T>) {
        super.getResp({ endpoint: Endpoint.sources }, callback);
    }

    public async getNews<T extends ResponseNewsEverything>(
        e: Event,
        callback: callbackFn<T>,
        options: Options = { pageSize: '10' }
    ) {
        let target: HTMLElement = e.target as HTMLElement;
        const newsContainer: HTMLElement | null = e.currentTarget as HTMLElement;

        if (!target || !newsContainer) return;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item') || target.classList.contains('load-more')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    if (!target.classList.contains('load-more')) newsContainer.setAttribute('data-source', sourceId);
                    await super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                                ...options,
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
