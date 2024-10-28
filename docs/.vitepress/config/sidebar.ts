import { bugs, skills, notes } from "./links"

// 博客数据合并，方便复制短链接
import { data as posts } from "./posts.data.mts"

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
  posts: posts,
}
export default sidebar

