import van from "vanjs-core"

const { div, h1, p, a, li, ul } = van.tags

type ExperienceItem = {
    id: string;
    company: string;
    position: string;
}  

type QiitaItem = {
    title: string;
    url: string;
    id: string;
};

type CertItem = {
    blockchainId: string;
    title: string;
}  

export const intro = (myname) => {
    return div(h1(myname), p("Welcome to my portfolio"))
}

export const addIntro = (myname) => {
    const target = document.querySelector("section#intro")
    if (target) {
        van.add(target, intro(myname))
    }
}

export const articles = async () => {
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
        van.add(target, await articles())
    }
}

export const experience = () => {
    const res: ExperienceItem[] = [
        {
            id: '2022-09',
            company: 'Retail AI X Inc.',
            position: 'Lead Engineer',
        },
        {
            id: '2021-06',
            company: 'Retail AI X Inc.',
            position: 'Software Engineer',
        },
        {
            id: '2020-06',
            company: 'Retail AI Engineering Inc.',
            position: 'Software Engineer',
        }
      ]
    return ul(
        res.map(({ id, position, company }) => (li({key: id}, id, ": ", position, " @ ", company)))
    )
}

export const addExperience = () => {
    const target = document.querySelector("section#experience")
    if (target) {
        van.add(target, experience())
    }
}

export const certificates = () => {
    const res: CertItem[] = [
        {
            blockchainId: '732838',
            title: 'Google Cloud Certified - Professional Cloud Developer',
        },
        {
            blockchainId: '672721',
            title: 'Google Cloud Certified - Professional Cloud Architect',
        }
      ];
    return ul(
        res.map(({ blockchainId, title }) => (li({key: blockchainId}, title)))
    )    
}

export const addCertificates = () => {
    const target = document.querySelector("section#certificates")
    if (target) {
        van.add(target, certificates())
    }
}