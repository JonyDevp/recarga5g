export interface HeroCarousel {
    id: number;
    label: string;
    title: string;
    textOne: string;
    textTwo?: string;
    textlink: string;
    routerLink: string;
    imgHero: HeroImg;
}

export interface HeroImg {
    src: string;
    alt: string;
}