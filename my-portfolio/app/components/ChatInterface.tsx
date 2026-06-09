'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hey! What would you like to know?",
}

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*[^*]+\*\*|\*[^*]+\*)/g)
  const result: React.ReactNode[] = []
  let i = 0
  while (i < parts.length) {
    const part = parts[i]
    if (!part) { i++; continue }
    if (part.startsWith('[') && part.includes('](')) {
      const label = parts[i + 1]
      const href = parts[i + 2]
      result.push(
        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity">
          {label}
        </a>
      )
      i += 3
    } else if (part.startsWith('**') && part.endsWith('**')) {
      result.push(<strong key={i}>{part.slice(2, -2)}</strong>)
      i++
    } else if (part.startsWith('*') && part.endsWith('*')) {
      result.push(<em key={i}>{part.slice(1, -1)}</em>)
      i++
    } else {
      result.push(part)
      i++
    }
  }
  return result
}

function MarkdownMessage({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (/^[-*]\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s/, ''))
        i++
      }
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-0.5 my-1 pl-1">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (line.trim() === '') {
      if (elements.length > 0) elements.push(<div key={elements.length} className="h-1" />)
      i++
      continue
    }

    elements.push(<p key={elements.length}>{renderInline(line)}</p>)
    i++
  }

  return <>{elements}</>
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textQueueRef = useRef('')
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fetchDoneRef = useRef(false)

  useEffect(() => {
    if (messages.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages.length])

  const drainQueue = useCallback(() => {
    if (!textQueueRef.current) {
      animTimerRef.current = null
      if (fetchDoneRef.current) setStreaming(false)
      return
    }
    const toAdd = textQueueRef.current.slice(0, 2)
    textQueueRef.current = textQueueRef.current.slice(2)
    setMessages((prev) => {
      const last = prev[prev.length - 1]
      return [...prev.slice(0, -1), { ...last, content: last.content + toAdd }]
    })
    animTimerRef.current = setTimeout(drainQueue, 15)
  }, [])

  const enqueueText = useCallback((text: string) => {
    textQueueRef.current += text
    if (!animTimerRef.current) {
      animTimerRef.current = setTimeout(drainQueue, 0)
    }
  }, [drainQueue])

  const handleSend = async () => {
    if (!input.trim() || streaming) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    const messagesWithUser = [...messages, userMessage]
    setMessages([...messagesWithUser, { role: 'assistant', content: '' }])
    setInput('')
    setStreaming(true)
    textQueueRef.current = ''
    fetchDoneRef.current = false
    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current)
      animTimerRef.current = null
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messagesWithUser.slice(1) }),
      })

      if (!response.ok || !response.body) throw new Error('Request failed')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        enqueueText(decoder.decode(value, { stream: true }))
      }

      fetchDoneRef.current = true
      if (!animTimerRef.current) setStreaming(false)
    } catch {
      if (animTimerRef.current) {
        clearTimeout(animTimerRef.current)
        animTimerRef.current = null
      }
      textQueueRef.current = ''
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ])
      setStreaming(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
      {/* Chat header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Chat with me!</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Ask about my hobbies, career &amp; personal life</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 min-h-80 max-h-100">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm'
              }`}
            >
              {msg.role === 'assistant' ? (
                msg.content === '' ? (
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                ) : (
                  <MarkdownMessage content={msg.content} />
                )
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
        <div className="flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || streaming}
            aria-label="Send message"
            className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 active:bg-blue-800 transition-colors shrink-0"
          >
            <svg className="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-400 text-center">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}
