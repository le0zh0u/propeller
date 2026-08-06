import { Linkedin, Youtube, ExternalLink, Mail, Globe } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer id="footer" className="h-screen bg-brand-darkest flex flex-col relative overflow-hidden">
      {/* Video Mask Effect - Knockout Text */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative mix-blend-screen w-full h-full flex items-center justify-center">
          {/* Background Video */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4" type="video/mp4" />
          </video>

          {/* Text Overlay with multiply blend */}
          <a
            href="mailto:business@globalpropeller.com"
            className="relative bg-black text-white mix-blend-multiply flex flex-col items-center justify-center w-full h-full group gap-8"
          >
            <span className="text-[10vw] font-black leading-none tracking-tighter text-center px-4 transition-colors duration-500 group-hover:text-[#008080]">
              READY TO<br />CHURN THE<br />WATER?
            </span>
            <span className="text-center px-4 space-y-2">
              <span className="block text-sm md:text-base text-white/70 tracking-wide transition-colors duration-500 group-hover:text-[#008080]">
                Move with clarity, confidence, and trusted local access.
              </span>
              <span className="block text-sm md:text-base text-white/70 tracking-wide transition-colors duration-500 group-hover:text-[#008080]">
                Chart your course with Compass. Unlock the market with Access. Grow with PROPELLER.
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative z-10 py-6 md:py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">&copy; 2026 PROPELLER. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="uppercase tracking-[0.3em] text-xs text-white/40 font-semibold">Connect</span>
            <a href="mailto:business@globalpropeller.com" className="flex items-center gap-1.5 text-sm text-white/60 hover:text-[#008080] transition-colors duration-200">
              <Mail className="w-4 h-4" />business@globalpropeller.com
            </a>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <span className="uppercase tracking-[0.3em] text-xs text-white/40 font-semibold">Friends</span>
            <a href="https://www.thearch.global/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/60 hover:text-[#008080] transition-colors duration-200">
              <Globe className="w-4 h-4" />The Arch
            </a>
          </div>
          <div className="flex items-center gap-6">
            {[
              { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/globalpropeller/' },
              { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@PROPELLER_theArch' },
              { name: 'Substack', icon: ExternalLink, href: 'https://mingai01.substack.com/' },
            ].map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/60 hover:text-[#008080] transition-colors duration-200">
                <link.icon className="w-4 h-4" />{link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
