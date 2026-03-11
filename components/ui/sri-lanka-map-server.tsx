import fs from "fs";
import path from "path";
import { SriLankaMap } from "./sri-lanka-map";

export function SriLankaMapServer() {
  const svgPath = path.join(process.cwd(), "public/images/sri-lanka.svg");
  const raw = fs.readFileSync(svgPath, "utf-8");

  const svgContent = raw
    .replace(/<\?xml[^>]*\?>\s*/, "")
    .replace(/<!--[\s\S]*?-->\s*/, "")
    .replace(/width="[^"]*"/, 'width="100%" id="sl-map"')
    .replace(/height="[^"]*"/, 'height="auto" viewBox="0 0 449.68774 792.54926"')
    .replace(
      /(<svg[^>]*>)/,
      '$1<style>#sl-map path{fill:rgba(17,212,82,0.1);stroke:rgba(17,212,82,0.22);stroke-width:0.8;transition:fill 0.55s cubic-bezier(0.4,0,0.2,1),filter 0.55s ease}#sl-map path.active{fill:#11d452;stroke:rgba(17,212,82,0.5);filter:drop-shadow(0 0 6px rgba(17,212,82,0.65))}</style>'
    );

  return <SriLankaMap svgContent={svgContent} />;
}
