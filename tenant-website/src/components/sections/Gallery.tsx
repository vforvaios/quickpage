import type { SectionVariant } from "@/models/types";
import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import GenericError from "../GenericError";

interface IGallery {
  variant: SectionVariant;
  sectionId: number;
  tenantId: number;
}

const Gallery = ({ variant, sectionId, tenantId }: IGallery) => {
  console.log(variant);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-gallery"],
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
    <div>
      <h1>Gallery</h1>
      <div className="flex flex-nowrap gap-2 mt-4">
        {data?.sectionDetails[0]?.photos?.split(",")?.map((photo: string) => (
          <div className="flex-1" key={photo}>
            <img className="w-full h-auto object-contain block" src={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
