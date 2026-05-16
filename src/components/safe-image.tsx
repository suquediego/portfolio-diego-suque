"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type SafeImageProps = ImageProps;

export function SafeImage({ alt, className, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
