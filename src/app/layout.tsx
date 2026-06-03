// src/app/layout.tsx
import ReduxProvider from '@/providers/ReduxProvider';
import './globals.css';
import { Archivo, Geist } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


// ✅ ROOT TAB NAME HERE
export const metadata: Metadata = {
	title: "Roaming Bangladesh", // 👈 tab name
	description: "B2B Travel Marketplace",
};

// Configure Archivo with the weights and subsets you need
const archivo = Archivo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'], // Include weights for regular text and heavy headings
	variable: '--font-archivo', // Creates a CSS variable we can pass to Tailwind
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn(archivo.variable, "font-sans", geist.variable)} suppressHydrationWarning>
			<body suppressHydrationWarning>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
