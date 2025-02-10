import DocSidebar from "@/components/DocSidebar";
import Introduction from "@/components/docs/Introduction";
import Versioning from "@/components/docs/Versioning";
import Authentication from "@/components/docs/Authentication";
import Endpoints from "@/components/docs/Endpoints";
import Examples from "@/components/docs/Examples";
import Errors from "@/components/docs/Errors";
import RateLimits from "@/components/docs/RateLimits";
import BestPractices from "@/components/docs/BestPractices";
import FAQ from "@/components/docs/FAQ";
import Styles from "./Documentation.module.css"

const Documentation = () => {
  return (
    <div className="min-h-screen bg-neotalk-light">
      <DocSidebar />
      <main className="md:ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <Introduction />
          <Versioning />
          <Authentication />
          <Endpoints />
          <Examples />
          <Errors />
          <RateLimits />
          <BestPractices />
          <FAQ />
        </div>
      </main>
    </div>
  );
};

export default Documentation;