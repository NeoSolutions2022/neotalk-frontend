import WelcomeHero from "@/components/welcome/WelcomeHero";

const Index = () => {
  return <WelcomeHero />;
};

export default Index;

// import { useState, useRef } from "react";
// import { InteractionPanel } from "@/components/InteractionPanel";
// import { ChatArea } from "@/components/ChatArea";
// import { AvatarPanel } from "@/components/AvatarPanel";
// import { TurnToggle } from "@/components/TurnToggle";
// import { Message, TurnMode } from "@/types";
// import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useIsMobile } from "@/hooks/use-mobile";

// const Index = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 1,
//       text: "Olá, como posso ajudar?",
//       sender: "system",
//       timestamp: "10:00",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [currentMessage, setCurrentMessage] = useState<string>();
//   const [isTranslating, setIsTranslating] = useState(false);
//   const [turnMode, setTurnMode] = useState<TurnMode>("hearing");
//   const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
//   const chatEndRef = useRef<HTMLDivElement>(null);
//   const isMobile = useIsMobile();

//   const handleSuggestionClick = (suggestion: string) => {
//     setCurrentMessage(suggestion);
//     setIsTranslating(true);
//     // Simulate translation delay
//     setTimeout(() => {
//       setIsTranslating(false);
//       handleSendMessage(suggestion);
//     }, 2000);
//   };

//   const handleSendMessage = (text: string) => {
//     const newMessage: Message = {
//       id: Date.now(),
//       text,
//       sender: "user",
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages((prev) => [...prev, newMessage]);
//     setCurrentMessage(undefined);
//     setIsTyping(true);

//     // Simulate response
//     setTimeout(() => {
//       const response: Message = {
//         id: Date.now(),
//         text: "Entendi sua mensagem. Como posso ajudar mais?",
//         sender: "system",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };
//       setMessages((prev) => [...prev, response]);
//       setIsTyping(false);
//     }, 2000);
//   };

//   const handleTurnToggle = () => {
//     setTurnMode((prev) => (prev === "hearing" ? "deaf" : "hearing"));
//     if (typeof navigator?.vibrate === 'function') {
//       navigator.vibrate(200); // Vibrate for 200ms on turn change
//     }
//   };

//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   if (isMobile) {
//     return (
//       <div className="mobile-layout">
//         <div className="mobile-chat-area">
//           <div className="sticky top-0 p-4 border-b bg-background z-30">
//             <TurnToggle currentTurn={turnMode} onToggle={handleTurnToggle} />
//           </div>
//           <ChatArea messages={messages} isTyping={isTyping} />
//           <div ref={chatEndRef} />
//         </div>

//         <div className={`mobile-avatar ${isAvatarExpanded ? 'expanded' : ''}`}>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute top-2 right-2 z-50"
//             onClick={() => setIsAvatarExpanded(!isAvatarExpanded)}
//           >
//             {isAvatarExpanded ? (
//               <ChevronDown className="h-4 w-4" />
//             ) : (
//               <ChevronUp className="h-4 w-4" />
//             )}
//           </Button>
//           <AvatarPanel
//             currentMessage={currentMessage}
//             turnMode={turnMode}
//             isTranslating={isTranslating}
//           />
//         </div>

//         <Button
//           className="mobile-scroll-button"
//           size="icon"
//           onClick={scrollToBottom}
//         >
//           <ArrowDown className="h-4 w-4" />
//         </Button>

//         <div className="mobile-controls">
//           <InteractionPanel
//             onSuggestionClick={handleSuggestionClick}
//             onSendMessage={handleSendMessage}
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-background">
//       <div className="w-80">
//         <InteractionPanel
//           onSuggestionClick={handleSuggestionClick}
//           onSendMessage={handleSendMessage}
//         />
//       </div>
//       <div className="flex-1 flex flex-col">
//         <div className="p-4 border-b bg-background">
//           <TurnToggle currentTurn={turnMode} onToggle={handleTurnToggle} />
//         </div>
//         <div className="flex-1">
//           <ChatArea messages={messages} isTyping={isTyping} />
//         </div>
//       </div>
//       <div className="w-80">
//         <AvatarPanel 
//           currentMessage={currentMessage}
//           turnMode={turnMode}
//           isTranslating={isTranslating}
//         />
//       </div>
//     </div>
//   );
// };

// export default Index;




