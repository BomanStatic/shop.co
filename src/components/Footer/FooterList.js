import Link from "next/link";
export default function FooterList({ list }) {
    return (
        <div className="grid gap-5">
            <h5 className="text-xl uppercase font-medium">{list.title}</h5>
            <ul className="grid gap-3">
                {list.links.map((link, index) => (
                    <li className="text-black/60" key={index}>
                        <Link className="hover:text-black" href="/">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
