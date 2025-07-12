
export interface MetodosVenta {
    id: number;
    title: string;
    description: string;
    img?: ImgModal;
    iconClass?: string;
    modal: Modal;
}

interface ImgModal {
    url: string;
    alt: string;
}

interface Modal {
    img?: ImgModal;
    subTitle: string;
    description: string;
    list: StepsModal[];
}

interface StepsModal {
    iconClass: string;
    description: string;
}