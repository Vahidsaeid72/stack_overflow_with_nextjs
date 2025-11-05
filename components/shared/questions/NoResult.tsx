import Image from "next/image";
import dark_image from "@/assets/images/dark-illustration.png"
import light_image from "@/assets/images/light-illustration.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NoResult = ({title,description,link,linkTitle}:{title:string,description:string,link:string,linkTitle:string}) => {
    return (
        <div className="mt-10 flex flex-col justify-center items-center w-full">
            <Image src={light_image} alt="no qouestion" width={270} height={200} className="block object-contain dark:hidden" />
            <Image src={dark_image} alt="no qouestion" width={270} height={200} className="hidden object-contain dark:flex" />
            <h2 className="mt-6 font-bold text-xl text-dark200_light900">{title}</h2>
            <p className="my-5 max-w-[400px] text-center text-dark500_light700">{description}</p>
            <Link className="flex" href={link}>
                <Button className="primary-gradient min-h-[46px] rounded-[8px] px-8 py-3 !text-light-900 font-bold ">{linkTitle}</Button>
            </Link>
        </div>
    )
}
export default NoResult;