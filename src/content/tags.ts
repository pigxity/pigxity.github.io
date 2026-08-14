import type { TagRepository } from "./card_types"

function createLanguageTag(display: string) {
    return {
        icon: "nf-md-language_" + display.toLowerCase(),
        display: display,
        description: `Has code written in the ${display} programming language`
    }
}

export const TAGS: TagRepository = {
    lua: createLanguageTag("Lua"),
    python: createLanguageTag("Python"),
    java: createLanguageTag("Java"),
    javascript: createLanguageTag("JavaScript"),
    typescript: createLanguageTag("TypeScript"),

    ai_used: {
        icon: "nf-fa-robot",
        display: "AI-Assisted",
        description: "AI coding tools were used for some (not all) of the project's code."
    },

    legacy: {
        icon: "nf-cod-arrow_left",
        display: "Legacy",
        description: "Old code from long ago; don't expect me to update this."
    },

    game: {
        icon: "nf-md-gamepad_variant",
        display: "Game",
        description: "A published game that can currently be played."
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
