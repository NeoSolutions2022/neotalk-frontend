import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

export function TranslateFeedback() {
  const [feedback, setFeedback] = React.useState<"positive" | "negative" | null>(null);
  const [details, setDetails] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback) {
      toast({
        title: "Avaliação necessária",
        description: "Por favor, selecione se a tradução foi correta ou não.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", { feedback, details });
    
    toast({
      title: "Feedback enviado!",
      description: "Obrigado por nos ajudar a melhorar a experiência.",
    });

    // Reset form
    setFeedback(null);
    setDetails("");
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Como foi a qualidade desta tradução?</h2>
          
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant={feedback === "positive" ? "default" : "outline"}
                className="flex items-center gap-2 p-6"
                onClick={() => setFeedback("positive")}
              >
                <ThumbsUp className="h-6 w-6" />
                <span>Tradução Correta</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant={feedback === "negative" ? "default" : "outline"}
                className="flex items-center gap-2 p-6"
                onClick={() => setFeedback("negative")}
              >
                <ThumbsDown className="h-6 w-6" />
                <span>Tradução com Problema</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {feedback === "negative" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <label className="block text-lg font-medium">
              Nos diga o que deu errado (opcional)
            </label>
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: Tradução estava muito lenta, Erro na conversão de Libras para texto..."
              className="min-h-[100px]"
            />
          </motion.div>
        )}

        <div className="flex justify-end">
          <Button type="submit" className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Enviar Feedback
          </Button>
        </div>
      </form>
    </Card>
  );
}