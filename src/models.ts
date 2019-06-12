export interface Image {
    url: string;
    width: number;
    height: number;
}

export interface Watchable {
    title: string;
    description: string;
    programType: string;
    releaseYear: number;
    images: {
        "Poster Art": Image;
    }
}