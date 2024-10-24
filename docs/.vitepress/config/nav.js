const nav = [
    {
        "text": "博客",
        "link": "/",
        "target": "_self"
    },
    {
        "text": "归档",
        "link": "/archived",
        "target": "_self"
    },
    {
        "text": "笔记",
        "link": "/notes/",
        "target": "_self",
        "activeMatch": '/notes/',
    },
    {
        "text": "工具",
        "link": "/tools",
        "target": "_self",
    },
    {
        "text": "蜂舟平台",
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
]
export default nav