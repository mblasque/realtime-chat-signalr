docker run -d --rm -p 5173:5173 --name chatclient chatclient:1.0.0
docker run -d --rm -p 5000:80 --name chatapi chatapi:1.0.0
Start-Process http://localhost:5173/