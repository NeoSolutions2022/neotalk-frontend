import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
});

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log(values);
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setEmailSent(true);
      toast({
        title: "Email enviado com sucesso!",
        description:
          "Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha em instantes.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar email",
        description: "Tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (emailSent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-4"
      >
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          <p>
            Se este e-mail estiver cadastrado, você receberá um link para redefinir
            sua senha em instantes.
          </p>
        </div>
        <Link
          to="/login"
          className="text-neotalk-primary hover:underline inline-block"
        >
          Voltar para o login
        </Link>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Digite seu email"
                    type="email"
                    className="pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-neotalk-primary hover:bg-neotalk-primary/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar link de recuperação"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Lembrou sua senha?{" "}
          <Link
            to="/login"
            className="text-neotalk-primary hover:underline font-medium"
          >
            Voltar para o login
          </Link>
        </p>
      </form>
    </Form>
  );
}