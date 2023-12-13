import {DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface ImyImageProps
  extends DetailedHTMLProps<
   ImgHTMLAttributes<HTMLImageElement>,
   HTMLImageElement
  > {}

export const MyImage = (props: ImyImageProps) => {
   return <img {...props} />;
};
