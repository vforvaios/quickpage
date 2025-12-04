import type { SectionVariant } from "@/models/types";
import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import GenericError from "../GenericError";

interface IHeroProps {
  variant: SectionVariant;
  sectionId: number;
  tenantId: number;
}

const Hero = ({ variant, sectionId, tenantId }: IHeroProps) => {
  console.log(variant);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-hero-banner"],
    queryFn: () => getHeroDetails({ sectionId, tenantId }),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <GenericError error={error.toString()} />;
  }

  return (
    <div className="h-[600px] bg-red-300">
      <div
        dangerouslySetInnerHTML={{ __html: data.sectionDetails[0].richText }}
      />
    </div>
  );
};

export default Hero;
