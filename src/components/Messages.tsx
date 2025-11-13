// src/components/Messages.tsx
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { Message } from "../types/dashboard";

interface MessagesProps {
  messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="w-[324px] h-[754px] pl-6 bg-[#f9f9f9] rounded-tl-[92px] px-5 overflow-y-auto">
      <Card className="h-full bg-[#f9f9f9]">
        <CardHeader className="pb-0 sticky flex justify-between mx-auto w-[80%] top-20 h-8 border-b z-10 bg-[#f9f9f9]">
          <CardTitle className="text-base text-gray-300">Stats</CardTitle>
          <CardTitle className="text-base">Messages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-20 overflow-y-auto max-h-[calc(100vh-200px)]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex flex-col items-start space-x-3 p-3 bg-white rounded-lg"
            >
              <div className="w-full flex items-center justify-between mb-1 px-2">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback
                    className={`${msg.color} text-white text-xs font-medium`}
                  >
                    {msg.avatar}
                  </AvatarFallback>
                </Avatar>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 ml-2">{msg.time}</span>
                </div>
              </div>
              <div className="w-full min-w-0 flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-3">
                  <span className="text-[14px] font-medium text-gray-900 truncate">
                    {msg.name}
                  </span>
                  <p className="text-xs text-gray-600 truncate">
                    {msg.message}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;
