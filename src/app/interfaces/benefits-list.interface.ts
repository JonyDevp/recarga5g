
export interface BenefitsListModel {
    id: number;
    nameIcon: string;
    title: string;
    description: string;
    svgIcon: SVGIcon;
}

export interface SVGIcon {
    viewBox: string;
    strokeLineCap: string;
    strokeLineJoin: string;
    draw: string;
}
