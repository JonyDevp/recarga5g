

export interface ProductCarousel {
   readonly id: Idtype;
    typeService: TypeService;
    company: string;
    img: ImgCarousel
    siteweb?: string;
}

export interface ImgCarousel {
    src: string;
    alt: string;
    width: string;
    height: string;
}

export type  Idtype = `${string}-${string}-${string}-${string}-${string}`;
export type TypeService = 'Recargas' | 'Servicios' | 'Pines';

