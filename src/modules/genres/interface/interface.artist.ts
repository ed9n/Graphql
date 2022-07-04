export interface Genre {
    _id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}

export interface ObjectGenre {
    items: [Genre];
    limit: number;
    offset: number;
    total: number;
}