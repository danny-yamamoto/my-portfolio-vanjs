import van from "vanjs-core"

const { p, div, a, i } = van.tags

export const copyrights = (myname: string) => {
    return p("&copy; 2023 ", myname, ". All rights reserved.")
}

export const addCopyrights = (myname: string) => {
    const target = document.querySelector("footer#sns")
    if (target) {
        van.add(target, copyrights(myname))
    }
}

export const sns = () => {
    const twitterProfile = 'https://twitter.com/dai_s_a_n'
    const githubProfile = 'https://github.com/danny-yamamoto'
    return div({class: "social-links"},
        a({href: githubProfile, target: "_blank"}, i({class: "fab fa-github"})),
        a({href: twitterProfile, target: "_blank"}, i({class: "fab fa-twitter"}))
    )
}

export const addSns = () => {
    const target = document.querySelector("footer#sns")
    if (target) {
        van.add(target, sns())
    }
}
