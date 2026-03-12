'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition, MouseEvent } from "react";

// Define the shape for your navigation links
interface NavLink {
    name: string;
    href: string;
}

export default function MainNavbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    
    const navLinks: NavLink[] = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about-us" },
        { name: "Self Love", href: "/self-love-wall" },
        { name: "Login", href: "/auth/login" },
    ];



    // Type the event as MouseEvent<HTMLAnchorElement>
    const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname === href) return; 
        
        e.preventDefault();

        // Check if the View Transitions API exists on the document
        if (!('startViewTransition' in document)) {
            router.push(href);
            return;
        }

        document.startViewTransition(() => {
            startTransition(() => {
                router.push(href);
            });
        });
    };



    return (
<header className="fixed top-0 left-0 z-100 w-full h-fit py-2 sm:py-4">
            <nav className=" w-fit h-fit flex items-center m-auto gap-1 p-1.5 bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-full">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavigate(e, link.href)}
                        className="relative px-4 py-2 rounded-full text-sm w-fit no-underline group"
                    >
                        <span className={`relative z-20 transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-neutral-600 group-hover:text-neutral-900'}`}>
                            {link.name}
                        </span>
                        
                        {isActive && (
                            <div 
                                className="absolute inset-0 bg-white shadow-sm rounded-full z-10"
                                style={{ viewTransitionName: 'navbar-pill' } as React.CSSProperties}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
</header>
    );
}