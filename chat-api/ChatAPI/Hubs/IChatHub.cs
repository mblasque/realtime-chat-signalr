using ChatAPI.Models;

namespace ChatAPI.Hubs
{
    public interface IChatHub
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
