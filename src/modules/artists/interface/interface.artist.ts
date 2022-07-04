export interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[];
    instruments: string[];
}

export interface ObjectArtists {
    items: [Artist],
    limit: number,
    offset: number,
    total: number
}
