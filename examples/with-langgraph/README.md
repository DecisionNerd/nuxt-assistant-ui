# LangGraph Example

[Hosted Demo](https://assistant-ui-langgraph.vercel.app/)

This example demonstrates how to use LangChain LangGraph with assistant-ui to create an interactive stockbroker agent.

## Overview

This project showcases the integration between:
- **assistant-ui**: A React-based UI framework for building AI chat interfaces
- **LangGraph**: A LangChain framework for building structured agents and workflows
- **LangGraphJS**: A JavaScript/TypeScript implementation of LangGraph

## Detailed Architecture

### Frontend Architecture
The frontend is built using Next.js 14 with the following key components:

#### API Layer (`app/api/`)
```typescript
/**
 * Handles API routing and communication with the LangGraph backend
 * - Implements CORS headers for cross-origin requests
 * - Manages API authentication via x-api-key
 * - Handles request/response streaming
 * - Error handling and status code management
 */
```

#### Chat Interface (`components/chat/`)
```typescript
/**
 * Manages the chat UI and interaction flow
 * - Real-time message streaming using Server-Sent Events (SSE)
 * - Message history management and persistence
 * - Typing indicators and loading states
 * - Error handling and retry mechanisms
 */
```

#### State Management
```typescript
/**
 * Handles application state using React Context
 * - Chat history persistence
 * - User session management
 * - Agent configuration state
 * - UI theme and preferences
 */
```

### Backend Integration

#### LangGraph Agent Configuration
```typescript
/**
 * Defines the stockbroker agent's capabilities and workflow
 * - Market analysis tools integration
 * - Natural language processing for financial queries
 * - Trading simulation logic
 * - Historical data access and analysis
 */
```

#### API Endpoints
```typescript
/**
 * Available endpoints for agent interaction:
 * 
 * POST /api/chat
 * - Initiates or continues a chat session
 * - Accepts: { message: string, history?: Message[] }
 * - Returns: StreamingResponse<AgentResponse>
 * 
 * GET /api/market-data
 * - Retrieves current market information
 * - Returns: MarketData
 * 
 * POST /api/execute-trade
 * - Simulates trade execution
 * - Accepts: { symbol: string, amount: number, type: 'buy' | 'sell' }
 * - Returns: TradeConfirmation
 */
```

## Project Structure

```
examples/with-langgraph/
├── app/                    # Next.js application code
│   ├── api/               # API route handlers
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main chat interface
├── components/            # React components
│   ├── chat/             # Chat-related components
│   │   ├── ChatInput.tsx    # Message input component
│   │   ├── ChatMessage.tsx  # Message display component
│   │   └── ChatWindow.tsx   # Main chat container
│   └── ui/               # Shared UI components
├── lib/                  # Utility functions and helpers
│   ├── api.ts           # API client functions
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Shared utilities
├── public/              # Static assets
└── types/               # Global type declarations
```

## Environment Setup

You need to set the following environment variables:

```env
NEXT_PUBLIC_API_URL=https://stockbrokeragent-bracesprouls-projects.vercel.app/api
NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID=stockbroker
```

- `NEXT_PUBLIC_API_URL`: Points to the LangGraph backend service
- `NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID`: Identifies the specific agent configuration

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```
3. Create a `.env.local` file with the required environment variables
4. Start the development server:
```sh
npm run dev
```

## Key Features

### Real-time Message Streaming
```typescript
/**
 * Implements Server-Sent Events (SSE) for real-time message streaming
 * - Chunked response handling
 * - Automatic reconnection
 * - Backpressure handling
 * - Progress indicators
 */
```

### Structured Agent Responses
```typescript
/**
 * Handles various response types from the agent:
 * - Market analysis results
 * - Investment recommendations
 * - Error messages
 * - Trading confirmations
 * - System messages
 */
```

### Market Analysis
```typescript
/**
 * Provides comprehensive market analysis features:
 * - Technical indicators
 * - Trend analysis
 * - Risk assessment
 * - Market sentiment analysis
 */
```

## Resources

- [assistant-ui Documentation](https://github.com/assistant-chat/assistant-ui)
- [LangGraph Documentation](https://python.langchain.com/docs/langgraph)
- [LangGraphJS Examples](https://github.com/bracesproul/langgraphjs-examples)

## Error Handling

```typescript
/**
 * Implements comprehensive error handling:
 * - Network errors
 * - API rate limiting
 * - Invalid responses
 * - Authentication failures
 * - Stream interruptions
 */
```

## Performance Optimization

```typescript
/**
 * Implements various performance optimizations:
 * - Message batching
 * - Response caching
 * - Lazy loading of components
 * - Resource prefetching
 * - Memory management
 */
```

## License

This project is licensed under the MIT License.