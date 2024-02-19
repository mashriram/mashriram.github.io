import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Shriram Madurantakam",
    description: "Portfolio page of Shriram Madurantakam",
    icons: {
        icon: "/images/person.jpg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <link rel="icon" href="/images/person.jpg" sizes="any" />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
