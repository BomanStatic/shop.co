import Image from "next/image";
export default function Brands() {
    return (
        <div className="bg-black flex flex-wrap gap-4 justify-around py-8">
            <Image src={"/brands/versace.svg"} width={166} height={33} alt="Versace" />
            <Image src={"/brands/zara.svg"} width={91} height={33} alt="Zara" />
            <Image src={"/brands/gucci.svg"} width={156} height={36} alt="Gucci" />
            <Image src={"/brands/prada.svg"} width={194} height={33} alt="Prada" />
            <Image src={"/brands/ck.svg"} width={206} height={33} alt="Calvin Klein" />
        </div>
    );
}
