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

    public drawNews(data: ResponseNewsEverything, addMode = false) {
        const values: NewsEverything[] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values, addMode);
    }

    public drawSources(data: ResponseNewsSources) {
        const values: NewsSources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
