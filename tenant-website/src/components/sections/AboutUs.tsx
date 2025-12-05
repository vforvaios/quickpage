import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import GenericError from "../GenericError";
import aboutUsVariants from "../variants/aboutUsVariants";

interface IAboutUs {
  variant: keyof typeof aboutUsVariants;
  sectionId: number;
  tenantId: number;
}

const AboutUs = ({ variant, sectionId, tenantId }: IAboutUs) => {
  const styles = aboutUsVariants[variant];
  console.log(styles);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-about-us"],
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
    <div className="mb-[30px]">
      <div
        dangerouslySetInnerHTML={{ __html: data.sectionDetails[0].richText }}
      />
    </div>
  );
};

export default AboutUs;
