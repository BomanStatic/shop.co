import Script from "next/script";
import Nav from "@/components/Nav/Nav";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
export const metadata = {
    title: "SHOP.CO",
    description: "Generated by create next app",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.0.0/dist/iconify-icon.min.js" />
            <body className="font-satoshi">
                <Nav />
                <main className="container mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
