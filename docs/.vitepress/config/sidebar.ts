import { bugs, skills, notes } from "./links"
import posts from "./posts-links"

import { data as notes } from "./notes.data.mts"
console.log(notes)

export enum MY_TAB {
  BLOG = "/posts/",
  NOTE = "/notes/",
  SKILL = "/skills/",
  BUGS = "/bugs/",
}

const sidebar = {
  "/bugs": bugs,
  "/skills": skills,
  "/notes": notes,
  "/posts": posts,
  "/": [],
}
export default sidebar

