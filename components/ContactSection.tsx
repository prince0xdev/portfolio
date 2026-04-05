'use client'

import { useState } from 'react'
import { BlurFade } from './magicui/blur-fade'
import { SectionLabel } from './SectionLabel'
import { Send } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="flex flex-col gap-4 pb-24">
      <BlurFade delay={0.1} inView>
        <SectionLabel>Contact</SectionLabel>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Une idée, un projet, une collaboration ?{' '}
          <span className="text-foreground">Écris-moi.</span>
        </p>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor='name' className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Nom
              </label>
              <input
                type="text"
                name='name'
                id='name'
                value={form.name}
                onChange={set('name')}
                placeholder="Prince Ekpinse"
                disabled={status === 'loading'}
                className="w-full p-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor='email' className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                name='email'
                id='email'
                value={form.email}
                onChange={set('email')}
                placeholder="Entrer votre adresse email ici"
                disabled={status === 'loading'}
                
                className="w-full p-3 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={5}
              name='message'
              id="message"
              value={form.message}
              onChange={set('message')}
              placeholder="Bonjour Prince, j'aimerais..."
              disabled={status === 'loading'}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gray-300/60 focus:ring-1 focus:ring-gray-300/20 transition-all resize-none disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === 'loading' || !form.name || !form.email || !form.message}
            className="group self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin size-3.5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Envoi…
              </>
            ) : (
              <>
                <Send className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Envoyer
              </>
            )}
          </button>
          {status === 'success' && (
            <p className="text-xs text-emerald-500 flex items-center gap-1.5">
              <svg className="size-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Message envoyé, je reviendrai vers toi bientôt.
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-500 flex items-center gap-1.5">
              <svg className="size-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" clipRule="evenodd" /></svg>
              Une erreur est survenue. Réessaie ou écris-moi directement.
            </p>
          )}

        </div>
      </BlurFade>
    </section>
  )
}