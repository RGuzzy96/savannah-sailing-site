import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const components: MDXRemoteProps["components"] = {
  h2: (props) => (
    <h2 className="font-display text-2xl tracking-tight text-navy-900" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-display text-xl tracking-tight text-navy-900" {...props} />
  ),
  a: (props) => (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  ),
  Figure: (props: { src?: string; alt?: string; label?: string }) => (
    <figure className="my-8">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <ImagePlaceholder src={props.src} alt={props.alt ?? ""} label={props.label} sizes="(min-width: 768px) 42rem, 100vw" />
      </div>
      {props.alt ? (
        <figcaption className="mt-2 text-sm text-mist">{props.alt}</figcaption>
      ) : null}
    </figure>
  ),
};

export function renderMdx(source: string) {
  return compileMDX({ source, components, options: { parseFrontmatter: false } });
}
