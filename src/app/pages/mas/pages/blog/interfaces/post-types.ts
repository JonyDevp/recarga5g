import * as Contentful from 'contentful';

export type MapPostResponse ={
    total: number;
    items:  MapPostItem[]
}

export type MapPostItem = {
    id: string;
    title: string;
    body: Contentful.EntryFields.RichText | string;
    publish_date: string,
    slug: string;
    summary: string;
    headerImage: MapImgData | null;
}

export type MapImgData = {
    url: string;
    title?: string;
    description?: string;
}