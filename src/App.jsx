import { useState } from 'react'
import { Eye, EyeOff, HelpCircle } from 'lucide-react'

function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleUnlock = () => {
    console.log('Password entered:', password)
  }

  return (
    <div className="min-h-screen bg-[#0c0c0f] flex flex-col items-center justify-center px-4 animate-fade-in">
      {/* Header with border */}
      <div className="absolute top-0 left-0 right-0 border-b border-gray-800/50 bg-[#0c0c0f]/80 backdrop-blur-sm">
        <div className="max-w-md mx-auto flex items-center justify-between px-6 py-4">
          {/* App name */}
          <h1 className="text-lg font-light text-[#d1d5db] tracking-[0.2em] uppercase">
            phantom
          </h1>
          
          {/* Help icon */}
          <button
            className="text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="Help"
          >
            <HelpCircle size={18} />
          </button>
        </div>
      </div>

      {/* Logo - Phantom ghost with transparent background */}
      <div className="mb-8">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0f0f5" />
            </linearGradient>
          </defs>
          {/* Ghost body - clean, no background */}
          <path
            d="M45 14C30.8 14 14 30.8 14 45C14 56.8 18.8 66.2 24.6 71L24.6 84L33 78.4L37.2 81.6L43.2 75.6C46.8 79.2 52.2 81.2 58.8 81.2C65.4 81.2 71.8 79.2 75.4 75.6L81.4 81.6L85.6 78.4L94 84L94 71C99.8 66.2 104.6 56.8 104.6 45C104.6 30.8 88.8 14 75.6 14C72 14 68.4 14.2 65 14.9C65 14.9 64.4 15 64.4 15L64.3 15C64.2 15 64.1 14.9 64.1 14.9C61.5 14.2 58 14 54.4 14C50.8 14 47.3 14.2 43.8 14.9C43.8 14.9 43.2 15 43.2 15L43.1 15C43 15 42.9 14.9 42.9 14.9C40.3 14.2 36.8 14 33.2 14C29.6 14 26.1 14.2 22.6 14.9C22.6 14.9 22 15 22 15L21.9 15C21.8 15 21.7 14.9 21.7 14.9C19.1 14.2 15.6 14 12 14C8.4 14 8 14.2 8 14.9C8 15.2 8.1 15.6 8.1 16C8.2 16.4 8.3 16.8 8.3 17.2C8.3 17.6 8.4 18 8.4 18.4C8.4 20.2 8.6 21.9 8.6 23.7C8.6 25.5 8.8 27.3 8.8 29.1C8.8 30.9 8.9 32.7 8.9 34.5C8.9 36.3 9.1 38.1 9.1 39.9C9.1 41.7 9.2 43.5 9.2 45.3C9.2 47.1 9.4 48.9 9.4 50.7C9.4 52.5 9.5 54.3 9.5 56.1C9.5 57.9 9.7 59.7 9.7 61.5C9.7 63.3 9.8 65.1 9.8 66.9C9.8 68.7 10 70.5 10 72.3C10 74.1 10.1 75.9 10.1 77.7C10.1 79.5 10.3 81.3 10.3 83.1C10.3 84.9 10.4 86.7 10.4 88.5"
            fill="url(#logoGradient)"
          />
          {/* Eyes */}
          <ellipse cx="26" cy="40" rx="6" ry="7" fill="#0c0c0f" />
          <ellipse cx="64" cy="40" rx="6" ry="7" fill="#0c0c0f" />
          {/* Mouth */}
          <ellipse cx="45" cy="56" rx="6" ry="6" fill="#0c0c0f" />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="text-lg md:text-xl text-white mb-8 font-normal">
        Enter your password
      </h2>

      {/* Password Input */}
      <div className="w-full max-w-xs mb-6">
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            className="password-input w-full bg-[#1a1a1f] border border-[#2a2a2f] rounded-lg px-5 py-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-[#a78bfa] focus:ring-1 focus:ring-[#a78bfa] transition-all duration-200"
            aria-label="Password"
          />
          
          {/* Toggle Password Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none p-1 rounded transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Unlock Button */}
      <button
        onClick={handleUnlock}
        className="w-full max-w-xs bg-[#a78bfa] hover:bg-[#b894f5] text-gray-900 font-medium rounded-full py-3 px-6 mb-5 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0c0c0f] transition-all duration-200 active:scale-95"
        aria-label="Unlock with entered password"
      >
        Unlock
      </button>

      {/* Forgot Password */}
      <a
        href="#forgot"
        className="text-xs text-gray-500 hover:text-gray-300 hover:underline transition-colors duration-200"
        onClick={(e) => {
          e.preventDefault()
          console.log('Forgot password clicked')
        }}
      >
        Forgot password?
      </a>
    </div>
  )
}

export default App
