import { useState, useCallback } from 'react'
import { NEETCODE_150 } from '../data'
import styles from './AIGuide.module.css'

const AI_KEY_STORAGE = 'umer_ai_key'
const AI_PROVIDER    = 'umer_ai_provider'

function loadAIKey()      { return localStorage.getItem(AI_KEY_STORAGE) || '' }
function loadAIProvider() { return localStorage.getItem(AI_PROVIDER)    || 'gemini' }

function getLCSolvedSummary() {
  try {
    const raw = localStorage.getItem('umer_lc_progress')
    if (!raw) return { solved: 0, topics: {} }
    const { solved } = JSON.parse(raw)
    const count = Object.values(solved || {}).filter(Boolean).length
    const topics = {}
    NEETCODE_150.forEach(q => {
      if (solved?.[q.id]) {
        topics[q.topic] = (topics[q.topic] || 0) + 1
      }
    })
    return { solved: count, topics }
  } catch { return { solved: 0, topics: {} } }
}

const PRESET_PROMPTS = [
  { label: '📅 Study Plan',     prompt: 'Based on my Leetcode progress, give me a focused 3-day study plan for DSA interview prep. Be specific with topics and problem types.' },
  { label: '🧠 Weak Topics',   prompt: 'Based on my solved problems, identify my weak areas and explain how to improve them with concrete steps.' },
  { label: '💡 Today\'s Focus', prompt: 'I have about 2 hours today. What should I focus on to maximize my interview readiness? Give me a concrete action plan.' },
  { label: '🚀 Motivate Me',   prompt: 'I\'m a final-year CS student at FAST NUCES preparing for software engineering interviews. Give me a motivational message with practical advice.' },
  { label: '📖 Explain DP',    prompt: 'Explain Dynamic Programming step by step with intuition first, then patterns, then a simple example. Make it stick.' },
  { label: '🌙 Islamic Wisdom', prompt: 'Give me an Islamic perspective on perseverance and seeking knowledge, with Quranic verses and a practical connection to studying.' },
]

async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.8, maxOutputTokens: 1000 },
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${res.status}`)
  }
  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.'
}

async function callOpenAI(apiKey, prompt) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful coding interview coach and Islamic life coach for a CS student. Be concise, practical, and motivating.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 800,
      temperature: 0.8,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${res.status}`)
  }
  const data = await res.json()
  return data.choices?.[0]?.message?.content || 'No response received.'
}

