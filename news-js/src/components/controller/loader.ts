import { callbackFn, EndpointType, Options, Request } from '../types/index';

class Loader {
    protected readonly baseLink: string;
    protected options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint, options = {} }: Request,
        callback: callbackFn<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl({ options, endpoint }: Request): string {
        const urlOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?` as string;

        Object.keys(urlOptions).forEach((key: keyof Options) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    protected load<T>(method: string, endpoint: EndpointType, callback: callbackFn<T>, options = {}) {
        fetch(this.makeUrl({ options, endpoint }), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
