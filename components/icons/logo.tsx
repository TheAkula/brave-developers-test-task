import LogoImage from "../../public/images/logo.svg";
import Image from "next/image";

export const LogoIcon = () => {
  return (
    <Image
      src={LogoImage}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
      alt={"Терминал оплаты мобильного телефона"}
    />
  );
};
