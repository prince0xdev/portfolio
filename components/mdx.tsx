import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { cn } from "@/lib/utils";
import { Pre } from '@/components/CodeBlock'
type TableProps = {
    data: { 
      headers: string[]; 
      rows: string[][] 
    }
  };
  
  function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
      <th key={index} className="border-b p-4 pt-0 pb-3 text-left font-medium">
        {header}
      </th>
    ));
    
  
    return (
        <div className="my-6 w-full overflow-auto rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10">
          <table className="w-full border-collapse text-sm text-left">
            <thead className="bg-gray-100 dark:bg-neutral-800">
              <tr>
                {headers}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`transition-colors duration-200 ${
                    rowIndex % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-gray-50 dark:bg-neutral-800'
                  } hover:bg-blue-50 dark:hover:bg-neutral-700`}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }

// ✅ Lien stylisé
const CustomLink = (props: any) => {
  const { href, children } = props
  if (href.startsWith('/')) {
    return (
      <Link href={href} className="text-blue-600 hover:underline dark:text-blue-400" {...props}>
        {children}
      </Link>
    )
  }
  if (href.startsWith('#')) {
    return <a {...props} className="text-blue-600 hover:underline dark:text-blue-400" />
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline dark:text-blue-400"
      {...props}
    />
  )
}
function RoundedImage(props: Omit<React.ComponentProps<typeof Image>, "alt"> & { 
    alt: string;
  }) {
    return (
      <div className="my-6 overflow-hidden rounded-lg border bg-secondary/20">
        <Image 
          {...props}
          alt={props.alt}
          width={'400'}
          height={200}
          className={cn("w-full", props.className)}
        />
      </div>
    );
  }

// ✅ Code inline
const Code = ({ children, ...props }: { children: string }) => {
  const codeHTML = highlight(children)
  return (
    <code
      className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-pink-600 font-mono text-sm"
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  )
}



// ✅ Citation
const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700 dark:text-neutral-300 my-4">
    {children}
  </blockquote>
)

// ✅ Génération de titres avec ancres (h1, h2, ...)
const slugify = (str: string): string =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')

const createHeading = (level: number) => {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `group scroll-mt-24 text-${level === 1 ? '3xl' : level === 2 ? '2xl' : 'xl'} font-bold mt-8 mb-4`,
      },
      [
        children,
      ]
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

// ✅ Déclaration des composants
const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Image: RoundedImage,
  code: Code,
  pre: Pre,
  blockquote: Blockquote,
  Table,
  ul: (props: any) => <ul className="list-disc ml-10 my-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-10 my-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  p: (props: any) => <p className="my-4 leading-7 text-neutral-800 dark:text-neutral-200" {...props} />,
}

// ✅ Composant final
export const CustomMDX = (props: any) => {
  return (
    <div className="prose dark:prose-invert max-w-none prose-img:mx-auto">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  )
}
