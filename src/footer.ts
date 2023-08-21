import van from "vanjs-core"

const { p, div, a, i } = van.tags

/**
        <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
        <p>&copy; 2023 {head.title}. All rights reserved.</p>
        <div class={styles["social-links"]}>
            <a href="https://github.com/danny-yamamoto" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/dai_s_a_n" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        </footer>

    let twitterProfile = 'https://twitter.com/dai_s_a_n';
    let githubProfile = 'https://github.com/danny-yamamoto';
*/

export const copyrights = (myname) => {
    return p("&copy; 2023 ", myname, ". All rights reserved.")
}

export const addCopyrights = (myname) => {
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