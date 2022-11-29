cd ./chat-api/ChatApi
dotnet publish --os linux --arch x64
cd ..
cd ..
cd ./chat-client
docker build . -t chatclient:1.0.0
cd ..