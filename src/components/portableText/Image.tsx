import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../../studio/sanity_utils";
import Image from "next/image";

export function SanityImage(props: any) {
  const imageData: SanityAsset = props.value;

  return (
    <Image
      src={urlFor(imageData).width(500).url()}
      width={500}
      className="w-full aspect-video rounded-md object-cover my-4"
      alt={imageData.alt}
      height={500}
    />
  );
}
