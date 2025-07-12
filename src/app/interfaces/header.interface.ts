import { SafeHtml } from "@angular/platform-browser";

export interface MegaMenuItem {
    /**
     * Text of the item.
     */
    label?: string;
    /**
     * Icon of the item.
     */
    icon?: string;
    /**
     * Callback to execute when item is clicked.
     */
    command?: (event?: any) => void;
    /**
     * External link to navigate when item is clicked.
     */
    url?: string;
    /**
     * An array of children menuitems.
     */
    items?: MenuItem[][];
    /**
     * Specifies whether the mega menu item is expanded.
     */
    expanded?: boolean;
    /**
     * When set as true, disables the menuitem.
     */
    disabled?: boolean;
    /**
     * Whether the dom element of menuitem is created or not.
     */
    visible?: boolean;

    /**
     * Configuration for active router link.
     */
    routerLinkActiveOptions?: any;
    /**
     * Defines the item as a separator.
     */
    separator?: boolean;

    /**
     * Inline style of the menuitem.
     */
    style?: any;
    /**
     * Style class of the menuitem.
     */
    styleClass?: string;
    /**
     * Inline style of the item's icon.
     */
    iconStyle?: any;

    /**
     * Identifier of the element.
     */
    id?: string;

    /**
     * Specifies tab order of the item.
     */
    tabindex?: string;
    /**
     * RouterLink definition for internal navigation.
     */
    routerLink?: any;

}

export interface MenuItem {
    /**
     * Text of the item.
     */
    label?: string;
    /**
     * Icon of the item.
     */
    icon?: string;
    svgIcon?: SafeHtml;
    info?: string;
    /**
     * Callback to execute when item is clicked.
     */
    command?(event: MenuItemCommandEvent): void;

    /**
     * External link to navigate when item is clicked.
     */
    url?: string;
    /**
     * An array of children menuitems.
     */
    items?: MenuItem[];
    /**
     * Specifies whether the mega menu item is expanded.
     */
    expanded?: boolean;
    /**
     * When set as true, disables the menuitem.
     */
    disabled?: boolean;
    /**
     * Whether the dom element of menuitem is created or not.
     */
    visible?: boolean;
    /**
     * Specifies where to open the linked document.
     */
    target?: string;
    /**
     * Configuration for active router link.
     */
    routerLinkActiveOptions?: any;
    /**
     * Defines the item as a separator.
     */
    separator?: boolean;

  
    /**
     * Inline style of the menuitem.
     */
    style?: any;
    /**
     * Style class of the menuitem.
     */
    styleClass?: string;

        /**
     * Style class of item active.
     */
    isActiveClass: string;
    /**
     * Inline style of the item's icon.
     */
    iconStyle?: any;
    /**
     * Identifier of the element.
     */
    id?: string;

    /**
     * Specifies tab order of the item.
     */
    tabindex?: string;
    /**
     * RouterLink definition for internal navigation.
     */
    routerLink?: any;
    /**
     * Query parameters for internal navigation via routerLink.
     */
    queryParams?: {
        [k: string]: any;
    };


}


export interface MenuItemCommandEvent {
    /**
     * Browser event.
     */
    originalEvent?: Event;
    /**
     * Selected menu item.
     */
    item?: MenuItem | MegaMenuItem;
    /**
     * Index of the selected item.
     */
    index?: number;
}
