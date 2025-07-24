# AI Avatar Tutorial - Turn Yourself into an AI Avatar

Create your own AI avatar with real-time face tracking, voice synthesis, and conversational AI. This project demonstrates how to build an interactive AI avatar that can respond to your voice and mirror your facial expressions in real-time.

## 🚀 Features

- **Real-time Face Tracking**: Advanced facial recognition that captures your expressions
- **Voice Synthesis**: Natural voice cloning that sounds exactly like you
- **AI Conversation**: Intelligent responses powered by cutting-edge language models
- **Real-time Processing**: Instant response with minimal latency for natural interaction

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **AI Services**: 
  - Simli AI (facial animation)
  - ElevenLabs (voice synthesis)
  - OpenAI (conversation)
  - Deepgram (speech-to-text)
- **Styling**: Tailwind CSS
- **Real-time**: WebSocket connections

## 📋 Prerequisites

Before you begin, ensure you have the following API keys:

- **Simli AI API Key** (`NEXT_PUBLIC_SIMLI_API_KEY`)
- **ElevenLabs API Key** (`ELEVENLABS_API_KEY`)
- **OpenAI API Key** (`OPENAI_API_KEY`)
- **Deepgram API Key** (`DEEPGRAM_API_KEY`)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jb-akp/AvatarClone.git
   cd AvatarClone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   NEXT_PUBLIC_SIMLI_API_KEY=your_simli_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   OPENAI_API_KEY=your_openai_api_key
   DEEPGRAM_API_KEY=your_deepgram_api_key
   ```

4. **Start the development server**
   ```bash
   npm run start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` and start your AI avatar interaction!

## 🎯 How to Use

1. Click the "Test Interaction" button to start
2. Allow camera and microphone access when prompted
3. Speak naturally - the AI will respond in real-time
4. Your facial expressions will be mirrored by the avatar
5. Click "Stop Interaction" when finished

## 🔧 Customization

### Changing the Avatar's Personality

Edit the `initialPrompt` in `app/page.tsx`:

```typescript
const avatar: Avatar = {
  name: "Your AI Avatar",
  simli_faceid: "your_face_id",
  elevenlabs_voiceid: "your_voice_id",
  initialPrompt: "You are [your personality description here]...",
};
```

### Changing the Avatar's Face

Replace the `simli_faceid` with your own face ID from Simli AI.

### Changing the Avatar's Voice

Replace the `elevenlabs_voiceid` with your own voice ID from ElevenLabs.

## 📚 Tutorial

This project is designed to accompany the tutorial "Turn Yourself into an AI Avatar — Real Face, Real Voice, Real-Time." Follow along to learn how to:

- Set up the development environment
- Configure AI services
- Customize your avatar's personality
- Deploy your AI avatar application

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the AI community

