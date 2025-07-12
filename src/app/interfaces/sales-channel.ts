import { SafeHtml } from "@angular/platform-browser";

export interface SalesChannel {
  readonly id: number;
  img: { src: string; alt: string };
  title: string;
  description: string;
  modalInfo: SalesChannelModal;
 /* [other: string]: any; --> index signature*/
}

interface SalesChannelModal {
  subTitle: string;
  description: string;
  listSteps: SalesChannelSteps[]
}

interface SalesChannelSteps {
  id: number;
  svgIcon: SafeHtml;
  info: string;
}

