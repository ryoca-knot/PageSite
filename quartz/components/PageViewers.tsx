import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const PageViews: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`page-views ${displayClass ?? ""}`}>
        <span id="busuanzi_container_page_pv" style="display:none;">
          👁️ 閲覧数: <span id="busuanzi_value_page_pv">...</span> 回
        </span>
      </div>
    )
  }

  // QuartzのSPA（画面遷移）に対応するため、ページ切替イベントでスクリプトを読み込む
  PageViews.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      const oldScript = document.getElementById("busuanzi-script")
      if (oldScript) oldScript.remove()

      const script = document.createElement("script")
      script.id = "busuanzi-script"
      script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
      script.async = true
      document.head.appendChild(script)
    })
  `

  PageViews.css = `
  .page-views {
    font-size: 0.85rem;
    color: var(--gray);
    margin-top: 0.5rem;
  }
  `

  return PageViews
}) satisfies QuartzComponentConstructor