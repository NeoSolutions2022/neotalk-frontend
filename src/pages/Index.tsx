import { useEffect, useRef } from "react";
import DocSidebar from "@/components/DocSidebar";
import Introduction from "@/components/docs/Introduction";
import Versioning from "@/components/docs/Versioning";
import Authentication from "@/components/docs/Authentication";
import Endpoints from "@/components/docs/Endpoints";

const Index = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const versioningRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const endpointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      const refs = [
        { id: "#introduction", ref: introRef },
        { id: "#versioning", ref: versioningRef },
        { id: "#auth", ref: authRef },
        { id: "#endpoints", ref: endpointsRef },
      ];

      for (const { id, ref } of refs) {
        if (ref.current) {
          const element = ref.current;
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            // Update URL hash without triggering scroll
            history.replaceState(null, "", id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div ref={introRef} id="introduction">
            <Introduction />
          </div>
          <div ref={versioningRef} id="versioning">
            <Versioning />
          </div>
          <div ref={authRef} id="auth">
            <Authentication />
          </div>
          <div ref={endpointsRef} id="endpoints">
            <Endpoints />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;