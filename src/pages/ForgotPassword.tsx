import { ForgotPasswordForm } from "@/components/forgot-password/ForgotPasswordForm";
import { motion } from "framer-motion";

const ForgotPassword = () => {
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
            Esqueceu sua senha?
          </h1>
          <p className="text-muted-foreground">
            Insira seu e-mail e enviaremos um link para redefinir sua senha.
          </p>
        </div>
        <ForgotPasswordForm />
      </motion.div>
    </div>
  );
};

export default ForgotPassword;