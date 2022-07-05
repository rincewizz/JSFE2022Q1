import { NewsEverything } from '../../types';
import './news.css';

class News {
    public draw(data: Readonly<NewsEverything>[], addMode = false, lastPage?: boolean) {
        const news: Readonly<NewsEverything>[] = data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        const newsEl: HTMLElement | null = document.querySelector('.news');
        if (!newsItemTemp || !newsEl) throw new Error('.news or #newsItemTemp does not exist');

        news.forEach((item: Readonly<NewsEverything>, idx: number) => {
            const newsClone: HTMLElement | null = newsItemTemp.content.cloneNode(true) as HTMLElement | null;
            if (!newsClone) throw new Error('#newsItemTemp does not exist');

            const newsItemEl: HTMLElement | null = newsClone.querySelector('.news__item');
            if (!newsItemEl) throw new Error('.news__item does not exist');

            if (idx % 2) newsItemEl.classList.add('alt');

            const newsMetaPhotoEl: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
            if (!newsMetaPhotoEl) throw new Error('.news__meta-photo does not exist');

            newsMetaPhotoEl.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAuthorEl: HTMLElement | null = newsClone.querySelector('.news__meta-author');
            if (!newsMetaAuthorEl) throw new Error('.news__meta-author does not exist');

            newsMetaAuthorEl.textContent = item.author || item.source.name;

            const newsMetaDateEl: HTMLElement | null = newsClone.querySelector('.news__meta-date');
            if (!newsMetaDateEl) throw new Error('.news__meta-author does not exist');

            newsMetaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitleEl: HTMLElement | null = newsClone.querySelector('.news__description-title');
            if (!newsDescriptionTitleEl) throw new Error('.news__description-title does not exist');

            newsDescriptionTitleEl.textContent = item.title;

            const newsDescriptionSourceEl: HTMLElement | null = newsClone.querySelector('.news__description-source');
            if (!newsDescriptionSourceEl) throw new Error('.news__description-source does not exist');

            newsDescriptionSourceEl.textContent = item.source.name;

            const newsDescriptionContentEl: HTMLElement | null = newsClone.querySelector('.news__description-content');
            if (!newsDescriptionContentEl) throw new Error('.news__description-content does not exist');

            newsDescriptionContentEl.textContent = item.description;

            const newsReadMoreAEl: HTMLElement | null = newsClone.querySelector('.news__read-more a');
            if (!newsReadMoreAEl) throw new Error('.news__read-more a does not exist');
            newsReadMoreAEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        if (!addMode) {
            newsEl.innerHTML = '';
        }
        let moreBtn: HTMLElement | null = document.querySelector('.load-more');
        if (!moreBtn) {
            moreBtn = document.createElement('button');
            moreBtn.innerText = 'Load More';
            moreBtn.classList.add('load-more');
            newsEl.appendChild(moreBtn);
        }
        moreBtn.before(fragment);

        if (lastPage) {
            moreBtn.remove();
        }
    }
}

export default News;
