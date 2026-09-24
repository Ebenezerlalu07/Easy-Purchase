"use client";

import { useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Building2,
    CheckCircle2,
    Clock3,
    Mail,
    MapPin,
    MessageSquareText,
    Phone,
    Sparkles,
    User,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        if (!formData.requirement.trim()) {
            setError("Please enter your project requirement.");
            return;
        }

        const subject = encodeURIComponent(
            `Top Range Project Enquiry - ${formData.name}`
        );

        const body = encodeURIComponent(
            `Hello Top Range Building Materials,

I would like to submit a new enquiry.

Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Project / Product Requirement:
${formData.requirement}

Thank you.`
        );

        setSuccess(true);

        window.location.href = `mailto:info@toprange.ae?subject=${subject}&body=${body}`;
    };

    const inputClass = `
    w-full
    border-0
    border-b
    border-black/10
    bg-transparent
    px-0
    pb-4
    pt-2
    text-[15px]
    text-[#101411]
    outline-none
    transition-all
    duration-300
    placeholder:text-black/25
    focus:border-[#101411]
  `;

    return (
        <main className="overflow-hidden bg-[#F4F5EF] text-[#101411]">
            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative min-h-[88vh] overflow-hidden bg-[#07100D]">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/Assets/Contact.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,15,13,0.98)_0%,rgba(7,15,13,0.9)_42%,rgba(7,15,13,0.58)_72%,rgba(7,15,13,0.28)_100%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,15,13,0.98)_0%,transparent_65%)]" />

                {/* Glow */}
                <div className="absolute -right-[180px] top-[80px] h-[550px] w-[550px] rounded-full bg-[#D8FF65]/10 blur-[150px]" />

                <div className="absolute -left-[180px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#C6772C]/10 blur-[140px]" />

                {/* Hero Content */}
                <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1450px] items-end px-5 pb-10 pt-36 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
                    <div className="grid w-full gap-12 lg:grid-cols-[1fr_390px] lg:items-end">
                        {/* Left */}
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#D8FF65] shadow-[0_0_18px_#D8FF65]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                    Contact Top Range
                                </span>
                            </div>

                            <h1 className="mt-5 max-w-[1050px] text-[50px] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-[64px] md:text-[80px] lg:text-[94px] xl:text-[108px]">
                                Let&apos;s build
                                <br />
                                <span className="text-[#D8FF65]">
                                    better together.
                                </span>
                            </h1>

                            <div className="mt-8 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
                                <p className="max-w-2xl text-[15px] leading-7 text-white/55 md:text-[17px]">
                                    Share your material requirement, product enquiry or project
                                    scope. Our team will help you source the right building
                                    materials for your project.
                                </p>

                                <a
                                    href="#contact-form"
                                    aria-label="Go to contact form"
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D8FF65] text-[#101411] transition-all duration-300 hover:scale-110 hover:bg-white"
                                >
                                    <ArrowDown className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Hero Glass Card */}
                        <div className="relative hidden overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-[28px] lg:block">
                            <div className="absolute -right-16 -top-20 h-[200px] w-[200px] rounded-full bg-[#D8FF65]/15 blur-[80px]" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-[#D8FF65]" />

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                                            Project Support
                                        </span>
                                    </div>

                                    <span className="h-2 w-2 rounded-full bg-[#D8FF65]" />
                                </div>

                                <h3 className="mt-12 text-[28px] font-medium leading-[1.1] tracking-[-0.035em]">
                                    Need materials for an upcoming project?
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/50">
                                    Send us your product list, required quantities or project
                                    specifications and our team will assist with sourcing and
                                    quotation.
                                </p>

                                <a
                                    href="#contact-form"
                                    className="group mt-9 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/70"
                                >
                                    Start an enquiry

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8FF65] text-black transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br></br> <br></br>


            <section
                id="contact-form"
                className="scroll-mt-24 pb-14 md:pb-20 lg:pb-24"
            >
                <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
                    <div className="grid overflow-hidden rounded-[36px] bg-[#101411] shadow-[0_30px_100px_rgba(0,0,0,0.12)] lg:grid-cols-[0.82fr_1.18fr]">
                        {/* Left Details */}
                        <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-12">
                            <div className="absolute -bottom-24 -left-28 h-[380px] w-[380px] rounded-full bg-[#D8FF65]/10 blur-[120px]" />

                            <div className="absolute -right-32 top-20 h-[260px] w-[260px] rounded-full bg-[#C6772C]/10 blur-[100px]" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-[#D8FF65]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                        Start a Conversation
                                    </span>
                                </div>

                                <h2 className="mt-6 text-[42px] font-medium leading-[0.96] tracking-[-0.05em] md:text-[50px] lg:text-[58px]">
                                    Tell us what
                                    <br />
                                    <span className="text-[#D8FF65]">
                                        you need.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                                    From a single product enquiry to a complete project material
                                    requirement, share the details with us and our team will get
                                    in touch.
                                </p>

                                <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                                    {/* Location */}
                                    <div className="flex items-center gap-4 py-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                                            <MapPin className="h-4 w-4 text-[#D8FF65]" />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                                                Service Area
                                            </p>

                                            <p className="mt-1 text-sm text-white/70">
                                                United Arab Emirates
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-4 py-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                                            <Mail className="h-4 w-4 text-[#D8FF65]" />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                                                Email
                                            </p>

                                            <p className="mt-1 text-sm text-white/70">
                                                info@toprange.ae
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-4 py-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                                            <Phone className="h-4 w-4 text-[#D8FF65]" />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                                                Phone
                                            </p>

                                            <p className="mt-1 text-sm text-white/70">
                                                +971 00 000 0000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-t-[32px] bg-white p-6 sm:p-9 lg:rounded-l-[36px] lg:rounded-tr-none lg:p-12">
                            <div className="mb-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                    Project Enquiry
                                </p>

                                <h3 className="mt-3 text-[32px] font-medium tracking-[-0.04em] md:text-[40px]">
                                    Send your requirement
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-6 text-black/40">
                                    Complete the form below and share your material or project
                                    requirement with our team.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-9">
                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                                        >
                                            <User className="h-3.5 w-3.5" />
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                                        >
                                            <Building2 className="h-3.5 w-3.5" />
                                            Company
                                        </label>

                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company name"
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                                        >
                                            <Mail className="h-3.5 w-3.5" />
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@company.com"
                                            className={inputClass}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                                        >
                                            <Phone className="h-3.5 w-3.5" />
                                            Phone Number
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+971"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                {/* Requirement */}
                                <div>
                                    <label
                                        htmlFor="requirement"
                                        className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                                    >
                                        <MessageSquareText className="h-3.5 w-3.5" />
                                        Project Requirement
                                    </label>

                                    <textarea
                                        id="requirement"
                                        name="requirement"
                                        rows={5}
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        placeholder="Tell us about the products, quantities or project requirements..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-600">
                                        {error}
                                    </div>
                                )}

                                {/* Success */}
                                {success && (
                                    <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-sm text-green-700">
                                        <CheckCircle2 className="h-5 w-5" />
                                        Your email application is opening.
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="flex flex-col gap-5 border-t border-black/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="max-w-[350px] text-xs leading-5 text-black/35">
                                        Provide as much information as possible so our team can
                                        prepare the right response.
                                    </p>

                                    <button
                                        type="submit"
                                        className="group inline-flex items-center justify-between gap-10 rounded-full bg-[#101411] py-2 pl-7 pr-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#222923] active:scale-[0.98]"
                                    >
                                        Send Enquiry

                                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8FF65] text-black transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          MAP
      ========================================================= */}
            <section className="pb-16 md:pb-20 lg:pb-24">
                <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
                    <div className="relative min-h-[520px] overflow-hidden rounded-[34px] bg-[#101411]">
                        <iframe
                            title="Top Range Building Materials Location"
                            src="https://www.google.com/maps?q=United%20Arab%20Emirates&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full border-0"
                        />

                        {/* Bottom overlay */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-[#07100D]/95 via-[#07100D]/45 to-transparent" />

                        {/* Location Card */}
                        <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/15 bg-[#07100D]/85 p-6 text-white shadow-2xl backdrop-blur-2xl sm:bottom-7 sm:left-7 sm:right-auto sm:w-[420px]">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                                        Find Us
                                    </p>

                                    <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                                        Top Range Building Materials
                                    </h3>

                                    <p className="mt-2 text-sm text-white/45">
                                        United Arab Emirates
                                    </p>
                                </div>

                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D8FF65] text-black">
                                    <MapPin className="h-4 w-4" />
                                </span>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/65 transition-colors hover:text-white"
                            >
                                Open in Google Maps

                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}