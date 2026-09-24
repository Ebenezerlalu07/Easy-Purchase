"use client";

import { useState } from "react";
import Link from "next/link";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    ShieldCheck,
    User,
} from "lucide-react";

export default function LoginPage() {
    const [mode, setMode] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const updateForm = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // UI only
    };

    const handleGoogle = () => {
        // Google login API can be connected later
    };

    const switchMode = (value) => {
        setMode(value);
        setShowPassword(false);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#F3F4EE] text-[#101411]">
            <div className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">

                {/* =====================================================
            LEFT VISUAL
        ====================================================== */}

                <section className="relative hidden min-h-screen overflow-hidden bg-[#07100D] lg:block">
                    <img
                        src="/Assets/construction full.jpg"
                        alt="Easy Purchase"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    {/* overlays */}

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,13,.08)_0%,rgba(7,16,13,.12)_55%,rgba(7,16,13,.72)_100%)]" />

                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,16,13,.48)_0%,transparent_45%,rgba(7,16,13,.08)_100%)]" />

                    {/* subtle vignette */}

                    <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,.28)]" />

                    {/* top logo */}



                    {/* bottom floating tag */}

                    <div
                        className="
              absolute
              bottom-10
              left-10
              z-20
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-black/25
              px-4
              py-3
              text-white
              backdrop-blur-2xl
              xl:bottom-12
              xl:left-12
            "
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-[#D8FF65] shadow-[0_0_15px_#D8FF65]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                            Smart purchasing experience
                        </span>
                    </div>
                </section>

                {/* =====================================================
            RIGHT AUTH AREA
        ====================================================== */}

                <section
                    className="
            relative
            flex
            min-h-screen
            items-center
            justify-center
            overflow-hidden
            px-5
            pb-10
            pt-28
            sm:px-8
            sm:pt-32
            md:px-12
            lg:px-10
            lg:py-10
            xl:px-16
          "
                >
                    {/* background */}

                    <div className="absolute inset-0 bg-[#F3F4EE]" />

                    <div className="pointer-events-none absolute -right-52 -top-52 h-[620px] w-[620px] rounded-full bg-[#D8FF65]/20 blur-[180px]" />

                    <div className="pointer-events-none absolute -bottom-52 -left-48 h-[520px] w-[520px] rounded-full bg-[#DDB78A]/15 blur-[160px]" />

                    {/* dot accent */}

                    <div
                        className="
              pointer-events-none
              absolute
              right-12
              top-16
              h-[140px]
              w-[140px]
              opacity-[0.22]
              [background-image:radial-gradient(#101411_1px,transparent_1px)]
              [background-size:14px_14px]
            "
                    />

                    <div className="relative z-10 w-full max-w-[520px]">



                        {/* Back */}

                        <Link
                            href="/"
                            className="
                group
                relative
                z-20
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/[0.07]
                bg-white/85
                py-1.5
                pl-1.5
                pr-4
                text-[12px]
                font-semibold
                text-black/55
                shadow-[0_8px_25px_rgba(0,0,0,.04)]
                backdrop-blur-xl
                transition
                hover:text-black
              "
                        >
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  shadow-[0_8px_20px_rgba(0,0,0,.03)]
                  transition-all
                  group-hover:bg-[#101411]
                  group-hover:text-white
                "
                            >
                                <ArrowLeft className="h-3.5 w-3.5" />
                            </span>

                            Back to website
                        </Link>

                        {/* =================================================
                MAIN CARD
            ================================================== */}

                        <div
                            className="
                mt-8
                rounded-[32px]
                border
                border-white/80
                bg-white/65
                p-5
                shadow-[0_30px_90px_rgba(28,35,30,.07)]
                backdrop-blur-2xl
                sm:p-7
                md:p-8
              "
                        >
                            {/* Tabs */}

                            <div
                                className="
                  grid
                  grid-cols-2
                  rounded-full
                  bg-[#EBEDE6]
                  p-1.5
                "
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        switchMode("login")
                                    }
                                    className={`
                    h-11
                    rounded-full
                    text-[12px]
                    font-semibold
                    transition-all
                    duration-300

                    ${mode === "login"
                                            ? "bg-[#101411] text-white shadow-[0_8px_20px_rgba(0,0,0,.12)]"
                                            : "text-black/45 hover:text-black"
                                        }
                  `}
                                >
                                    Sign In
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        switchMode("signup")
                                    }
                                    className={`
                    h-11
                    rounded-full
                    text-[12px]
                    font-semibold
                    transition-all
                    duration-300

                    ${mode === "signup"
                                            ? "bg-[#101411] text-white shadow-[0_8px_20px_rgba(0,0,0,.12)]"
                                            : "text-black/45 hover:text-black"
                                        }
                  `}
                                >
                                    Create Account
                                </button>
                            </div>

                            {/* Header */}

                            <div className="mt-9">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#A8D12D]" />

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                                        {mode === "login"
                                            ? "Welcome Back"
                                            : "New Account"}
                                    </span>
                                </div>

                                <h1
                                    className="
                    mt-4
                    text-[38px]
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-[#101411]
                    sm:text-[44px]
                    md:text-[48px]
                  "
                                >
                                    {mode === "login" ? (
                                        <>
                                            Sign in to your
                                            <br />

                                            <span className="text-black/30">
                                                account.
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            Create your
                                            <br />

                                            <span className="text-black/30">
                                                account.
                                            </span>
                                        </>
                                    )}
                                </h1>

                                <p className="mt-4 max-w-md text-[13px] leading-6 text-[#666D67]">
                                    {mode === "login"
                                        ? "Access your saved products, cart and quotation requests."
                                        : "Create an account to save products and manage your purchasing requirements."}
                                </p>
                            </div>

                            {/* Google */}

                            <button
                                type="button"
                                onClick={handleGoogle}
                                className="
                  group
                  mt-7
                  grid
                  h-[60px]
                  w-full
                  grid-cols-[42px_minmax(0,1fr)_42px]
                  items-center
                  rounded-[18px]
                  border
                  border-black/[0.08]
                  bg-white
                  px-2
                  text-[13px]
                  font-semibold
                  text-[#202521]
                  shadow-[0_8px_25px_rgba(0,0,0,.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-black/15
                  hover:shadow-[0_14px_35px_rgba(0,0,0,.06)]
                "
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F6F2]">
                                    <GoogleIcon />
                                </span>

                                <span className="truncate px-2 text-center">
                                    {mode === "login"
                                        ? "Continue with Google"
                                        : "Create account with Google"}
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full text-black/30 transition-all duration-300 group-hover:bg-[#F1F3ED] group-hover:text-black">
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </button>

                            {/* Divider */}

                            <div className="my-6 flex items-center gap-4">
                                <span className="h-px flex-1 bg-black/[0.07]" />

                                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/25">
                                    or
                                </span>

                                <span className="h-px flex-1 bg-black/[0.07]" />
                            </div>

                            {/* Form */}

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {mode === "signup" && (
                                    <AuthField
                                        icon={User}
                                        label="Full Name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={updateForm}
                                        placeholder="Enter your full name"
                                    />
                                )}

                                <AuthField
                                    icon={Mail}
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={updateForm}
                                    placeholder="name@email.com"
                                />

                                {/* Password */}

                                <div>
                                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-black/45">
                                        Password
                                    </label>

                                    <div
                                        className="
                      grid
                      h-[58px]
                      grid-cols-[42px_minmax(0,1fr)_42px]
                      items-center
                      rounded-[17px]
                      border
                      border-black/[0.08]
                      bg-white
                      px-2
                      transition-all
                      duration-300
                      focus-within:border-[#101411]/20
                      focus-within:ring-4
                      focus-within:ring-[#D8FF65]/20
                    "
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#F1F3ED] text-black/45">
                                            <LockKeyhole className="h-4 w-4" />
                                        </span>

                                        <input
                                            required
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={form.password}
                                            onChange={updateForm}
                                            placeholder={
                                                mode === "login"
                                                    ? "Enter your password"
                                                    : "Create a password"
                                            }
                                            className="
                        h-full
                        min-w-0
                        w-full
                        bg-transparent
                        px-3
                        text-[13px]
                        font-medium
                        text-[#202521]
                        outline-none
                        placeholder:text-black/25
                      "
                                        />

                                        <button
                                            type="button"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (value) => !value
                                                )
                                            }
                                            className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-[13px]
                        text-black/35
                        transition
                        hover:bg-[#F1F3ED]
                        hover:text-black
                      "
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* options */}

                                {mode === "login" && (
                                    <div className="flex items-center justify-between gap-3 pt-1">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setRemember(
                                                    (value) => !value
                                                )
                                            }
                                            className="flex items-center gap-2.5"
                                        >
                                            <span
                                                className={`
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-[6px]
                          border
                          transition

                          ${remember
                                                        ? "border-[#101411] bg-[#101411] text-white"
                                                        : "border-black/15 bg-white"
                                                    }
                        `}
                                            >
                                                {remember && (
                                                    <Check className="h-3 w-3" />
                                                )}
                                            </span>

                                            <span className="text-[11px] font-medium text-black/45">
                                                Remember me
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            className="text-[11px] font-semibold text-[#101411] transition hover:opacity-50"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}

                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="
                    group
                    mt-2
                    flex
                    h-[60px]
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-[#101411]
                    pl-7
                    pr-2
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_16px_35px_rgba(16,20,17,.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#1A201C]
                  "
                                >
                                    <span>
                                        {mode === "login"
                                            ? "Sign In"
                                            : "Create Account"}
                                    </span>

                                    <span
                                        className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D8FF65]
                      text-[#101411]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </button>
                            </form>

                            {/* Switch account */}

                            <div className="mt-6 border-t border-black/[0.06] pt-5 text-center">
                                <p className="text-[12px] text-black/40">
                                    {mode === "login"
                                        ? "New to Easy Purchase?"
                                        : "Already registered?"}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            switchMode(
                                                mode === "login"
                                                    ? "signup"
                                                    : "login"
                                            )
                                        }
                                        className="ml-2 font-bold text-[#101411] transition hover:opacity-50"
                                    >
                                        {mode === "login"
                                            ? "Create an account"
                                            : "Sign in"}
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* security */}

                        <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-black/25">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Secure account access
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

/* =========================================================
   INPUT
========================================================= */

function AuthField({
    icon: Icon,
    label,
    ...props
}) {
    return (
        <div>
            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-black/45">
                {label}
            </label>

            <div
                className="
          grid
          h-[58px]
          grid-cols-[42px_minmax(0,1fr)]
          items-center
          rounded-[17px]
          border
          border-black/[0.08]
          bg-white
          px-2
          transition-all
          duration-300
          focus-within:border-[#101411]/20
          focus-within:ring-4
          focus-within:ring-[#D8FF65]/20
        "
            >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#F1F3ED] text-black/45">
                    <Icon className="h-4 w-4" />
                </span>

                <input
                    {...props}
                    required
                    className="
            h-full
            min-w-0
            w-full
            bg-transparent
            px-3
            text-[13px]
            font-medium
            text-[#202521]
            outline-none
            placeholder:text-black/25
          "
                />
            </div>
        </div>
    );
}

/* =========================================================
   GOOGLE ICON
========================================================= */

function GoogleIcon() {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fill="#4285F4"
                d="M21.6 12.227c0-.709-.064-1.391-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.509h3.232c1.891-1.741 2.982-4.309 2.982-7.35Z"
            />

            <path
                fill="#34A853"
                d="M12 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.041.955-3.386.955-2.605 0-4.809-1.759-5.6-4.123H3.059v2.591A9.997 9.997 0 0 0 12 22Z"
            />

            <path
                fill="#FBBC05"
                d="M6.4 13.9a6.01 6.01 0 0 1-.318-1.9c0-.659.114-1.3.318-1.9V7.509H3.059A10.002 10.002 0 0 0 2 12c0 1.614.386 3.141 1.059 4.491L6.4 13.9Z"
            />

            <path
                fill="#EA4335"
                d="M12 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C16.959 2.991 14.7 2 12 2a9.997 9.997 0 0 0-8.941 5.509L6.4 10.1c.791-2.364 2.995-4.123 5.6-4.123Z"
            />
        </svg>
    );
}