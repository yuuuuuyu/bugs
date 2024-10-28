import { bugs, skills, notes } from "./links"

export enum MY_TAB {
  BLOG = "posts",
  NOTE = "notes",
  SKILL = "skills",
  BUGS = "bugs",
}

const sidebar = {
  bugs: bugs,
  skills: skills,
  notes: notes,
}
export default sidebar

