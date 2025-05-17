/*
 * @Description: 处理 Markdown 文件中图片 URL
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-05-17
 */
import { BASE_URL } from "./config"

export const withBase = (path: string) => {
  return `${BASE_URL}${path}`
}

// 用于处理图片 URL 的工具函数
export const getImageUrl = (name: string) => {
  return withBase(`/drawing-bed/${name}`)
}