// Minimal markdown renderer (bold, headers, bullet lists)
function renderMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.+?)\*\*/g,   '<strong>$1</strong>')
    .replace(/^### (.+)$/gm,     '<h4>$1</h4>')
    .replace(/^## (.+)$/gm,      '<h3>$1</h3>')
    .replace(/^# (.+)$/gm,       '<h2>$1</h2>')
    .replace(/^[\-\*] (.+)$/gm,  '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n\n/g,            '<br/><br/>')
    .replace(/\n/g,              '<br/>')
}

export default function AIGuide() {
  const [apiKey,   setApiKey]   = useState(loadAIKey)
  const [provider, setProvider] = useState(loadAIProvider)
  const [prompt,   setPrompt]   = useState('')
  const [response, setResponse] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  const [showKey,  setShowKey]  = useState(false)
  const [history,  setHistory]  = useState([])

  const saveKey = (key) => {
    setApiKey(key)
    localStorage.setItem(AI_KEY_STORAGE, key)
  }
  const saveProvider = (p) => {
    setProvider(p)
    localStorage.setItem(AI_PROVIDER, p)
  }

  const buildContext = useCallback((userPrompt) => {
    const lc = getLCSolvedSummary()
    const topicStr = Object.entries(lc.topics)
      .sort((a,b) => b[1] - a[1])
      .slice(0, 5)
      .map(([t, c]) => `${t}: ${c}`)
      .join(', ')
    return `[Context: I've solved ${lc.solved}/150 Neetcode problems. My strongest topics so far: ${topicStr || 'none yet'}. I'm Umer, a CS student at FAST NUCES Karachi, graduating 2026, targeting software engineering roles.]\n\n${userPrompt}`
  }, [])

  const sendPrompt = useCallback(async (promptText) => {
    const key = apiKey.trim()
    if (!key) { setError('Please enter your API key first.'); return }
    if (!promptText.trim()) { setError('Please enter a prompt.'); return }
    setError('')
    setResponse('')
    setLoading(true)
    const fullPrompt = buildContext(promptText)
    try {
      const result = provider === 'openai'
        ? await callOpenAI(key, fullPrompt)
        : await callGemini(key, fullPrompt)
      setResponse(result)
      setHistory(h => [{ prompt: promptText, response: result, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }, ...h].slice(0, 10))
    } catch (e) {
      setError(`Error: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }, [apiKey, provider, buildContext])

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Prep Guide</h1>
          <div className={styles.subtitle}>Personalized coaching powered by AI</div>
        </div>
        <div className={styles.providerToggle}>
          <button
            id="ai-gemini"
            className={`${styles.provBtn} ${provider === 'gemini' ? styles.provActive : ''}`}
            onClick={() => saveProvider('gemini')}
          >
            ✦ Gemini
          </button>
          <button
            id="ai-openai"
            className={`${styles.provBtn} ${provider === 'openai' ? styles.provActive : ''}`}
            onClick={() => saveProvider('openai')}
          >
            ◈ OpenAI
          </button>
        </div>
      </div>

      {/* API Key section */}
      <div className={styles.keySection}>
        <div className={styles.keyLabel}>
          {provider === 'gemini' ? '🔑 Google AI Studio API Key' : '🔑 OpenAI API Key'}
          <a
            href={provider === 'gemini'
              ? 'https://aistudio.google.com/app/apikey'
              : 'https://platform.openai.com/api-keys'}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.getKey}
          >
            Get free key ↗
          </a>
        </div>
        <div className={styles.keyInputRow}>
          <input
            id="ai-key-input"
            type={showKey ? 'text' : 'password'}
            className={styles.keyInput}
            placeholder={provider === 'gemini' ? 'AIza...' : 'sk-...'}
            value={apiKey}
            onChange={e => saveKey(e.target.value)}
          />
          <button className={styles.eyeBtn} onClick={() => setShowKey(v => !v)}>
            {showKey ? '🙈' : '👁'}
          </button>
        </div>
        {apiKey && (
          <div className={styles.keyReady}>✓ Key saved to localStorage</div>
        )}
      </div>

      {/* Preset prompts */}
      <div className={styles.presets}>
        <div className={styles.presetsLabel}>Quick Prompts</div>
        <div className={styles.presetsGrid}>
          {PRESET_PROMPTS.map((p, i) => (
            <button
              key={i}
              id={`ai-preset-${i}`}
              className={styles.presetBtn}
              onClick={() => { setPrompt(p.prompt); sendPrompt(p.prompt) }}
              disabled={loading}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom prompt */}
      <div className={styles.inputSection}>
        <textarea
          id="ai-custom-prompt"
          className={styles.textarea}
          placeholder="Ask anything... e.g., 'Explain binary search with examples', 'What should I study tonight?'"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) sendPrompt(prompt)
          }}
          rows={3}
        />
        <div className={styles.inputFooter}>
          <span className={styles.hint}>Ctrl+Enter to send · Context includes your LC progress</span>
          <button
            id="ai-send"
            className={`${styles.sendBtn} ${loading ? styles.loading : ''}`}
            onClick={() => sendPrompt(prompt)}
            disabled={loading || !prompt.trim()}
          >
            {loading ? '⟳ Thinking...' : 'Send ↗'}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className={styles.error}>{error}</div>
      )}

      {/* Response */}
      {response && !loading && (
        <div className={styles.responseCard}>
          <div className={styles.responseLabel}>
            {provider === 'gemini' ? '✦ Gemini' : '◈ GPT-4o-mini'} Response
          </div>
          <div
            className={styles.responseBody}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(response) }}
          />
        </div>
      )}

      {loading && (
        <div className={styles.loadingCard}>
          <div className={styles.loadingDots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.loadingText}>AI is thinking...</div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className={styles.historySection}>
          <div className={styles.historyLabel}>Recent Conversations</div>
          {history.slice(0, 3).map((h, i) => (
            <div key={i} className={styles.histItem}>
              <div className={styles.histPrompt}>Q: {h.prompt.slice(0, 80)}{h.prompt.length > 80 ? '...' : ''}</div>
              <div className={styles.histTime}>{h.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
