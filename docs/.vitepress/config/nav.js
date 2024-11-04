const nav = [
    {
        "text": "首页🏠",
        "link": "/",
        "target": "_self",
    },
    {
        "text": "博客👀",
        "link": "/blog",
        "target": "_self"
    },
    {
        "text": "归档",
        "link": "/archived",
        "target": "_self"
    },
    {
        "text": "笔记📒",
        "link": "/notes/",
        "target": "_self",
        "activeMatch": '/notes/',
    },
    {
        "text": "蜂舟平台🐝",
        "items": [
            {
                "text": "Bugs",
                "link": "/bugs/",
                "target": "_self",
                "activeMatch": '/bugs/'
            },
            {
                "text": "技巧",
                "link": "/skills/",
                "target": "_self",
                "activeMatch": '/skills/'
            },
        ],
    },
    {
        "text": "搬过的🧱",
        "link": "/works",
        "target": "_self",
        "activeMatch": '/works',
    },
]
export default nav