'use client'

import { useState } from 'react'
import { Copy } from 'lucide-react'

export const Pre = ({ children }: { children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = (children as any)?.props?.children || ''
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative my-4 rounded-xl overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-md bg-white/80 dark:bg-neutral-700/80 px-2 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-100 backdrop-blur hover:bg-white dark:hover:bg-neutral-600 transition"
      >
        <Copy size={14} />
        {copied ? 'Copié !' : 'Copier'}
      </button>
      <pre className="overflow-x-auto bg-gray-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 p-4 text-sm rounded-xl">
        {children}
      </pre>
    </div>
  )
}
