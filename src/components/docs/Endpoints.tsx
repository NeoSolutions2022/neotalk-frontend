import AudioTextTranslation from "./endpoints/AudioTextTranslation";
import LibrasTranslation from "./endpoints/LibrasTranslation";
import VideoIntegration from "./endpoints/VideoIntegration";
import Webhooks from "./endpoints/Webhooks";
import UserManagement from "./endpoints/UserManagement";

const Endpoints = () => {
  return (
    <section id="endpoints" className="space-y-12">
      <h2 className="text-3xl font-bold text-neotalk-dark">Endpoints Principais</h2>
      <AudioTextTranslation />
      <LibrasTranslation />
      <VideoIntegration />
      <Webhooks />
      <UserManagement />
    </section>
  );
};

export default Endpoints;