interface CharacterLocation {
    name: string;
    url:  string;
}

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   CharacterLocation;
    location: CharacterLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Episode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}

export interface Location {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}



export type Category = "character" | "location" | "episode";
