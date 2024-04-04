import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize'; // Sanitizes HTML in Markdown
import remarkFootnotes from 'remark-footnotes'; // Support for footnotes
import remarkEmoji from 'remark-emoji'; // Emoji support
import remarkBreaks from 'remark-breaks'; // Support for soft line breaks
import remarkFrontmatter from 'remark-frontmatter'; // Frontmatter support
import remarkDirective from 'remark-directive'; // Directive support
import remarkImages from 'remark-images'; 

export default function MarkDownConverter(props) {
    return (
        <div className="text-wrap flex flex-wrap">
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
                    remarkImages
                ]}
                rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight, rehypeSanitize]}
            >
                {props.chat}
            </Markdown>
        </div>
    );
}
