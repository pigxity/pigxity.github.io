import type { CardGroup } from "./card_types"

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