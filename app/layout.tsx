import "./globals.css";
import Background from "@/components/Background";

export const metadata = {
title: "Project Monarch",
description: "Lead. Protect. Fight. Dominate.",
};

export default function RootLayout({
children,
}: 
{
children: React.ReactNode;
}) {
return ( 
<html lang="en" suppressHydrationWarning> 

<body className="relative text-white"> 
<Background />
{children} 
</body> 
</html>
);
}
