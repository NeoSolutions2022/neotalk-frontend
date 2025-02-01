import { useState } from "react";
import DocSidebar from "@/components/DocSidebar";
import Introduction from "@/components/docs/Introduction";
import Versioning from "@/components/docs/Versioning";
import Authentication from "@/components/docs/Authentication";
import Endpoints from "@/components/docs/Endpoints";

const Index = () => {
  const [activeSection, setActiveSection] = useState("#introduction");

  const renderSection = () => {
    switch (activeSection) {
      case "#introduction":
        return <Introduction />;
      case "#versioning":
        return <Versioning />;
      case "#auth":
        return <Authentication />;
      case "#endpoints":
        return <Endpoints />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;