# pip install stream-chat
import stream_chat
import datetime

server_client = stream_chat.StreamChat(
    api_key="YOUR_API_KEY", api_secret="YOUR_API_SECRET"
)

# creates a token valid for 1 hour
token = server_client.create_token('john', exp=datetime.datetime.utcnow() + datetime.timedelta(hours=1))

