'use client';

import { useState } from 'react';

type Holiday = 'christmas' | 'newyear';
type Tone = 'warm' | 'funny' | 'professional';

export default function Landing() {
  const [recipientName, setRecipientName] = useState('');
  const [holiday, setHoliday] = useState<Holiday>('christmas');
  const [tone, setTone] = useState<Tone>('warm');
  const [greeting, setGreeting] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateGreeting = () => {
    setIsGenerating(true);
    
    // Simulate AI generation with a brief delay
    setTimeout(() => {
      const greetings = {
        christmas: {
          warm: [
            `Wishing you a magical Christmas filled with joy and love, ${recipientName || 'friend'}! 🎄✨`,
            `May your Christmas sparkle with moments of love and laughter, ${recipientName || 'friend'}! 🎅❤️`,
            `Sending you warm wishes for a wonderful Christmas, ${recipientName || 'friend'}! 🎁🌟`
          ],
          funny: [
            `Ho ho hope you have an awesome Christmas, ${recipientName || 'friend'}! Don't eat all the cookies! 🍪🎅`,
            `Dear ${recipientName || 'friend'}, may your Christmas be merry and your family drama be minimal! 😄🎄`,
            `${recipientName || 'Friend'}, remember: calories don't count during Christmas! Enjoy! 🎄🍰`
          ],
          professional: [
            `Wishing you and your loved ones a joyful Christmas season, ${recipientName || 'friend'}. 🎄`,
            `Season's greetings, ${recipientName || 'friend'}. May this Christmas bring you peace and prosperity. ✨`,
            `Happy holidays, ${recipientName || 'friend'}. Wishing you success and happiness this Christmas. 🎁`
          ]
        },
        newyear: {
          warm: [
            `Happy New Year, ${recipientName || 'friend'}! May 2024 bring you endless joy and beautiful moments! 🎉✨`,
            `Cheers to new beginnings, ${recipientName || 'friend'}! Wishing you a fantastic year ahead! 🥂🌟`,
            `Here's to a bright and wonderful New Year, ${recipientName || 'friend'}! 🎊💫`
          ],
          funny: [
            `New Year, new me... just kidding, ${recipientName || 'friend'}! Same awesome us! 🎉😄`,
            `${recipientName || 'Friend'}, may your resolutions last longer than your holiday leftovers! 🎊😂`,
            `Happy New Year, ${recipientName || 'friend'}! Let's pretend we'll actually go to the gym this time! 💪😅`
          ],
          professional: [
            `Wishing you a prosperous and successful New Year, ${recipientName || 'friend'}. 🎊`,
            `Happy New Year, ${recipientName || 'friend'}. May 2024 bring you continued success. 🥂`,
            `Best wishes for a productive and fulfilling New Year, ${recipientName || 'friend'}. ✨`
          ]
        }
      };

      const options = greetings[holiday][tone];
      const randomGreeting = options[Math.floor(Math.random() * options.length)];
      setGreeting(randomGreeting);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-red-900 via-green-900 to-blue-900">
      {/* Snowflakes effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              fontSize: `${10 + Math.random() * 10}px`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600 mb-3">
            🎄 Holiday Greetings AI 🎊
          </h1>
          <p className="text-center text-gray-600 mb-8">Generate personalized festive messages</p>

          <div className="space-y-6">
            {/* Recipient Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Name (optional)
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Enter name..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Holiday Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Holiday
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHoliday('christmas')}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    holiday === 'christmas'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🎄 Christmas
                </button>
                <button
                  onClick={() => setHoliday('newyear')}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    holiday === 'newyear'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🎊 New Year
                </button>
              </div>
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setTone('warm')}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    tone === 'warm'
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ❤️ Warm
                </button>
                <button
                  onClick={() => setTone('funny')}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    tone === 'funny'
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  😄 Funny
                </button>
                <button
                  onClick={() => setTone('professional')}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    tone === 'professional'
                      ? 'bg-gray-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  💼 Professional
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateGreeting}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white font-bold py-4 rounded-lg hover:from-green-700 hover:to-red-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? '✨ Generating...' : '🎁 Generate Greeting'}
            </button>

            {/* Generated Greeting */}
            {greeting && (
              <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-red-50 border-2 border-green-200 rounded-lg">
                <p className="text-lg text-gray-800 text-center leading-relaxed">
                  {greeting}
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(greeting)}
                  className="mt-4 w-full bg-white text-green-700 font-medium py-2 rounded-lg hover:bg-gray-50 transition border border-green-300"
                >
                  📋 Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

