export type TagRepository = Record<string, Tag | undefined>

export interface Tag {
    icon: string,
    display: string,
    description: string,
    style?: string
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

export function getOrderedCardTags(cardTags: readonly string[], tagRepository: TagRepository): Tag[] {
    const requestedTags = new Set(cardTags)

    for (const tag of cardTags) {
        if (tagRepository[tag] === undefined) {
            throw new Error("Invalid tag: " + tag)
        }
    }

    return Object.entries(tagRepository)
        .filter(([tagId]) => requestedTags.has(tagId))
        .map(([_, tagData]) => tagData!)
}
