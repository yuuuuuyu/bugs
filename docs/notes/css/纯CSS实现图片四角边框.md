# 纯CSS实现图片四角边框

给图片添加炫酷的“角落”边框效果，不需要复杂的图片素材，仅凭短短几行 CSS 就能实现。通过 mask + conic-gradient，可以让非角落区域被遮罩，仅保留四个角的边框。

![纯CSS实现图片四角边框](https://ebugs.l2.bb1a.cn/drawing-bed/20250302/1.png)

```css
img {
    width: 100px;
    height: 100px;
    --s: 30px; /* 每个角的宽度 */
    padding: 4px;
    border: 2px solid #69D2E7;
    mask: conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s)) calc(100% - var(--s)), conic-gradient(#000 0 0) content-box;
}
```