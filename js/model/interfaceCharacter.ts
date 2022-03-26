export type ArrResults = Array<Results> | null | undefined;

export interface Character {
  info: Info;
  results?: ArrResults;
  error?:string | undefined
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: null;
}

export interface Results{
      error?:string | undefined
      "id": number,
      "name": string,
      "status": string,
      "species": string,
      "type": string,
      "gender": string,
      "origin": Origin,
      "location": Location,
      "image":string,
      "episode": Array<string> | null,
      "url":URL,
      "created": string
}

export interface Origin{
        "name": string,
        "url": URL
}

export interface Location{
        "name": string,
        "url": URL
    }