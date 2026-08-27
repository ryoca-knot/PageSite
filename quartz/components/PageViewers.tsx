import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const PageViews: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    return (
      <span id="stats-views" style={{ opacity: 0.8, fontSize: "0.9em" }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("nav", () => {
                const path = encodeURIComponent(location.pathname);
                fetch('https://YOUR-CODE.goatcounter.com/counter/' + path + '.json')
                  .then(res => res.json())
                  .then(data => {
                    const el = document.getElementById('stats-views');
                    if (el) el.innerText = \`閲覧数: \${data.count}\`;
                  })
                  .catch(() => {});
              });
            `,
          }}
        />
      </span>
    )
  }
  return PageViews
}) satisfies QuartzComponentConstructor