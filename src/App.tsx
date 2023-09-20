import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const excerpts = [
  ["Tomorrow,", "and", "tomorrow,", "and", "tomorrow,", "Creeps", "in", "this", "petty", "pace", "from", "day", "to", "day,", "To", "the", "last", "syllable", "of", "recorded", "time;", "And", "all", "our", "yesterdays", "have", "lighted", "fools", "The", "way", "to", "dusty", "death.", "Out,", "out,", "brief", "candle!", "Life's", "but", "a", "walking", "shadow,", "a", "poor", "player", "That", "struts", "and", "frets", "his", "hour", "upon", "the", "stage,", "And", "then", "is", "heard", "no", "more:", "it", "is", "a", "tale", "Told", "by", "an", "idiot,", "full", "of", "sound", "and", "fury,", "Signifying", "nothing."],
  ["Speak", "the", "speech,", "I", "pray", "you,", "as", "I", "pronounced", "it", "to", "you,", "trippingly", "on", "the", "tongue;", "but", "if", "you", "mouth", "it,", "as", "many", "of", "our", "players", "do,", "I", "had", "as", "lief", "the", "town-crier", "spoke", "my", "lines.", "Nor", "do", "not", "saw", "the", "air", "too", "much", "with", "your", "hand,", "thus,", "but", "use", "all", "gently;", "for", "in", "the", "very", "torrent,", "tempest,", "and,", "as", "I", "may", "say,", "whirlwind", "of", "passion,", "you", "must", "acquire", "and", "beget", "a", "temperance", "that", "may", "give", "it", "smoothness."],
  ["Now", "I", "want", "Spirits", "to", "enforce,", "art", "to", "enchant,", "And", "my", "ending", "is", "despair,", "Unless", "I", "be", "reliev'd", "by", "prayer,", "Which", "pierces", "so", "that", "it", "assaults", "Mercy", "itself,", "and", "frees", "all", "faults.", "As", "you", "from", "crimes", "would", "pardon'd", "be,", "Let", "your", "indulgence", "set", "me", "free."],
]

function App() {
  const [excerpt, setExcerpt] = useState<string[]>(excerpts[Math.floor(Math.random() * excerpts.length)])
  return (
    <div>
      <p>
      {
        excerpt.map((word: string) => { return <>{ word }{" "}</>})
      }
      </p>
    </div>
  )

 
}

export default App
