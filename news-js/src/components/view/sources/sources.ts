import './sources.css';
import { NewsSources } from '../../types/index';

class Sources {
    public draw(data: Readonly<NewsSources>[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (!sourceItemTemp) throw new Error('#sourceItemTemp does not exist');

        data.forEach((item) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItemNameEl: HTMLElement | null = sourceClone.querySelector('.source__item-name');
            const sourceItemEl: HTMLElement | null = sourceClone.querySelector('.source__item');

            if (!sourceItemNameEl) throw new Error('.source__item-name does not exist');
            if (!sourceItemEl) throw new Error('.source__item does not exist');

            sourceItemNameEl.textContent = item.name;
            sourceItemEl.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourceEl: HTMLElement | null = document.querySelector('.sources');
        if (!sourceEl) throw new Error('.sources does not exist');
        sourceEl.append(fragment);
    }
}

export default Sources;
