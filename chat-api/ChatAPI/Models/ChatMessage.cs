﻿namespace ChatAPI.Models
{
    public class ChatMessage
    {
        public Guid Id { get; set; }
        public string User { get; set; }
        public string Message { get; set; }
    }
}
