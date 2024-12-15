import React from "react";
import Image from "next/image";

const SvgImage = ({
  fileName,
  click,
  extraClass,
  text,
}: {
  fileName: string;
  click?: any;
  extraClass?: string;
  text?: String;
}) => {
  return (
    <>
      {click ? (
        <div
          className={`flex svgCover ${extraClass}`}
          id={fileName}
          onClick={(e) => {
            click(e, fileName);
          }}
        >
          <Image
            src={`/icons/${fileName}.svg`}
            alt={fileName}
            width={8}
            height={8}
            className="svgImg scale-90"
          />
        </div>
      ) : (
        <div
          className={`flex justify-center svgCover ${extraClass}`}
          id={fileName}
        >
          <Image
            src={`/icons/${fileName}.svg`}
            alt={fileName}
            width={8}
            height={8}
            className="svgImg"
          />
          <p className="flex text-sm">{text}</p>
        </div>
      )}
    </>
  );
};

export default SvgImage;
