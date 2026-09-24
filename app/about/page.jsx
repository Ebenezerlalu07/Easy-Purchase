import {
    ArrowDown,
    Target,
    Eye,
} from "lucide-react";

import HomeEffects from "@/components/HomeEffects";

export const metadata = {
    title: "About Us | Top Range Building Materials",
    description:
        "Learn about Top Range Building Materials, our mission, vision, values, and commitment to reliable construction products and supply solutions.",
};

export default function AboutPage() {
    return (
        <>
            <HomeEffects />

            {/* Scroll progress used by HomeEffects */}
            <div id="scrollProgress" />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/971501234567?text=Hi%20Top%20Range%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Top Range on WhatsApp"
                className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_14px_35px_rgba(37,211,102,0.4)]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-7 w-7 fill-current"
                    aria-hidden="true"
                >
                    <path d="M16.04 3C9.4 3 4 8.39 4 15.03c0 2.12.55 4.19 1.6 6.01L3.9 27.24l6.35-1.66a12 12 0 0 0 5.79 1.47h.01c6.63 0 12.03-5.4 12.03-12.03C28.08 8.39 22.68 3 16.04 3Zm0 21.99h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.94 9.94 0 0 1-1.53-5.29c0-5.5 4.48-9.97 9.98-9.97S26 9.53 26 15.03c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
            </a>

            <main className="overflow-hidden bg-[#F5F5F0]">
                {/* =========================================================
            ABOUT HERO
        ========================================================== */}
                <section
                    id="aboutHero"
                    className="relative min-h-[72vh] overflow-hidden bg-[#07100D] md:min-h-[76vh]"
                >
                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/Assets/construction%20full.jpg')",
                        }}
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,15,13,.97)_0%,rgba(7,15,13,.78)_42%,rgba(7,15,13,.28)_75%,rgba(7,15,13,.08)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,15,13,.92)_0%,transparent_58%)]" />

                    {/* Glow */}
                    <div className="absolute -right-24 top-24 h-[320px] w-[320px] rounded-full bg-[#D8FF65]/10 blur-[110px]" />

                    {/* Container */}
                    <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1450px] flex-col justify-end px-5 pb-10 pt-28 md:min-h-[76vh] md:px-10 md:pb-12 md:pt-32 lg:px-14 lg:pb-14">
                        <div className="max-w-[980px]">
                            {/* Label */}
                            <div className="mb-4 flex items-center gap-3" data-reveal>
                                <span className="h-2 w-2 rounded-full bg-[#D8FF65] shadow-[0_0_16px_#D8FF65]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                                    About Top Range
                                </span>
                            </div>

                            {/* Heading */}
                            <h1
                                data-reveal
                                className="max-w-[1000px] text-[44px] font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-[58px] md:text-[72px] lg:text-[86px]"
                            >
                                Building trust.
                                <br />
                                Delivering <span className="text-[#D8FF65]">quality.</span>
                            </h1>

                            {/* Bottom */}
                            <div
                                data-reveal
                                className="mt-6 grid gap-5 border-t border-white/15 pt-5 md:grid-cols-[1fr_auto] md:items-end"
                            >
                                <p className="max-w-2xl text-[14px] leading-7 text-white/65 md:text-[16px]">
                                    Top Range Building Materials provides reliable, high-quality
                                    construction products and supply solutions for residential,
                                    commercial and industrial projects.
                                </p>

                                <a
                                    href="#our-story"
                                    aria-label="Scroll to our story"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8FF65] text-[#101411] transition duration-300 hover:scale-110 hover:bg-white"
                                >
                                    <ArrowDown className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            COMPANY INTRODUCTION
        ========================================================== */}
                <section id="our-story" className="py-14 md:py-16 lg:py-20">
                    <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
                        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
                            {/* Left */}
                            <div data-reveal>
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-[#94BE26]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/45">
                                        Who We Are
                                    </span>
                                </div>

                                <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                                    Reliable materials. Trusted brands. Professional service.
                                    Everything you need to move your project forward.
                                </p>
                            </div>

                            {/* Right */}
                            <div data-reveal>
                                <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.045em] sm:text-[42px] md:text-[52px] lg:text-[60px]">
                                    Your trusted partner for{" "}
                                    <span className="text-black/35">
                                        building materials and construction solutions.
                                    </span>
                                </h2>

                                <div className="mt-7 grid gap-6 border-t border-black/10 pt-6 md:grid-cols-2">
                                    <p className="text-[15px] leading-7 text-black/60">
                                        Top Range Building Materials is focused on supplying quality
                                        construction products that meet the needs of contractors,
                                        developers, engineers, designers and individual customers.
                                    </p>

                                    <p className="text-[15px] leading-7 text-black/60">
                                        From essential structural materials to finishing products,
                                        hardware and specialist solutions, we aim to simplify
                                        sourcing through dependable products, responsive service and
                                        competitive supply.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            IMAGE + EXPERIENCE
        ========================================================== */}
                <section className="pb-14 md:pb-16 lg:pb-20">
                    <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
                        <div
                            data-reveal
                            className="relative overflow-hidden rounded-[26px] md:rounded-[34px]"
                        >
                            <img
                                src="/Assets/construction%20full.jpg"
                                alt="Top Range Building Materials construction site"
                                className="h-[400px] w-full object-cover sm:h-[480px] md:h-[560px] lg:h-[620px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                            {/* Card */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:w-[410px]">
                                <div className="rounded-[24px] border border-white/15 bg-[#0B1512]/85 p-5 text-white backdrop-blur-xl md:p-7">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8FF65]">
                                        Built Around Reliability
                                    </span>

                                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-[28px]">
                                        Materials that perform from foundation to finish.
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/55">
                                        We work to deliver dependable products, knowledgeable support
                                        and efficient supply for projects of every scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            MISSION / VISION
        ========================================================== */}
                <section className="pb-14 md:pb-16 lg:pb-20">
                    <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
                        {/* Heading */}
                        <div data-reveal className="mb-7">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#94BE26]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
                                    Our Direction
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-3xl text-[36px] font-medium leading-[1] tracking-[-0.045em] md:text-[50px] lg:text-[58px]">
                                Built on strong{" "}
                                <span className="text-black/35">
                                    values and long-term relationships.
                                </span>
                            </h2>
                        </div>

                        {/* Cards */}
                        <div data-stagger className="grid gap-3 lg:grid-cols-2">
                            {/* Mission */}
                            <article className="group relative min-h-[400px] overflow-hidden rounded-[26px] bg-[#D8FF65] p-6 md:min-h-[440px] md:p-8">
                                <div className="flex items-start justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                                        01 / Mission
                                    </span>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                                        <Target className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                                    <h3 className="max-w-xl text-[30px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[40px]">
                                        To make quality building materials easier to source, trust and
                                        deliver.
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-6 text-black/55">
                                        We aim to provide customers with dependable products,
                                        responsive service and efficient solutions across every stage
                                        of construction.
                                    </p>
                                </div>
                            </article>

                            {/* Vision */}
                            <article className="relative min-h-[400px] overflow-hidden rounded-[26px] bg-[#101411] p-6 text-white md:min-h-[440px] md:p-8">
                                <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-[#D8FF65]/10 blur-[90px]" />

                                <div className="relative flex items-start justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                                        02 / Vision
                                    </span>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                                        <Eye className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                                    <h3 className="max-w-xl text-[30px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[40px]">
                                        To become a trusted name in modern construction supply.
                                    </h3>

                                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/50">
                                        We seek to build long-term partnerships by combining quality
                                        products, trusted manufacturers and strong customer service.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
