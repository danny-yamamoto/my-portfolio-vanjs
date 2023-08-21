import van from "vanjs-core"

const {a, div, p, li, ul } = van.tags

type QiitaItem = {
    title: string;
    url: string;
    id: string;
};

export const articles = () => {
    return ul(li("hogehoge"))
}
export const articles2 = async () => {
    const response = await fetch(`https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=20`);
    const qiitaItems: any[] = await response.json();
    const res: QiitaItem[] = qiitaItems.map(item => ({
      title: item.title,
      url: item.url,
      id: item.id,
    }));
    return ul(
        res.map(({ id, url, title }) => (li({key: id}, a({href: url, target: "_blank", text: title}))))
    )
}
export const addArticles = async () => {
    const target = document.querySelector("section#articles")
    if (target) {
        //van.add(target, articles())
        van.add(target, await articles2())
    }
}


const Hello = () => div(
    p("👋Hello"),
    ul(
      li("🗺️World"),
      li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
    ),
)
van.add(document.body, Hello())
