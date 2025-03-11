type BasicData = {
    id: number;
    name: string;
}

export type CharacterType = BasicData & {
    thumbnail: string;
}

export type CharacterDetailType = CharacterType & {
    description: string;
    series:{name: string}[];
}

export type RawData = BasicData & {   
    thumbnail: { path: string; extension: string };
};

export type RawDetailData = RawData & {
    description: string;
    series: { items: {name: string}[] };
}

