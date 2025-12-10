import type { SectionVariant } from "@/models/types";
import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import GenericError from "../GenericError";
import SkeletonHero from "../skeletons/SkeletonHero";

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
    return <SkeletonHero />;
  }

  if (isError) {
    return <GenericError error={error.toString()} />;
  }

  return (
    <div className="mb-[30px]">
      <a href={data.sectionDetails[0].link} target="_blank">
        <img
          alt={data.sectionDetails[0].link}
          src={data.sectionDetails[0].singlePhoto}
        />
      </a>
    </div>
  );
};

export default Hero;
