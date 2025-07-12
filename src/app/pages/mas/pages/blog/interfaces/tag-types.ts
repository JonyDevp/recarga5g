export interface MapTagResponse {
    total: number,
    skip: number,
    items: MapitemTagResponse[]
}

export interface MapitemTagResponse {
    name: string,
    id: string,
}

export interface TagsResponse {
    sys:   TagsResponseSys;
    total: number;
    skip:  number;
    limit: number;
    items: Item[];
}

export interface Item {
    sys:  ItemSys;
    name: string;
}

export interface ItemSys {
    space:       CreatedBy;
    id:          string;
    type:        string;
    createdAt:   Date;
    updatedAt:   Date;
    environment: CreatedBy;
    createdBy:   CreatedBy;
    updatedBy:   CreatedBy;
    version:     number;
    visibility:  string;
}

export interface CreatedBy {
    sys: CreatedBySys;
}

export interface CreatedBySys {
    type:     Type;
    linkType: LinkType;
    id:       ID;
}

export enum ID {
    Master = "master",
    P73Xj1Ta0Br2 = "p73xj1ta0br2",
    The7R4MoB42BC5QmZQ6OAOM1K = "7r4MoB42BC5QmZQ6OAOM1K",
}

export enum LinkType {
    Environment = "Environment",
    Space = "Space",
    User = "User",
}

export enum Type {
    Link = "Link",
}

export interface TagsResponseSys {
    type: string;
}