import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ErrorPageProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  showSearch?: boolean;
}

export function ErrorPage({
  title,
  description,
  illustration,
  primaryAction,
  secondaryAction,
  showSearch = false,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        <div className="flex justify-center">{illustration}</div>

        {showSearch && (
          <div className="max-w-sm mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar na plataforma..."
                className="pl-10"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <Button asChild size="lg">
              <a href={primaryAction.href}>{primaryAction.label}</a>
            </Button>
          )}
          {secondaryAction && (
            <Button asChild variant="outline" size="lg">
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}