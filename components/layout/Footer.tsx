'use client';
import Link from "next/link";
import Image from "next/image";
import { memo, useMemo } from "react";
import { socialMediaLinks, profile, navLinks } from "@/constants";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

const Footer = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const pathname = usePathname();
    if (pathname === 'resume') {
        return null;
    }
    
    return (
        <footer className="w-full bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col items-start space-y-4">
                        <Logo />
                        <p className="text-sm text-f-foreground max-w-xs">{profile.summary.slice(0, 100)}...</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                        <div>
                            <h3 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h3>
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-4 text-foreground">Connect</h3>
                            <div className="flex space-x-4">
                                {socialMediaLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity"
                                        title={link.title}
                                    >
                                        <Image
                                            src={link.icon || "/placeholder.svg"}
                                            alt={link.title}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 sm:mt-0">{profile.title}</p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer)

