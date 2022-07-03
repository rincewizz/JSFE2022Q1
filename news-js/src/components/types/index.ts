export interface NewsSources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
type SourceType = Pick<NewsSources, 'id' | 'name'>;

export interface NewsEverything {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: SourceType;
    title: string;
    url: string;
    urlToImage: string;
}
type error = { code: string; message: string };
type status = 'ok' | error;

export interface ResponseNewsEverything {
    status: status;
    totalResults?: number;
    articles?: NewsEverything[];
}

export interface ResponseNewsSources {
    status: status;
    sources?: NewsSources[];
}

export enum Endpoint {
    sources = 'sources',
    everything = 'everything',
}

export type EndpointType = Partial<keyof typeof Endpoint>;

export interface Options {
    [index: string]: string;
}

export interface Request {
    endpoint: EndpointType;
    options?: Options;
}

export type callbackFn<T> = (param: T) => void;
