export type TagRepository = Record<string, Tag | undefined>

export interface Tag {
    icon: string,
    display: string,
    description: string
}

export interface CardGroup {
    title: string,
    description: string,
    cards: Card[],
}

export interface Card {
    name: string,
    url: string,
    description: string,
    tags: string[]
}