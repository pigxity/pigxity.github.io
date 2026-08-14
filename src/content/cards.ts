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
            name: "RobloxTools",
            url: "https://github.com/pigxity/RobloxTools",
            description: 'My attempt at an "account switcher" Roblox extension; useless now, since Roblox added this as a feature.',
            tags: ["javascript", "legacy"]
        },
        {
            name: "Piggy Games Fan Group",
            url: "https://www.roblox.com/communities/6412921/Piggy-Games-Fan-Group",
            description: "A collection of cringe games I made ~5 years ago. I lost access to the account that owns them.",
            tags: ["lua", "game", "legacy", "closed_source"]
        },
    ]
}

export const MINECRAFT_GROUP: CardGroup = {
    title: "Minecraft",
    description: "Various Java projects to do with the Minecraft game: mods, plugins, etc.",
    cards: [
        {
            name: "dogemines-server",
            url: "https://github.com/dogemines/dogemines-framework",
            description: "An old project of mine where I tried to make a vanilla Minecraft server with custom content. Archived; no longer updated.",
            tags: ["java", "legacy"]
        },
        {
            name: "dogemines-framework",
            url: "https://github.com/dogemines/dogemines-framework",
            description: "The main library/framework plugin of the above project; helps add custom content such as items, blocks, etc.",
            tags: ["java", "legacy", "library"]
        },
        {
            name: "EasyMapDownload",
            url: "https://github.com/pigxity/EasyMapDownload",
            description: "A Fabric mod that allows you to install Minecraft worlds directly from your downloads folder.",
            tags: ["java"]
        },
        {
            name: "minecraft-bot",
            url: "https://github.com/pigxity/minecraft-bot",
            description: "A simple Minecraft bot that uses the Mineflayer API; controlled with terminal commands. Created to automate actions on a server's custom gamemode.",
            tags: ["typescript"]
        },
        {
            name: "minescript-libs",
            url: "https://github.com/pigxity/minescript-libs",
            description: "Various utility modules for the Minescript mod, allowing easier automation of the client by reducing usage of raw Java classes.",
            tags: ["python", "library"]
        },
    ]
}

export const MISC_GROUP: CardGroup = {
    title: "Misc",
    description: "Various other projects.",
    cards: [
        {
            name: "ai-discord-agent",
            url: "https://github.com/pigxity/ai-discord-agent",
            description: "My first foray into Machine Learning; a fine-tune of Qwen3 using my discord messages.",
            tags: ["python", "ai_used"]
        },
        {
            name: "NexusDL",
            url: "https://github.com/pigxity/NexusDL",
            description: "A custom downloader for mods from NexusMods that avoids their API to bypass free-tier restrictions.",
            tags: ["python"]
        },
        {
            name: "pymsbt",
            url: "https://github.com/pigxity/pymsbt",
            description: "A library for parsing and saving .msbt files, a proprietary file format created by Nintendo.",
            tags: ["python", "library"]
        },
        {
            name: "Pigxity's Portfolio",
            url: "https://github.com/pigxity/pigxity.github.io",
            description: "The website you're visiting right now!",
            tags: ["typescript"]
        },
    ]
}