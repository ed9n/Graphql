export interface Member {
    artist: string;
    instrument: string;
    years: string[];
}

export interface ObjectBand {
    items: [Band];
    limit: number;
    offset: number;
    total: number;
}

export interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}