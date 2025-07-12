
export interface ProductCarousel {
    id: number,
    typeService: TypeService;
    company: string;
    img: ImgCarousel
    siteweb?: string;
}

export interface ImgCarousel {
    id: number;
    src: string;
    alt: string;
    width: string;
    height: string;
}

export type TypeService = 'Recargas' | 'Servicios' | 'Pines';

