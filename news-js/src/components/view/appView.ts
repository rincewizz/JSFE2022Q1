import { NewsEverything, NewsSources, ResponseNewsEverything, ResponseNewsSources } from '../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseNewsEverything, addMode = false, currentPage?: number) {
        const values: NewsEverything[] | [] = data?.articles ? data?.articles : [];

        let lastPage = false;
        if (currentPage) {
            const totalResults: number = data.totalResults;
            const resultsLimit: number = totalResults < 100 ? totalResults : 100;
            lastPage = values.length * currentPage > resultsLimit - values.length;
        }
        this.news.draw(values, addMode, lastPage);
    }

    public drawSources(data: ResponseNewsSources) {
        const values: NewsSources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
