import OurHeading from "../../atoms/OurHeading";
import OurIcon from "../../atoms/OurIcon";

const OurCard = ({ our }) => {
  return (
    <div className="w-full max-md:min-w-96 max-sm:min-w-full flex-1 rounded-lg p-6 space-y-3 group bg-black hover:bg-blue-900  transition-all duration-300 ease-out shadow">
      <OurIcon>{our?.icon}</OurIcon>
      <OurHeading title={our?.title} />
      <p className="text-white">{our?.description}</p>
    </div>
  );
};

export default OurCard;
