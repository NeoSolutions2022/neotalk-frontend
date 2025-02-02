import { cn } from "@/lib/utils";

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export function Code({ className, children, ...props }: CodeProps) {
  return (
    <pre
      className={cn(
        "rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  );
}