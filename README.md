# Signalist - Stock Tracking & Analytics Platform 📈

Signalist is a modern stock tracking application built with Next.js 14, offering real-time market data, personalized watchlists, and smart alerts. Monitor your favorite stocks, analyze market trends, and make informed investment decisions with our intuitive interface.


## ✨ Features

- **Real-time Stock Data**: Live prices, market caps, and key metrics powered by Finnhub API
- **Smart Watchlists**: Create and manage personalized stock watchlists with real-time updates
- **Interactive Charts**: TradingView integration for professional-grade stock analysis
- **Daily News Updates**: Receive personalized daily email digests of market news relevant to your watchlist
- **User Authentication**: Secure email-based authentication system
- **Responsive Design**: Seamless experience across desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js Server Actions, MongoDB with Mongoose
- **Authentication**: Custom auth system with email/password
- **APIs**: Finnhub for market data, TradingView for charts
- **Deployment**: Vercel
- **Background Jobs**: Inngest for AI-powered email automation (welcome emails, daily news)

## 🚀 Getting Started

### Prerequisites

1. Node.js 18+ installed
2. MongoDB database (local or Atlas)
3. Finnhub API key (get one at [finnhub.io](https://finnhub.io))
4. Inngest CLI (will be used for background jobs)

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/Maanav-1/Signalist_stock-tracker-app.git
cd Signalist_stock-tracker-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your environment variables:
```bash
# API Keys
FINNHUB_API_KEY=your_finnhub_key

# Database
MONGODB_URI=your_mongodb_uri

# Auth (generate secure random strings)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# Email to send summarized daily financial news 
NODEMAILER_EMAIL=your_email
NODEMAILER_PASSWORD=your_app_password
```

4. Start the development servers:
```bash
# In first terminal: Next.js dev server
npm run dev

# In second terminal: Inngest dev server for background jobs
npx inngest-cli@latest dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

Note: The Inngest dev server is required for email automation (welcome emails and daily news updates) to work locally.

## 📱 Usage

1. **Sign Up/Login**: Create an account or sign in with your email
2. **Add Stocks**: Use the search bar to find and add stocks to your watchlist
3. **Monitor**: Track real-time prices and performance on your dashboard
4. **News Updates**: Receive daily curated news emails about your watchlist stocks
5. **Analyze**: Use the interactive TradingView charts for technical analysis

## ⚡ Background Jobs (Inngest)

Inngest powers our automated email delivery system:
- **Welcome Emails**: Personalized AI-generated welcome messages when users sign up
- **Daily News Digest**: Every day at 6 AM UTC, Inngest:
  1. Fetches news relevant to each user's watchlist
  2. Uses AI to summarize and personalize the content
  3. Delivers a curated email digest of market updates
  
Route: `/api/inngest` handles these scheduled tasks and event processing


