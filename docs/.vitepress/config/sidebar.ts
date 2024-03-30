import bugs from "./bug-links"
import skills from "./skill-links"
import itvs from "./itv-links"
import blogs from "./blogs-links"

export enum MY_TAB {
  BLOG = "/博客/",
  NOTE = "/笔记/",
  SKILL = "/技巧/",
  BUGS = "/bugs/",
}

const sidebar = {
  "/bugs": bugs,
  "/技巧": skills,
  "/笔记": itvs,
  "/博客": blogs,
  "/": [],
}
export default sidebar

