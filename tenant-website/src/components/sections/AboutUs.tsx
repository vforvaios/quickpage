import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import GenericError from "../GenericError";
import styleVariants from "../variants/styleVariants";
import SkeletonText from "../skeletons/SkeletonText";

interface IAboutUs {
  variant: any;
  sectionId: number;
  tenantId: number;
}

const AboutUs = ({ variant = "simple", sectionId, tenantId }: IAboutUs) => {
  const styles = styleVariants[variant]?.aboutus;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-about-us"],
    queryFn: () => getHeroDetails({ sectionId, tenantId }),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <SkeletonText />;
  }

  if (isError) {
    return <GenericError error={error.toString()} />;
  }

  return (
    <div className={`mb-[30px] ${styles.bg} ${styles.text}`}>
      <div
        dangerouslySetInnerHTML={{ __html: data.sectionDetails[0].richText }}
      />
    </div>
  );
};

export default AboutUs;
