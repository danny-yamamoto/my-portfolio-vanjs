import van from "vanjs-core"

const { title } = van.tags

export const siteTitle = (myname) => {
    return title(myname)
}

export const addSiteTitle = (myname) => {
    const target = document.head
    if (target) {
        van.add(target, siteTitle(myname))
    }
}
