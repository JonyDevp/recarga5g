import * as Contentful from "contentful";



export interface TypePostFields {
    title: Contentful.EntryFields.Text;
    body: Contentful.EntryFields.RichText;
    publishDate: Contentful.EntryFields.Date;
    slug: Contentful.EntryFields.Text;
    headerImage: Contentful.Asset;
    summary: Contentful.EntryFields.Text;
    featured: Contentful.EntryFields.Boolean;
}

export interface TypePostSkeleton {
    contentTypeId: 'blogRecarga5g';
    fields: TypePostFields;
}