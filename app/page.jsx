import HomeEffects from "@/components/HomeEffects";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BadgeDollarSign,
  Blocks,
  Boxes,
  Check,
  ChevronDown,
  Clock3,
  Construction,
  FileCheck2,
  Headphones,
  LayoutGrid,
  PackageCheck,
  PackagePlus,
  Paintbrush,
  PanelTop,
  Search,
  Send,
  Truck,
  Wrench,
} from "lucide-react";



export default function HomePage() {
  return (
    <>
      <HomeEffects />
      <div id="scrollProgress" />
      <main>

        <section id="home" className="relative min-h-screen overflow-hidden">

          <div className="hero-bg absolute inset-0"></div>

          <div className="hero-vignette absolute inset-0"></div>


          <div className="relative z-10 mx-auto
                      flex min-h-screen
                      max-w-[1450px]
                      flex-col justify-end
                      px-5 pb-10 pt-32
                      md:px-10 md:pb-12
                      lg:px-14 lg:pb-14">

            {/* Label */}
            <div className="hero-intro mb-5
                          flex items-center gap-3">

              <span className="h-2 w-2
                              rounded-full
                              bg-[#D8FF65]
                              shadow-[0_0_18px_#D8FF65]"></span>

              <span className="text-[11px]
                              font-medium uppercase
                              tracking-[0.22em]
                              text-white/65">
                Building Materials Solutions
              </span>

            </div>


            <div
              className="
    grid items-end gap-8
    lg:grid-cols-[minmax(0,1fr)_360px]
    lg:gap-10
  "
            >
              {/* =====================================================
      HERO COPY
  ====================================================== */}

              <div className="hero-content relative z-20 min-w-0">
                <h1
                  className="
        hero-title
        font-display
        max-w-[1050px]
        text-[42px]
        font-medium
        leading-[0.94]
        tracking-[-0.055em]
        text-white
        min-[390px]:text-[46px]
        sm:text-[60px]
        md:text-[76px]
        lg:text-[88px]
        xl:text-[100px]
      "
                >
                  {/* First line */}
                  <span className="block">
                    Materials that
                  </span>

                  {/* =================================================
          SECOND LINE
          build + animated word
      ================================================== */}

                  <span
                    className="
          mt-[0.05em]
          flex
          max-w-full
          items-center
          gap-[0.14em]
          whitespace-nowrap
        "
                  >
                    <span
                      className="
            block
            shrink-0
            leading-none
          "
                    >
                      build
                    </span>

                    {/* =================================================
            WORD SLIDER VIEWPORT
        ================================================== */}

                    <span
                      id="heroWordWindow"
                      className="
            relative
            block
            h-[1.18em]
            min-w-[5.05em]
            shrink-0
            overflow-hidden
            text-[#D8FF65]
          "
                    >
                      <span
                        id="wordSlider"
                        className="
              absolute
              left-0
              top-[0.04em]
              block
              w-full
              translate-y-0
              will-change-transform
            "
                      >
                        {/* 01 */}

                        <span
                          className="
                hero-word-row
                flex
                h-[1.10em]
                items-center
                whitespace-nowrap
                leading-none
              "
                        >
                          better.
                        </span>

                        {/* 02 */}

                        <span
                          className="
                hero-word-row
                flex
                h-[1.10em]
                items-center
                whitespace-nowrap
                leading-none
              "
                        >
                          stronger.
                        </span>

                        {/* 03 */}

                        <span
                          className="
                hero-word-row
                flex
                h-[1.10em]
                items-center
                whitespace-nowrap
                leading-none
              "
                        >
                          smarter.
                        </span>

                        {/* 04 */}

                        <span
                          className="
                hero-word-row
                flex
                h-[1.10em]
                items-center
                whitespace-nowrap
                leading-none
              "
                        >
                          greener.
                        </span>

                        {/* Clone for seamless loop */}

                        <span
                          aria-hidden="true"
                          className="
                hero-word-row
                flex
                h-[1.10em]
                items-center
                whitespace-nowrap
                leading-none
              "
                        >
                          better.
                        </span>
                      </span>
                    </span>

                    {/* SEO / accessibility fallback */}

                    <span className="sr-only">
                      better.
                    </span>
                  </span>
                </h1>

                {/* =====================================================
        DESCRIPTION
    ====================================================== */}

                <p
                  className="
        hero-copy
        mt-5
        max-w-2xl
        text-[15px]
        leading-7
        text-white/70
        md:mt-6
        md:text-lg
      "
                >
                  Your trusted source for quality building materials,
                  construction products and reliable supply solutions
                  for residential, commercial and industrial projects.
                </p>

                {/* =====================================================
        ACTIONS
    ====================================================== */}

                <div
                  className="
        hero-actions
        mt-7
        flex
        flex-wrap
        gap-3
        md:mt-8
      "
                >
                  <a
                    href="/products"
                    data-magnetic
                    className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-[#D8FF65]
          px-6
          py-4
          text-sm
          font-semibold
          text-[#101411]
          transition
          duration-300
          hover:scale-[1.03]
          hover:bg-white
        "
                  >
                    Explore Products

                    <ArrowUpRight
                      className="
            h-4 w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
                    />
                  </a>

                  <a
                    href="#quote"
                    className="
          flex
          items-center
          rounded-full
          border
          border-white/20
          bg-white/10
          px-6
          py-4
          text-sm
          font-medium
          text-white
          backdrop-blur-xl
          transition
          duration-300
          hover:bg-white
          hover:text-black
        "
                  >
                    Request a Quote
                  </a>
                </div>
              </div>

              {/* =====================================================
    FLOATING PRODUCT CARD
====================================================== */}

              <aside
                data-float
                className="
    hero-card
    relative
    z-20
    hidden
    lg:block
  "
              >
                <div
                  className="
      group
      relative
      isolate
      overflow-hidden
      rounded-[28px]
      border
      border-white/15
      p-6
      text-white
      shadow-[0_30px_90px_rgba(0,0,0,0.38)]
    "
                  style={{
                    background: `
        radial-gradient(
          circle at 88% 4%,
          rgba(255,255,255,0.34) 0%,
          rgba(255,255,255,0.14) 18%,
          transparent 42%
        ),
        radial-gradient(
          circle at 5% 105%,
          rgba(216,138,45,0.30) 0%,
          rgba(216,138,45,0.13) 28%,
          transparent 55%
        ),
        radial-gradient(
          circle at 100% 105%,
          rgba(184,219,56,0.34) 0%,
          rgba(184,219,56,0.14) 32%,
          transparent 58%
        ),
        linear-gradient(
          135deg,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.025) 48%,
          rgba(0,0,0,0.14)
        ),
        rgba(17,20,18,0.62)
      `,

                    backdropFilter: "blur(30px) saturate(145%)",
                    WebkitBackdropFilter: "blur(30px) saturate(145%)",
                  }}
                >
                  {/* =====================================================
        INNER GLASS HIGHLIGHT
    ====================================================== */}

                  <div
                    className="
        pointer-events-none
        absolute
        inset-[1px]
        rounded-[27px]
        border
        border-white/[0.04]
      "
                  />

                  {/* Top shine */}

                  <div
                    className="
        pointer-events-none
        absolute
        left-[8%]
        right-[8%]
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
      "
                  />

                  {/* Extra soft white glow */}

                  <div
                    className="
        pointer-events-none
        absolute
        -right-14
        -top-20
        h-52
        w-52
        rounded-full
        bg-white/10
        blur-[55px]
      "
                  />

                  {/* Amber glow */}

                  <div
                    className="
        pointer-events-none
        absolute
        -bottom-24
        -left-20
        h-56
        w-56
        rounded-full
        bg-[#D88A2D]/20
        blur-[60px]
      "
                  />

                  {/* Lime glow */}

                  <div
                    className="
        pointer-events-none
        absolute
        -bottom-24
        -right-20
        h-60
        w-60
        rounded-full
        bg-[#B8DB38]/20
        blur-[65px]
      "
                  />

                  {/* =====================================================
        CONTENT
    ====================================================== */}

                  <div className="relative z-10">
                    {/* Header */}

                    <div className="flex items-center justify-between">
                      <span
                        className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/55
          "
                      >
                        Product Solutions
                      </span>

                      <div
                        className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/[0.06]
            text-white
            backdrop-blur-xl
          "
                      >
                        <Boxes className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Heading */}

                    <h3
                      className="
          mt-7
          text-[21px]
          font-medium
          leading-[1.3]
          tracking-[-0.025em]
          text-white
        "
                    >
                      Everything your project needs.
                    </h3>

                    {/* Description */}

                    <p
                      className="
          mt-3
          text-sm
          leading-6
          text-white/65
        "
                    >
                      Reliable construction materials from trusted brands for every
                      stage of your project.
                    </p>

                    {/* =====================================================
          PRODUCT MINI CARDS
      ====================================================== */}

                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {["Cement", "Steel", "Aluminium", "Paints"].map((item) => (
                        <div
                          key={item}
                          className="
              rounded-[14px]
              border
              border-white/15
              bg-white/[0.055]
              px-4
              py-3
              text-sm
              font-medium
              text-white/75
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:border-white/25
              hover:bg-white/[0.10]
              hover:text-white
            "
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* =====================================================
          VIEW CATEGORIES
      ====================================================== */}

                    <a
                      href="#products"
                      className="
          group/link
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-5
          text-sm
          font-medium
          text-white/85
        "
                    >
                      <span>View Categories</span>

                      <span
                        className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#D8FF65]
            text-[#101411]
            shadow-[0_8px_25px_rgba(216,255,101,0.20)]
            transition-all
            duration-300
            group-hover/link:rotate-45
            group-hover/link:bg-white
          "
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>


            {/* =====================================================
          HERO PRODUCT SEARCH + FILTERS
      ====================================================== */}

            <div className="hero-search hero-brands mt-8
          rounded-[26px]
          bg-white
          p-3
          shadow-[0_20px_70px_rgba(0,0,0,0.22)]
          md:p-4">

              <div className="grid gap-2
              lg:grid-cols-[1.5fr_1fr_1fr_auto]
              lg:items-center">

                {/* =================================================
                  SEARCH INPUT
              ================================================== */}

                <div className="hero-search-field
                  flex min-h-[72px]
                  items-center gap-4
                  rounded-[18px]
                  bg-[#F5F6F2]
                  px-5">

                  <span className="hero-search-icon">
                    <Search className="h-[18px] w-[18px]" />
                  </span>


                  <div className="min-w-0 flex-1">

                    <label htmlFor="productSearch" className="hero-search-label">
                      Search Products
                    </label>

                    <input id="productSearch" type="text" autoComplete="off"
                      placeholder="Cement, steel, paint..." className="mt-1 w-full
                          border-0
                          bg-transparent
                          p-0
                          text-sm
                          font-semibold
                          text-[#101411]
                          outline-none
                          placeholder:font-medium
                          placeholder:text-black/30" />

                  </div>

                </div>


                {/* =================================================
                  CATEGORY CUSTOM DROPDOWN
              ================================================== */}

                <div className="custom-select" data-dropdown="" data-dropdown-type="category">

                  <button type="button" className="custom-select-trigger" data-dropdown-trigger=""
                    aria-expanded="false">

                    <span className="custom-select-left">

                      <span className="custom-select-icon">

                        <LayoutGrid className="h-[18px] w-[18px]" />

                      </span>


                      <span className="custom-select-copy">

                        <small>
                          Category
                        </small>

                        <strong data-dropdown-label="">
                          All Products
                        </strong>

                      </span>

                    </span>


                    <span className="custom-select-arrow">

                      <ChevronDown className="h-4 w-4" />

                    </span>

                  </button>


                  {/* Menu */}

                  <div className="custom-select-menu" data-dropdown-menu="">

                    <div className="custom-select-menu-head">

                      <span>
                        Select Category
                      </span>

                      <span>
                        Products
                      </span>

                    </div>


                    {/* All */}
                    <button type="button" className="custom-select-option active" data-value="">

                      <span className="option-icon">

                        <Boxes />

                      </span>


                      <span className="option-copy">

                        <strong>
                          All Products
                        </strong>

                        <small>
                          Browse every category
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Cement */}
                    <button type="button" className="custom-select-option" data-value="cement">

                      <span className="option-icon">

                        <Blocks />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Cement & Concrete
                        </strong>

                        <small>
                          Cement, blocks and concrete
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Steel */}
                    <button type="button" className="custom-select-option" data-value="steel">

                      <span className="option-icon">

                        <Construction />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Steel & Metals
                        </strong>

                        <small>
                          Structural metal materials
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Aluminium */}
                    <button type="button" className="custom-select-option" data-value="aluminium">

                      <span className="option-icon">

                        <PanelTop />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Aluminium
                        </strong>

                        <small>
                          Profiles, sheets and systems
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Paint */}
                    <button type="button" className="custom-select-option" data-value="paint">

                      <span className="option-icon">

                        <Paintbrush />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Paints & Coatings
                        </strong>

                        <small>
                          Interior and exterior finishes
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Hardware */}
                    <button type="button" className="custom-select-option" data-value="hardware">

                      <span className="option-icon">

                        <Wrench />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Hardware
                        </strong>

                        <small>
                          Tools, fixings and accessories
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>

                  </div>


                  <input type="hidden" id="categoryFilter" defaultValue="" />

                </div>


                {/* =================================================
                  BRAND CUSTOM DROPDOWN
              ================================================== */}

                <div className="custom-select" data-dropdown="" data-dropdown-type="brand">

                  <button type="button" className="custom-select-trigger" data-dropdown-trigger=""
                    aria-expanded="false">

                    <span className="custom-select-left">

                      <span className="custom-select-icon">

                        <BadgeCheck className="h-[18px] w-[18px]" />

                      </span>


                      <span className="custom-select-copy">

                        <small>
                          Brand
                        </small>

                        <strong data-dropdown-label="">
                          All Brands
                        </strong>

                      </span>

                    </span>


                    <span className="custom-select-arrow">

                      <ChevronDown className="h-4 w-4" />

                    </span>

                  </button>


                  {/* Menu */}

                  <div className="custom-select-menu" data-dropdown-menu="">

                    <div className="custom-select-menu-head">

                      <span>
                        Select Brand
                      </span>

                      <span>
                        Partners
                      </span>

                    </div>


                    {/* All */}
                    <button type="button" className="custom-select-option active" data-value="">

                      <span className="option-icon">

                        <BadgeCheck />

                      </span>


                      <span className="option-copy">

                        <strong>
                          All Brands
                        </strong>

                        <small>
                          Browse every manufacturer
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Asian Paints */}
                    <button type="button" className="custom-select-option" data-value="asian-paints">

                      <span className="option-brand-logo">

                        <img src="/Assets/asian-paints-logo-free-png.png" alt="Asian Paints" />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Asian Paints
                        </strong>

                        <small>
                          Paints & coatings
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Brand 2 */}
                    <button type="button" className="custom-select-option" data-value="brand-2">

                      <span className="option-brand-logo">

                        <img src="/Assets/brand-2.png" alt="Brand 2" />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Brand 02
                        </strong>

                        <small>
                          Building materials
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Brand 3 */}
                    <button type="button" className="custom-select-option" data-value="brand-3">

                      <span className="option-brand-logo">

                        <img src="/Assets/brand-3.png" alt="Brand 3" />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Brand 03
                        </strong>

                        <small>
                          Construction products
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>


                    {/* Brand 4 */}
                    <button type="button" className="custom-select-option" data-value="brand-4">

                      <span className="option-brand-logo">

                        <img src="/Assets/brand-4.png" alt="Brand 4" />

                      </span>


                      <span className="option-copy">

                        <strong>
                          Brand 04
                        </strong>

                        <small>
                          Professional materials
                        </small>

                      </span>


                      <span className="option-check-wrap">

                        <Check className="option-check" />

                      </span>

                    </button>

                  </div>


                  <input type="hidden" id="brandFilter" defaultValue="" />

                </div>


                {/* =================================================
                  SEARCH BUTTON
              ================================================== */}

                <button id="heroSearchButton" type="button" className="hero-search-button group">

                  <span>
                    Search
                  </span>


                  <span className="hero-search-button-icon">

                    <ArrowUpRight className="h-4 w-4" />

                  </span>

                </button>

              </div>


              {/* =====================================================
              QUICK CATEGORY FILTERS
          ====================================================== */}

              <div className="hero-quick-filters
              mt-3 flex items-center
              gap-2 overflow-x-auto
              px-1 pb-1">

                <span className="quick-filter-title">
                  Popular
                </span>


                <button type="button" className="quick-filter active" data-quick-filter="">
                  All
                </button>


                <button type="button" className="quick-filter" data-quick-filter="cement">
                  Cement
                </button>


                <button type="button" className="quick-filter" data-quick-filter="steel">
                  Steel
                </button>


                <button type="button" className="quick-filter" data-quick-filter="aluminium">
                  Aluminium
                </button>


                <button type="button" className="quick-filter" data-quick-filter="paint">
                  Paints
                </button>


                <button type="button" className="quick-filter" data-quick-filter="hardware">
                  Hardware
                </button>

              </div>

            </div>




            {/* =====================================================
          HERO STATS
      ====================================================== */}

            <div
              className="
                              hero-stats mt-7
                              grid w-full max-w-[660px] grid-cols-3
                              overflow-hidden rounded-[22px]
                              border border-white/10
                              bg-black/20 text-white
                              shadow-[0_14px_45px_rgba(0,0,0,0.14)]
                              backdrop-blur-xl
                          "
            >
              <div className="flex min-w-0 flex-col justify-center px-3 py-4 sm:px-5 sm:py-5">
                <p className="flex min-h-[28px] items-baseline justify-center text-xl font-semibold leading-none tracking-[-0.03em] sm:min-h-[32px] sm:justify-start sm:text-2xl [font-variant-numeric:tabular-nums]">
                  <span data-counter="500" className="inline-block min-w-[3ch] text-right">500</span>
                  <span aria-hidden="true" className="ml-[1px]">+</span>
                </p>

                <p className="mt-2 min-h-[28px] text-center text-[10px] leading-[1.35] text-white/45 sm:min-h-0 sm:text-left sm:text-xs">
                  Building Products
                </p>
              </div>

              <div className="flex min-w-0 flex-col justify-center border-x border-white/10 px-3 py-4 sm:px-5 sm:py-5">
                <p className="flex min-h-[28px] items-baseline justify-center text-xl font-semibold leading-none tracking-[-0.03em] sm:min-h-[32px] sm:justify-start sm:text-2xl [font-variant-numeric:tabular-nums]">
                  <span data-counter="30" className="inline-block min-w-[3ch] text-right">30</span>
                  <span aria-hidden="true" className="ml-[1px]">+</span>
                </p>

                <p className="mt-2 min-h-[28px] text-center text-[10px] leading-[1.35] text-white/45 sm:min-h-0 sm:text-left sm:text-xs">
                  Trusted Brands
                </p>
              </div>

              <div className="flex min-w-0 flex-col justify-center px-3 py-4 sm:px-5 sm:py-5">
                <p className="flex min-h-[28px] items-baseline justify-center text-xl font-semibold leading-none tracking-[-0.03em] sm:min-h-[32px] sm:justify-start sm:text-2xl [font-variant-numeric:tabular-nums]">
                  <span data-counter="250" className="inline-block min-w-[3ch] text-right">250</span>
                  <span aria-hidden="true" className="ml-[1px]">+</span>
                </p>

                <p className="mt-2 min-h-[28px] text-center text-[10px] leading-[1.35] text-white/45 sm:min-h-0 sm:text-left sm:text-xs">
                  Projects Supplied
                </p>
              </div>
            </div>

          </div>

        </section>
        {/* =================================================
                  MARQUEE
              ================================================== */}

        <section className="overflow-hidden
                  border-y border-black/5
                  bg-[#D8FF65]
                  py-4">

          <div className="marquee">

            <div className="marquee-track">

              <div className="marquee-item">CEMENT</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">STEEL</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">ALUMINIUM</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">PAINTS</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">HARDWARE</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">BUILD BETTER</div>
              <div className="marquee-dot"></div>


              {/* duplicate */}

              <div className="marquee-item">CEMENT</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">STEEL</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">ALUMINIUM</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">PAINTS</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">HARDWARE</div>
              <div className="marquee-dot"></div>

              <div className="marquee-item">BUILD BETTER</div>
              <div className="marquee-dot"></div>

            </div>

          </div>

        </section>


        {/* =================================================
                  PRODUCTS
              ================================================== */}

        <section id="products" className="bg-[#F5F5F0]
                  py-20 md:py-24 lg:py-28">

          <div className="mx-auto max-w-[1450px]
                      px-5 md:px-10 lg:px-14">

            <div className="mb-10 grid gap-6
                          md:mb-12
                          lg:grid-cols-2
                          lg:items-end">

              <div data-reveal="">

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-[2px] w-8
                                      bg-[#96C11F]"></span>

                  <span className="text-[11px]
                                      font-semibold uppercase
                                      tracking-[0.22em]
                                      text-black/40">
                    Product Categories
                  </span>

                </div>


                <h2 className="max-w-2xl
                                  text-[40px]
                                  font-medium
                                  leading-[1.03]
                                  tracking-[-0.045em]
                                  md:text-[54px]
                                  lg:text-[62px]">

                  Everything needed

                  <span className="text-black/30">
                    to build better.
                  </span>

                </h2>

              </div>


              <div data-reveal="" className="lg:flex lg:justify-end">

                <p className="max-w-lg
                                  text-base leading-7
                                  text-black/50">
                  Explore construction materials selected for
                  performance, reliability and long-term project value.
                </p>

              </div>

            </div>


            {/* Product Grid */}
            <div data-stagger="" className="grid grid-cols-1 gap-4
                          md:grid-cols-2
                          lg:grid-cols-3">

              {/* 01 */}
              <a href="/products" data-tilt="" className="group relative
                              min-h-[420px]
                              overflow-hidden
                              rounded-[28px]
                              bg-[#111]">

                <img loading="lazy" src="/Assets/cement.jpg" alt="Cement" className="category-image
                                  absolute inset-0
                                  h-full w-full object-cover" />

                <div className="absolute inset-0
                                  bg-gradient-to-t
                                  from-black/90
                                  via-black/20
                                  to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-7">

                  <div className="mb-5 flex
                                      items-center justify-between">

                    <span className="text-xs text-white/45">
                      01
                    </span>

                    <span className="circle-arrow">

                      <ArrowUpRight className="h-4 w-4" />

                    </span>

                  </div>


                  <h3 className="text-2xl
                                      font-semibold text-white
                                      md:text-3xl">
                    Cement & Concrete
                  </h3>

                  <p className="mt-3 max-w-sm
                                      text-sm leading-6
                                      text-white/55">
                    High-performance cement and concrete
                    solutions for modern construction.
                  </p>

                </div>

              </a>


              {/* 02 */}
              <a href="/products" data-tilt="" className="group relative
                              min-h-[420px]
                              overflow-hidden
                              rounded-[28px]
                              bg-[#111]">

                <img loading="lazy" src="/Assets/steel.jpg" alt="Steel" className="category-image
                                  absolute inset-0
                                  h-full w-full object-cover" />

                <div className="absolute inset-0
                                  bg-gradient-to-t
                                  from-black/90
                                  via-black/20
                                  to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-7">

                  <div className="mb-5 flex
                                      items-center justify-between">

                    <span className="text-xs text-white/45">
                      02
                    </span>

                    <span className="circle-arrow">

                      <ArrowUpRight className="h-4 w-4" />

                    </span>

                  </div>

                  <h3 className="text-2xl
                                      font-semibold text-white
                                      md:text-3xl">
                    Steel & Metals
                  </h3>

                  <p className="mt-3 max-w-sm
                                      text-sm leading-6
                                      text-white/55">
                    Structural steel and metal solutions
                    for demanding construction projects.
                  </p>

                </div>

              </a>


              {/* 03 */}
              <a href="/products" data-tilt="" className="group relative
                              min-h-[420px]
                              overflow-hidden
                              rounded-[28px]
                              bg-[#111]">

                <img loading="lazy" src="/Assets/Paint.jpg" alt="Paints" className="category-image
                                  absolute inset-0
                                  h-full w-full object-cover" />

                <div className="absolute inset-0
                                  bg-gradient-to-t
                                  from-black/90
                                  via-black/20
                                  to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-7">

                  <div className="mb-5 flex
                                      items-center justify-between">

                    <span className="text-xs text-white/45">
                      03
                    </span>

                    <span className="circle-arrow">

                      <ArrowUpRight className="h-4 w-4" />

                    </span>

                  </div>

                  <h3 className="text-2xl
                                      font-semibold text-white
                                      md:text-3xl">
                    Paints & Coatings
                  </h3>

                  <p className="mt-3 max-w-sm
                                      text-sm leading-6
                                      text-white/55">
                    Protective and decorative finishes
                    for every surface.
                  </p>

                </div>

              </a>



            </div>

          </div>

        </section>


        {/* =================================================
                  ABOUT
              ================================================== */}

        <section id="about" className="overflow-hidden
                  bg-white
                  py-20 md:py-24 lg:py-28">

          <div className="mx-auto max-w-[1450px]
                      px-5 md:px-10 lg:px-14">

            <div className="grid gap-10
                          lg:grid-cols-2
                          lg:items-center
                          lg:gap-16">

              {/* Image */}
              <div data-image-reveal="" className="relative
                              overflow-hidden
                              rounded-[32px]">

                <div className="h-[480px]
                                  overflow-hidden
                                  md:h-[650px]">

                  <img loading="lazy" data-parallax="" src="/Assets/site.jpg" alt="Construction project"
                    className="h-[115%] w-full object-cover" />

                </div>


                <div data-float="" className="absolute bottom-6 left-6
                                  rounded-[24px]
                                  border border-white/20
                                  bg-black/25
                                  p-5 text-white
                                  backdrop-blur-xl">

                  <p className="text-4xl font-semibold">
                    15+
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Years of trusted supply
                  </p>

                </div>

              </div>


              {/* Copy */}
              <div data-reveal-right="">

                <p className="eyebrow">
                  About Top Range
                </p>

                <h2 className="mt-5 max-w-xl
                                  text-[40px]
                                  font-medium
                                  leading-[1.05]
                                  tracking-[-0.045em]
                                  md:text-[54px]
                                  lg:text-[60px]">

                  Building trust into

                  <span className="text-black/30">
                    every project.
                  </span>

                </h2>


                <p className="mt-6 max-w-xl
                                  text-base leading-8
                                  text-black/50">
                  Top Range Building Materials delivers reliable
                  construction products for contractors, developers,
                  consultants and businesses across residential,
                  commercial and industrial projects.
                </p>


                <div className="mt-9 grid gap-5
                                  sm:grid-cols-2">

                  <div className="about-feature">

                    <BadgeCheck className="h-5 w-5 text-[#88AE1D]" />

                    <h4 className="mt-4 font-semibold">
                      Trusted Products
                    </h4>

                    <p className="mt-2 text-sm
                                          leading-6 text-black/45">
                      Carefully selected materials
                      from established manufacturers.
                    </p>

                  </div>


                  <div className="about-feature">

                    <Truck className="h-5 w-5 text-[#88AE1D]" />

                    <h4 className="mt-4 font-semibold">
                      Reliable Supply
                    </h4>

                    <p className="mt-2 text-sm
                                          leading-6 text-black/45">
                      Efficient procurement and
                      dependable project delivery.
                    </p>

                  </div>

                </div>


                <a href="#buildStory" data-magnetic="" className="mt-9 inline-flex
                                  items-center gap-3
                                  rounded-full
                                  bg-[#101411]
                                  px-6 py-4
                                  text-sm font-medium
                                  text-white">

                  Discover Our Story

                  <ArrowDown className="h-4 w-4" />

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
                  STICKY STORY
              ================================================== */}

        <section id="buildStory" className="relative bg-[#0E1512] text-white">

          <div className="mx-auto grid
                      max-w-[1450px]
                      gap-12
                      px-5 py-20
                      md:px-10 md:py-24
                      lg:grid-cols-2
                      lg:gap-16
                      lg:px-14 lg:py-28">

            {/* Sticky image */}
            <div className="lg:sticky
                          lg:top-24
                          lg:h-[calc(100vh-120px)]">

              <div className="relative h-[520px]
                              overflow-hidden
                              rounded-[32px]
                              lg:h-full">

                <img loading="lazy" data-story-image="0" src="/Assets/baement.jpg" alt="Foundation"
                  className="story-image" />

                <img loading="lazy" data-story-image="1" src="/Assets/constraction.jpg" alt="Structure"
                  className="story-image" />

                <img loading="lazy" data-story-image="2" src="/Assets/final paiting.jpg" alt="Finishing"
                  className="story-image" />


                <div className="absolute inset-0
                                  bg-gradient-to-t
                                  from-black/70
                                  via-transparent
                                  to-black/10"></div>


                <div className="absolute left-6 top-6
                                  flex h-14 w-14
                                  items-center justify-center
                                  rounded-full
                                  border border-white/20
                                  bg-black/20
                                  text-sm
                                  backdrop-blur-xl">

                  <span id="storyNumber">
                    01
                  </span>

                </div>


                <div className="absolute bottom-0 left-0 p-8">

                  <p className="eyebrow text-white/40">
                    Building Process
                  </p>

                  <p id="storyLabel" className="mt-2 text-2xl font-medium">
                    Foundation
                  </p>

                </div>

              </div>

            </div>


            {/* Scroll copy */}
            <div className="lg:pt-[8vh]">

              <div className="mb-20 lg:mb-24">

                <p data-reveal="" className="eyebrow text-white/40">
                  From Ground to Finish
                </p>

                <h2 className="mt-5 max-w-xl
                                  text-[42px]
                                  font-medium
                                  leading-[1.03]
                                  tracking-[-0.05em]
                                  md:text-[58px]
                                  lg:text-[64px]">

                  Materials for
                  every stage of

                  <span className="text-[#D8FF65]">
                    construction.
                  </span>

                </h2>

              </div>


              {/* step */}
              <article data-story="0" data-label="Foundation" className="story-step active">

                <div>

                  <span className="story-number">
                    01 · Foundation
                  </span>

                  <h3 className="story-heading">
                    Start with strength.
                  </h3>

                  <p className="story-copy">
                    Reliable cement and concrete products
                    designed to support strong foundations,
                    structural stability and long-term performance.
                  </p>

                  <div className="story-tags">

                    <span>Cement</span>
                    <span>Concrete</span>
                    <span>Blocks</span>

                  </div>

                </div>

              </article>


              <article data-story="1" data-label="Structure" className="story-step">

                <div>

                  <span className="story-number">
                    02 · Structure
                  </span>

                  <h3 className="story-heading">
                    Build with precision.
                  </h3>

                  <p className="story-copy">
                    Structural steel, aluminium and metal
                    products engineered for demanding
                    construction requirements.
                  </p>

                  <div className="story-tags">

                    <span>Steel</span>
                    <span>Aluminium</span>
                    <span>Profiles</span>

                  </div>

                </div>

              </article>


              <article data-story="2" data-label="Finishing" className="story-step">

                <div>

                  <span className="story-number">
                    03 · Finishing
                  </span>

                  <h3 className="story-heading">
                    Finish with confidence.
                  </h3>

                  <p className="story-copy">
                    Complete each project with coatings,
                    paints, hardware and finishing materials
                    designed for lasting quality.
                  </p>

                  <div className="story-tags">

                    <span>Paint</span>
                    <span>Coatings</span>
                    <span>Hardware</span>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =================================================
                  HORIZONTAL PRODUCT EXPERIENCE
              ================================================== */}

        <section id="materialShowcase" className="horizontal-section
                  bg-[#F5F5F0]
                  py-20 md:py-24 lg:py-28">

          <div className="mx-auto max-w-[1450px]
                      px-5 md:px-10 lg:px-14">

            <div className="mb-12 grid gap-8
                          lg:grid-cols-2
                          lg:items-end">

              <div>

                <p data-reveal="" className="eyebrow">
                  Explore Materials
                </p>

                <h2 className="mt-4 max-w-3xl
                                  text-[42px]
                                  font-medium
                                  leading-[1.03]
                                  tracking-[-0.05em]
                                  md:text-[58px]
                                  lg:text-[68px]">

                  <span className="reveal-line">
                    <span className="reveal-line-inner">
                      Built for today.
                    </span>
                  </span>

                  <span className="reveal-line text-black/30">
                    <span className="reveal-line-inner">
                      Ready for tomorrow.
                    </span>
                  </span>

                </h2>

              </div>


              <div data-reveal="" className="lg:flex lg:justify-end">

                <p className="max-w-md
                                  text-base leading-7
                                  text-black/45">
                  Browse material solutions across foundation,
                  structural and finishing applications.
                </p>

              </div>

            </div>

          </div>


          <div className="horizontal-track
                      px-5 md:px-10 lg:px-14">

            {/* horizontal card */}
            <article className="horizontal-card horizontal-image-card">

              <img loading="lazy" src="/Assets/Driller.jpg" alt="Concrete" />

              <div className="horizontal-overlay"></div>

              <div className="horizontal-copy">

                <h3>Drill & Driver</h3>

                <p>
                  Dependable solutions for foundations
                  and structural applications.
                </p>

              </div>

            </article>


            <article className="horizontal-card horizontal-image-card">

              <img loading="lazy" src="/Assets/angle grinter.jpg" alt="Steel" />

              <div className="horizontal-overlay"></div>

              <div className="horizontal-copy">


                <h3>Angle Grinder</h3>

                <p>
                  Strength, precision and durability for
                  structural construction.
                </p>

              </div>

            </article>


            <article className="horizontal-card horizontal-image-card">

              <img loading="lazy" src="/Assets/hammer driller.jpg" alt="Finishes" />

              <div className="horizontal-overlay"></div>

              <div className="horizontal-copy">


                <h3>Cordless Hammer Drill</h3>

                <p>
                  Finishing solutions developed for
                  protection and lasting appearance.
                </p>

              </div>

            </article>


            {/* CTA Card */}
            <article className="horizontal-card
                          flex min-h-[520px]
                          flex-col justify-between
                          rounded-[32px]
                          bg-[#D8FF65]
                          p-8
                          md:min-h-[600px]
                          md:p-10">

              <div className="flex justify-between">

                <span className="eyebrow">
                  Full Catalogue
                </span>

                <span className="text-sm">
                  500+
                </span>

              </div>


              <div>

                <h3 className="max-w-xl
                                  text-4xl font-medium
                                  leading-[1]
                                  tracking-[-0.04em]
                                  md:text-6xl">
                  Find what your project needs.
                </h3>

                <a href="#products" data-magnetic="" className="mt-8 inline-flex
                                  items-center gap-3
                                  rounded-full
                                  bg-black
                                  px-6 py-4
                                  text-sm font-medium
                                  text-white">

                  Browse Catalogue

                  <ArrowUpRight className="h-4 w-4" />

                </a>

              </div>

            </article>

          </div>

        </section>


        {/* =================================================
                  WHY US
              ================================================== */}

        <section className="relative overflow-hidden
                  bg-[#101713]
                  py-20 text-white
                  md:py-24 lg:py-28">

          <div className="ambient-glow"></div>

          <div className="relative mx-auto
                      max-w-[1450px]
                      px-5 md:px-10 lg:px-14">

            <div className="grid gap-12
                          lg:grid-cols-[0.9fr_1.1fr]
                          lg:gap-16">

              <div data-reveal="">

                <p className="eyebrow text-white/40">
                  Why Top Range
                </p>

                <h2 className="mt-5 max-w-xl
                                  text-[40px]
                                  font-medium
                                  leading-[1.05]
                                  tracking-[-0.045em]
                                  md:text-[56px]
                                  lg:text-[62px]">
                  Supply that keeps
                  projects moving.
                </h2>

              </div>


              <div data-stagger="" className="feature-grid">

                <div className="feature-card">

                  <PackageCheck className="h-6 w-6 text-[#D8FF65]" />

                  <h3>Quality Assured</h3>

                  <p>
                    Selected products suited to demanding
                    construction requirements.
                  </p>

                </div>


                <div className="feature-card">

                  <Truck className="h-6 w-6 text-[#D8FF65]" />

                  <h3>Reliable Delivery</h3>

                  <p>
                    Efficient supply coordination aligned
                    with your project schedule.
                  </p>

                </div>


                <div className="feature-card">

                  <Headphones className="h-6 w-6 text-[#D8FF65]" />

                  <h3>Expert Support</h3>

                  <p>
                    Professional assistance from product
                    enquiry through delivery.
                  </p>

                </div>


                <div className="feature-card">

                  <BadgeDollarSign className="h-6 w-6 text-[#D8FF65]" />

                  <h3>Competitive Value</h3>

                  <p>
                    Practical sourcing solutions designed
                    around project budgets.
                  </p>

                </div>

              </div>

            </div>


            {/* Counters */}
            <div className="mt-16 grid gap-8
                          border-t border-white/10
                          pt-10
                          sm:grid-cols-2
                          lg:grid-cols-4">

              <div className="counter-block">

                <p>
                  <span data-counter="500" className="tabular-nums">500</span>+
                </p>

                <span>Building Products</span>

              </div>

              <div className="counter-block">

                <p>
                  <span data-counter="30" className="tabular-nums">30</span>+
                </p>

                <span>Trusted Brands</span>

              </div>

              <div className="counter-block">

                <p>
                  <span data-counter="250" className="tabular-nums">250</span>+
                </p>

                <span>Projects Supplied</span>

              </div>

              <div className="counter-block">

                <p>
                  <span data-counter="15" className="tabular-nums">15</span>+
                </p>

                <span>Years Experience</span>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
                  PROJECTS
              ================================================== */}

        <section id="projects" className="bg-white
                  py-20 md:py-24 lg:py-28">

          <div className="mx-auto max-w-[1450px]
                      px-5 md:px-10 lg:px-14">

            <div data-reveal="" className="mb-12">

              <p className="eyebrow">
                Applications
              </p>

              <h2 className="mt-4 max-w-3xl
                              text-[42px]
                              font-medium
                              leading-[1.05]
                              tracking-[-0.045em]
                              md:text-[58px]
                              lg:text-[64px]">
                Materials made for
                real-world projects.
              </h2>

            </div>


            <div data-stagger="" className="grid gap-4
                          lg:grid-cols-12">

              <article className="project-card group
                              min-h-[520px]
                              lg:col-span-7">

                <img loading="lazy" data-parallax="" src="/Assets/construction full.jpg"
                  alt="Commercial high rise" />

                <div className="project-overlay"></div>

                <div className="project-copy">

                  <span>Commercial</span>

                  <h3>
                    High-Rise Developments
                  </h3>

                </div>

              </article>


              <div className="grid gap-4
                              lg:col-span-5">

                <article className="project-card group min-h-[250px]">

                  <img loading="lazy" data-parallax="" src="/Assets/Hero.jpg" alt="Villa" />

                  <div className="project-overlay"></div>

                  <div className="project-copy">

                    <span>Residential</span>

                    <h3>
                      Villa Construction
                    </h3>

                  </div>

                </article>


                <article className="project-card group min-h-[250px]">

                  <img loading="lazy" data-parallax=""
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85"
                    alt="Industrial" />

                  <div className="project-overlay"></div>

                  <div className="project-copy">

                    <span>Industrial</span>

                    <h3>
                      Industrial Facilities
                    </h3>

                  </div>

                </article>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
                  QUOTE PROCESS
              ================================================== */}

        {/* =====================================================
          REQUEST A QUOTE SECTION
      ====================================================== */}

        <section id="quote" className="bg-[#F5F5F0]
          py-20
          md:py-24
          lg:py-28">

          <div className="mx-auto
              max-w-[1450px]
              px-5
              md:px-10
              lg:px-14">

            <div className="grid gap-12
                  lg:grid-cols-[0.8fr_1.2fr]
                  lg:items-start
                  lg:gap-20">

              {/* =============================================
                      LEFT CONTENT
                  ============================================== */}

              <div data-reveal="" className="lg:sticky lg:top-32">

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-8
                              bg-[#91B927]"></span>

                  <p className="text-[11px]
                              font-semibold uppercase
                              tracking-[0.22em]
                              text-black/35">
                    Request a Quote
                  </p>

                </div>


                <h2 className="mt-5
                          max-w-xl
                          text-[42px]
                          font-medium
                          leading-[1.03]
                          tracking-[-0.05em]
                          md:text-[56px]
                          lg:text-[64px]">

                  From enquiry
                  <br />
                  to quotation.

                  <span className="text-black/25">
                    Simple.
                  </span>

                </h2>


                <p className="mt-6
                          max-w-md
                          text-base
                          leading-8
                          text-black/45">
                  Select your required materials, provide the
                  quantities and project details, and our team
                  will prepare a tailored quotation.
                </p>


                {/* small info */}
                <div className="mt-10
                          flex items-center gap-4
                          border-t border-black/10
                          pt-6">

                  <div className="flex h-12 w-12
                              items-center justify-center
                              rounded-full
                              bg-[#D8FF65]">

                    <Clock3 className="h-5 w-5" />

                  </div>


                  <div>

                    <p className="text-sm
                                  font-semibold">
                      Fast quotation process
                    </p>

                    <p className="mt-1
                                  text-xs
                                  text-black/40">
                      Simple enquiry to quote workflow
                    </p>

                  </div>

                </div>

              </div>



              {/* =============================================
                      PROCESS
                  ============================================== */}

              <div className="relative">


                {/* Base line */}
                <div className="absolute
                          left-[31px]
                          top-[34px]
                          bottom-[34px]
                          hidden
                          w-px
                          overflow-hidden
                          bg-black/10
                          sm:block">

                  {/* animated green line */}
                  <div id="processLine" className="h-full
                              w-full
                              origin-top
                              bg-[#96C11F]"></div>

                </div>



                <div className="relative space-y-4">


                  {/* =====================================
                              STEP 01
                          ====================================== */}

                  <article className="quote-process-step group" data-quote-step="">

                    <div className="quote-process-number">
                      01
                    </div>


                    <div className="flex-1">

                      <div className="flex
                                      items-start
                                      justify-between
                                      gap-5">

                        <div>

                          <span className="text-[10px]
                                              font-semibold uppercase
                                              tracking-[0.18em]
                                              text-black/30">
                            Step One
                          </span>


                          <h3 className="mt-2
                                              text-xl
                                              font-semibold
                                              tracking-[-0.02em]
                                              md:text-2xl">
                            Explore Products
                          </h3>

                        </div>


                        <div className="quote-process-icon">

                          <Search className="h-5 w-5" />

                        </div>

                      </div>


                      <p className="mt-3
                                      max-w-xl
                                      text-sm
                                      leading-7
                                      text-black/45">
                        Browse our product categories,
                        available materials and trusted brands.
                      </p>

                    </div>

                  </article>



                  {/* =====================================
                              STEP 02
                          ====================================== */}

                  <article className="quote-process-step group" data-quote-step="">

                    <div className="quote-process-number">
                      02
                    </div>


                    <div className="flex-1">

                      <div className="flex
                                      items-start
                                      justify-between
                                      gap-5">

                        <div>

                          <span className="text-[10px]
                                              font-semibold uppercase
                                              tracking-[0.18em]
                                              text-black/30">
                            Step Two
                          </span>


                          <h3 className="mt-2
                                              text-xl
                                              font-semibold
                                              tracking-[-0.02em]
                                              md:text-2xl">
                            Add to Enquiry
                          </h3>

                        </div>


                        <div className="quote-process-icon">

                          <PackagePlus className="h-5 w-5" />

                        </div>

                      </div>


                      <p className="mt-3
                                      max-w-xl
                                      text-sm
                                      leading-7
                                      text-black/45">
                        Select the required products
                        and enter your required quantities.
                      </p>

                    </div>

                  </article>



                  {/* =====================================
                              STEP 03
                          ====================================== */}

                  <article className="quote-process-step group" data-quote-step="">

                    <div className="quote-process-number">
                      03
                    </div>


                    <div className="flex-1">

                      <div className="flex
                                      items-start
                                      justify-between
                                      gap-5">

                        <div>

                          <span className="text-[10px]
                                              font-semibold uppercase
                                              tracking-[0.18em]
                                              text-black/30">
                            Step Three
                          </span>


                          <h3 className="mt-2
                                              text-xl
                                              font-semibold
                                              tracking-[-0.02em]
                                              md:text-2xl">
                            Submit Requirements
                          </h3>

                        </div>


                        <div className="quote-process-icon">

                          <Send className="h-5 w-5" />

                        </div>

                      </div>


                      <p className="mt-3
                                      max-w-xl
                                      text-sm
                                      leading-7
                                      text-black/45">
                        Add your company, project,
                        delivery and contact information.
                      </p>

                    </div>

                  </article>



                  {/* =====================================
                              STEP 04
                          ====================================== */}

                  <article className="quote-process-step
                              quote-process-final
                              group" data-quote-step="">

                    <div className="quote-process-number
                                  quote-process-number-final">
                      04
                    </div>


                    <div className="flex-1">

                      <div className="flex
                                      items-start
                                      justify-between
                                      gap-5">

                        <div>

                          <span className="text-[10px]
                                              font-semibold uppercase
                                              tracking-[0.18em]
                                              text-black/40">
                            Final Step
                          </span>


                          <h3 className="mt-2
                                              text-xl
                                              font-semibold
                                              tracking-[-0.02em]
                                              md:text-2xl">
                            Receive Your Quote
                          </h3>

                        </div>


                        <div className="quote-process-icon
                                          bg-[#101411]
                                          text-white">

                          <FileCheck2 className="h-5 w-5" />

                        </div>

                      </div>


                      <p className="mt-3
                                      max-w-xl
                                      text-sm
                                      leading-7
                                      text-black/55">
                        Our team reviews your enquiry
                        and prepares a tailored quotation
                        based on your requirements.
                      </p>


                      <a href="/products" className="mt-6
                                      inline-flex
                                      items-center gap-3
                                      rounded-full
                                      bg-[#101411]
                                      px-5 py-3
                                      text-sm
                                      font-semibold
                                      text-white
                                      transition
                                      hover:bg-white
                                      hover:text-black">

                        Start Your Enquiry

                        <ArrowUpRight className="h-4 w-4" />

                      </a>

                    </div>

                  </article>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
                  CTA
              ================================================== */}

        <section className="bg-white
                  px-3 pb-3
                  md:px-5 md:pb-5">

          <div data-image-reveal="" className="relative mx-auto
                      min-h-[560px]
                      max-w-[1600px]
                      overflow-hidden
                      rounded-[36px]">

            <img loading="lazy" data-parallax="" src="/Assets/Hero.jpg" alt="Construction site" className="absolute inset-0
                          h-[115%] w-full object-cover" />

            <div className="absolute inset-0
                          bg-gradient-to-r
                          from-black/90
                          via-black/60
                          to-black/20"></div>


            <div className="relative z-10 mx-auto
                          flex min-h-[560px]
                          max-w-[1450px]
                          items-center
                          px-7 md:px-10 lg:px-14">

              <div data-reveal="" className="max-w-3xl">

                <p className="eyebrow text-white/50">
                  Start Your Project
                </p>

                <h2 className="mt-5
                                  text-[44px]
                                  font-medium
                                  leading-[1]
                                  tracking-[-0.05em]
                                  text-white
                                  md:text-[64px]
                                  lg:text-[74px]">
                  Ready to source
                  the right materials?
                </h2>

                <p className="mt-6 max-w-xl
                                  text-base leading-7
                                  text-white/60">
                  Send us your requirements and let our team
                  prepare a tailored quotation for your project.
                </p>


                <div className="mt-8 flex flex-wrap gap-3">

                  <a href="/contact" data-magnetic="" className="inline-flex
                                      items-center gap-3
                                      rounded-full
                                      bg-[#D8FF65]
                                      px-7 py-4
                                      text-sm font-semibold
                                      text-black">

                    Get in Touch

                    <ArrowUpRight className="h-4 w-4" />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>
        {/* =====================================================
              FOOTER
          ====================================================== */}
        {/* =========================================================
          PREMIUM FOOTER V3
      ========================================================= */}
      </main>
    </>
  );
}
