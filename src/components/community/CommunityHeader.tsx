import { MessageSquare } from "lucide-react";

export function CommunityHeader() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <MessageSquare className="h-8 w-8 text-neotalk-primary" />
        <h1 className="text-4xl font-bold">Bem-vindo à Comunidade NeoTalk!</h1>
      </div>
      <p className="text-muted-foreground text-lg">
        Compartilhe experiências, tire dúvidas e conecte-se com outros usuários da plataforma.
      </p>
    </div>
  );
}