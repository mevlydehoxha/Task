export interface Slide {
    id: string;
    image: string;
    title: string;
    link: string;
}

export interface Slider {
    description: string;
    leftArrow: string;
    rightArrow: string;
    slides: Slide[];
}

export interface RootObject {
    pageId: number;
    title: string;
    subtitle: string;
    content: string;
    bannerImage: string;
    logoSnS: string;
    logoANTO: string;
    firstSectionImage1: string;
    firstSectionImage2: string;
    slider: Slider;
    thirdSectionLeftContent: string;
    thirdSectionRightContent: string;
    footer: string;
}
