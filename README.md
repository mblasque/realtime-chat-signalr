# .NET + React.Js Realtime Chat with SignalR

## Prerequisites

- .NET 7.0 SDK
- Docker (with Linux support)

## How to run

### Using docker desktop:

- Open PowerShell with admin rights in the repo folder
- Run `docker-build.ps1` script (if it is the first time or after code changes)
- Run `docker-run.ps1` and the browser will open

### Without docker:

- Go to /chat-api/ChatAPI
- Run `dotnet run`
- Go to /chat-client
- Run `npm install`
- Run `npm run dev`
