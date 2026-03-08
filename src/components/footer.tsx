

import { CopyrightIcon, InstagramIcon, Facebook01Icon, DiscordIcon, TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

import Link from "next/link";

const socialLinks = {
    instagram : 'https://www.instagram.com/inclove_official?igsh=ZGsxdWg1OGk4eW8z',
    facebook : '#',
    discord : 'https://discord.gg/smQBzDXD7y',
    x : '#',
}

const footerLink = {
    about : '/about-us',
    resources : '#',
    contact : '#',
    joinUs : '#'
}





export default function Footer() {
    return (
        <footer className="mt-auto w-full bg-blue-50/50 border-t border-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
                
                {/* Brand Section */}
                <div className="md:col-span-5 flex flex-col gap-4">
                    <h3 className="text-primary font-bold tracking-tight">Inclove</h3>
                    <p className="max-w-sm text-slate-600 leading-relaxed">
                        A community built on trust, respect, and genuine connections. 
                        Empowering inclusivity in every interaction.
                    </p>
                    
                    {/* Social Icons - Using the same inline SVGs for consistency */}
                    <div className="flex gap-5 mt-2">
                        <SocialIcon href={socialLinks.facebook} icon={Facebook01Icon}/>
                        <SocialIcon href={socialLinks.instagram} icon={InstagramIcon}/>
                        <SocialIcon href={socialLinks.x} icon={TwitterIcon}/>
                        <SocialIcon href={socialLinks.discord} icon={DiscordIcon}/>




                    </div>
                </div>

                {/* Navigation Sections */}
                <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <FooterColumn title="Useful Links">
                        <FooterLink href={footerLink.about}>About Us</FooterLink>
                        <FooterLink href={footerLink.resources}>Resources</FooterLink>
                        <FooterLink href={footerLink.contact}>Contact Us</FooterLink>
                        <FooterLink href={footerLink.joinUs}>Join Us</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Careers">
                        <FooterLink href="#">Partnership</FooterLink>
                        <FooterLink href="#">Support</FooterLink>
                        <FooterLink href="#">Help Center</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Resources">
                        <FooterLink href="#">Events</FooterLink>
                        <FooterLink href="#">Community</FooterLink>
                        <FooterLink href="#">Blogs</FooterLink>
                    </FooterColumn>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-100 bg-white/50 py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                        <HugeiconsIcon icon={CopyrightIcon} />
                        <span>2026 Inclove India. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- Helper Components for Cleanliness ---

function FooterColumn({ title, children } : {title : string, children : React.ReactNode} ) {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-900 tracking-wide uppercase text-xs">{title}</span>
            <div className="flex flex-col gap-2.5">
                {children}
            </div>
        </div>
    );
}

function FooterLink({ href, children }:{href : string, children : React.ReactNode}) {
    return (
        <Link 
            href={href} 
            className="text-slate-600 hover:text-primary transition-all duration-200 text-[15px]"
        >
            {children}
        </Link>
    );
}

function SocialIcon({ 
  href, 
  icon, 
  ...props 
}: { 
  href: string; 
  icon: IconSvgElement; 
} ) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-primary transition-colors duration-300"
      {...props}
    >
        <HugeiconsIcon icon={icon} />
    </a>
    );
    }