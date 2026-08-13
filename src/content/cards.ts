function createLanguageTag(display: string) {
    return {
        icon: "nf-md-language_" + display.toLowerCase(),
        display: display,
        description: `Has code written in the ${display} programming language`
    }
}

export interface Tag {
    icon: string,
    display: string,
    description: string
}

export const TAGS: Record<string, Tag | undefined> = {
    lua: createLanguageTag("Lua"),
    python: createLanguageTag("Python"),
    java: createLanguageTag("Java"),
    typescript: createLanguageTag("TypeScript"),

    ai_used: {
        icon: "nf-fa-robot",
        display: "AI-Assisted",
        description: "AI coding tools were used for some of the project's code."
    },

    legacy: {
        icon: "nf-cod-arrow_left",
        display: "Legacy",
        description: "Old code from long ago; don't expect me to update this."
    },

    game: {
        icon: "nf-md-gamepad_variant",
        display: "Game",
        description: "A playable game."
    },

    library: {
        icon: "nf-md-tools",
        display: "Library/Tool",
        description: "A library or tool that is used by other projects."
    },

    closed_source: {
        icon: "nf-oct-eye_closed",
        display: "Closed Source",
        description: "The source code of the project is not publicly visible, but usually has a downloadable/playable binary."
    }
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

export const ROBLOX_CARD_GROUP: CardGroup = {
    title: "Roblox",
    description: "Playable Roblox games and libraries for Roblox development",
    cards: [
        {
            name: "Iridium Mines",
            url: "https://www.roblox.com/games/11989155614",
            description: "A rogue-lite mining game on Roblox; currently under development.",
            tags: ["lua", "game", "closed_source"]
        },
        {
            name: "lune-test",
            url: "https://github.com/pigxity-games/lune-test",
            description: "A test runner script written for Lune which aims to replicate a Roblox environment.",
            tags: ["lua", "ai_used", "library"]
        },
        {
            name: "lua-annotations",
            url: "https://github.com/pigxity-games/lua-annotations",
            description: "An annotation processor for Luau code written in python; can be used as a modular game framework.",
            tags: ["python", "lua", "library"]
        },
        {
            name: "permanote",
            url: "https://www.roblox.com/games/11323346061",
            description: "A game that allows players to place notes around the map which other players can read; a simple project that only took a day or two.",
            tags: ["lua", "game", "closed_source"]
        },
        {
            name: "Piggy Games Fan Group",
            url: "https://www.roblox.com/communities/6412921/Piggy-Games-Fan-Group",
            description: "A collection of cringe games I made ~5 years ago.",
            tags: ["lua", "game", "legacy", "closed_source"]
        },
    ]
}