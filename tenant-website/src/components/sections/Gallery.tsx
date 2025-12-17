import type { SectionVariant } from "@/models/types";
import { getHeroDetails } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import GenericError from "../GenericError";
import styleVariants from "../variants/styleVariants";
import SkeletonGallery from "../skeletons/SkeletonGallery";
import DialogPopup from "../common/DialogPopup";
import { useState } from "react";

interface IGallery {
  variant: SectionVariant;
  sectionId: number;
  tenantId: number;
}

const Gallery = ({ variant = "simple", sectionId, tenantId }: IGallery) => {
  const styles = styleVariants[variant].gallery;
  const [showDialogWithContent, setShowDialogWithContent] = useState<any>({
    open: false,
    content: null,
  });
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-gallery"],
    queryFn: () => getHeroDetails({ sectionId, tenantId }),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const handleShowImagePopup = (photo: any) => {
    setShowDialogWithContent({
      ...showDialogWithContent,
      open: true,
      content: photo,
    });
  };

  if (isLoading) {
    return <SkeletonGallery />;
  }

  if (isError) {
    return <GenericError error={error.toString()} />;
  }

  return (
    <div className={`${styles?.bg}`}>
      <DialogPopup
        show={showDialogWithContent.open}
        onClose={() =>
          setShowDialogWithContent({
            ...showDialogWithContent,
            open: false,
            content: null,
          })
        }
      >
        <img src={showDialogWithContent?.content} />
      </DialogPopup>
      <h1>Gallery</h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {data?.sectionDetails[0]?.photos
          ?.split(",")
          ?.map((photo: string, index: number) => (
            <div
              className="basis-[calc(50%-0.25rem)] md:basis-[calc(33.3%-0.38rem)]"
              key={`${photo}_${index}`}
            >
              <img
                className="w-full h-auto object-contain block cursor-pointer"
                src={photo}
                onClick={() => handleShowImagePopup(photo)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
