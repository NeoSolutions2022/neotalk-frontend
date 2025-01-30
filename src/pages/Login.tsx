import { LoginForm } from "@/components/login/LoginForm";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-neotalk-dark">
            Bem-vindo de volta ao NeoTalk
          </h1>
          <p className="text-muted-foreground">
            Acesse sua conta para continuar traduzindo áudio, texto e Libras em
            tempo real.
          </p>
        </div>
        <LoginForm />
      </motion.div>
    </div>
  );
};

export default Login;