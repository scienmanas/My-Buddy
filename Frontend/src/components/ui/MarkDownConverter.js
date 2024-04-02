import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize"; // Sanitizes HTML in Markdown
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkBreaks from "remark-breaks"; // Support for soft line breaks
import remarkDirective from "remark-directive"; // Directive support
import remarkEmoji from "remark-emoji"; // Emoji support
import remarkFootnotes from "remark-footnotes"; // Support for footnotes
import remarkFrontmatter from "remark-frontmatter"; // Frontmatter support
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import remarkMath from "remark-math";
import remarkSlug from "remark-slug";

export default function MarkDownConverter(props) {
  return (
    <div className="text-white">
      <Markdown
        remarkPlugins={[
          remarkGfm,
          remarkMath,
          remarkSlug,
          remarkAutolinkHeadings,
          remarkFootnotes,
          remarkEmoji,
          remarkBreaks,
          remarkFrontmatter,
          remarkDirective,
          remarkImages,
        ]}
        rehypePlugins={[
          rehypeKatex,
          rehypeRaw,
          rehypeHighlight,
          rehypeSanitize,
        ]}
      >
        {props.chat}
      </Markdown>
    </div>
  );
}
