"use client";

import { useState } from "react";
import Link from "next/link";

import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronDown,
    ChevronRight,
    Minus,
    Package,
    Plus,
    RotateCcw,
    ShieldCheck,
    ShoppingBag,
    Star,
    Truck,
    X,
} from "lucide-react";

/* =========================================================
   PRODUCT IMAGES
========================================================= */

const productImages = [
    "/Assets/Products/product1.jpg",
    "/Assets/Products/product3.jpg",
    "/Assets/Products/product2.jpg",
    "/Assets/Products/product3.jpg",
];

/* =========================================================
   RELATED PRODUCTS
========================================================= */

const relatedProducts = [
    {
        id: 1,
        name: "Professional Angle Grinder",
        brand: "Bosch",
        category: "Power Tools",
        price: 419,
        image: "/Assets/Products/Paint.jpg",
    },
    {
        id: 2,
        name: "Impact Socket Set",
        brand: "Stanley",
        category: "Hand Tools",
        price: 175,
        image: "/Assets/Products/",
    },
    {
        id: 3,
        name: "Heavy Duty Combination Pliers",
        brand: "Stanley",
        category: "Hand Tools",
        price: 69,
        image: "/Assets/Products/combination-pliers.jpg",
    },
    {
        id: 4,
        name: "Industrial Safety Helmet",
        brand: "3M",
        category: "Safety",
        price: 58,
        image: "/Assets/Products/safety-helmet.jpg",
    },
];

/* =========================================================
   PAGE
========================================================= */

export default function ProductDetailsPage() {
    const [selectedImage, setSelectedImage] = useState(
        productImages[0]
    );

    const [quantity, setQuantity] = useState(1);

    const [selectedColor, setSelectedColor] =
        useState("Yellow / Black");

    const [selectedPack, setSelectedPack] =
        useState("1 Piece");

    const [addedToCart, setAddedToCart] =
        useState(false);

    const [quoteOpen, setQuoteOpen] =
        useState(false);

    /* =========================================================
       QUANTITY
    ========================================================= */

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) =>
            Math.max(1, prev - 1)
        );
    };

    /* =========================================================
       ADD TO CART DEMO
    ========================================================= */

    const addToCart = () => {
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 1800);
    };

    return (
        <>
            <main className="min-h-screen overflow-hidden bg-[#F4F5EF] text-[#101411]">

                {/* =====================================================
            PRODUCT HERO
        ===================================================== */}

                <section className="relative overflow-hidden bg-[#07100D] px-5 pb-16 pt-32 text-white md:px-10 lg:px-14 lg:pb-24">

                    {/* Background glows */}

                    <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#D8FF65]/10 blur-[180px]" />

                    <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#C6772C]/10 blur-[150px]" />

                    <div className="relative z-10 mx-auto max-w-[1450px]">

                        {/* =================================================
                BREADCRUMB
            ================================================= */}

                        <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-medium text-white/70">

                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Home
                            </Link>

                            <ChevronRight className="h-3.5 w-3.5 text-white/45" />

                            <Link
                                href="/products"
                                className="transition hover:text-white"
                            >
                                Products
                            </Link>

                            <ChevronRight className="h-3.5 w-3.5 text-white/45" />

                            <span className="font-semibold text-white">
                                Cordless Hammer Drill
                            </span>

                        </div>

                        {/* =================================================
                PRODUCT GRID
            ================================================= */}

                        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-16">

                            {/* =================================================
                  LEFT SIDE / GALLERY
              ================================================= */}

                            <div>

                                {/* Main Image */}

                                <div className="relative h-[470px] overflow-hidden rounded-[34px] bg-[#E9ECE5] sm:h-[570px] lg:h-[640px]">

                                    <ProductImage
                                        src={selectedImage}
                                        alt="Cordless Hammer Drill"
                                        large
                                    />

                                </div>

                                {/* Thumbnails */}

                                <div className="mt-4 grid grid-cols-4 gap-3">

                                    {productImages.map(
                                        (image, index) => (

                                            <button
                                                type="button"
                                                key={`${image}-${index}`}
                                                onClick={() =>
                                                    setSelectedImage(image)
                                                }
                                                className={`
                          relative
                          h-[78px]
                          overflow-hidden
                          rounded-[17px]
                          border
                          bg-[#E9ECE5]
                          transition-all
                          duration-300
                          sm:h-[105px]

                          ${selectedImage === image
                                                        ? "border-[#D8FF65] ring-2 ring-[#D8FF65]/25"
                                                        : "border-white/15 hover:border-white/40"
                                                    }
                        `}
                                            >

                                                <ProductImage
                                                    src={image}
                                                    alt={`Cordless Hammer Drill ${index + 1}`}
                                                />

                                            </button>

                                        )
                                    )}

                                </div>

                            </div>

                            {/* =================================================
                  RIGHT SIDE / PRODUCT DETAILS
              ================================================= */}

                            <div className="lg:pt-2">

                                {/* Category + Brand */}

                                <div className="flex flex-wrap gap-2">

                                    <span className="rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                                        Power Tools
                                    </span>

                                    <span className="rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                                        DeWalt
                                    </span>

                                </div>

                                {/* Product Name */}

                                <h1 className="mt-7 max-w-[700px] text-[45px] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[70px]">

                                    Cordless
                                    <br />

                                    <span className="text-[#D8FF65]">
                                        Hammer Drill
                                    </span>

                                </h1>

                                {/* Product Meta */}

                                <div className="mt-6 flex flex-wrap items-center gap-4">

                                    <p className="text-[13px] font-medium text-white/75">

                                        SKU:

                                        <span className="ml-2 font-semibold text-white">
                                            TR-PT-001
                                        </span>

                                    </p>

                                    <span className="hidden h-4 w-px bg-white/25 sm:block" />

                                    <div className="flex items-center gap-2">

                                        <Star className="h-4 w-4 fill-[#D8FF65] text-[#D8FF65]" />

                                        <span className="text-[13px] font-semibold text-white">
                                            4.9
                                        </span>

                                        <span className="text-[12px] font-medium text-white/65">
                                            Professional Grade
                                        </span>

                                    </div>

                                </div>

                                {/* Description */}

                                <p className="mt-7 max-w-xl text-[16px] leading-8 text-white/80">

                                    Professional cordless hammer drill
                                    engineered for demanding construction,
                                    masonry, concrete, steel and timber
                                    applications. Designed to provide reliable
                                    performance, precise control and durability
                                    for everyday professional use.

                                </p>

                                {/* Stock */}

                                <div className="mt-7 flex items-center gap-3">

                                    <span className="h-2.5 w-2.5 rounded-full bg-[#D8FF65] shadow-[0_0_14px_#D8FF65]" />

                                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                                        In Stock · 28 Pieces Available
                                    </span>

                                </div>

                                {/* =================================================
                    PRICE
                ================================================= */}

                                <div className="mt-8 border-y border-white/20 py-7">

                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                                        <div>

                                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                                                Price / Piece
                                            </p>

                                            <div className="mt-2 flex items-end gap-3">

                                                <span className="text-[42px] font-bold tracking-[-0.045em] text-white">
                                                    AED 699
                                                </span>

                                                <span className="pb-1 text-[14px] font-medium text-white/50 line-through">
                                                    AED 749
                                                </span>

                                            </div>

                                        </div>

                                        <div className="sm:text-right">

                                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65">
                                                Bulk Orders
                                            </p>

                                            <p className="mt-1 text-[13px] font-semibold text-[#D8FF65]">
                                                Special project pricing available
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* =================================================
                    PRODUCT OPTIONS
                ================================================= */}

                                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                                    <ProductDropdown
                                        label="Color / Finish"
                                        value={selectedColor}
                                        options={[
                                            "Yellow / Black",
                                            "Black",
                                            "Special Order",
                                        ]}
                                        onChange={setSelectedColor}
                                    />

                                    <ProductDropdown
                                        label="Package"
                                        value={selectedPack}
                                        options={[
                                            "1 Piece",
                                            "5 Pieces",
                                            "10 Pieces",
                                            "Bulk Quantity",
                                        ]}
                                        onChange={setSelectedPack}
                                    />

                                </div>

                                {/* =================================================
                    QUANTITY
                ================================================= */}

                                <div className="mt-7">

                                    <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/70">
                                        Quantity
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-5">

                                        <div className="flex items-center rounded-full border border-white/20 bg-white/[0.08] p-1">

                                            <button
                                                type="button"
                                                onClick={decreaseQuantity}
                                                className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>

                                            <span className="min-w-[56px] text-center text-[14px] font-bold text-white">
                                                {quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={increaseQuantity}
                                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8FF65] text-black transition hover:bg-white"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>

                                        </div>

                                        <p className="text-[13px] font-medium text-white/70">
                                            {quantity} Piece{quantity > 1 ? "s" : ""}
                                        </p>

                                    </div>

                                </div>

                                {/* =================================================
                    BUTTONS
                ================================================= */}

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                    <button
                                        type="button"
                                        onClick={() => setQuoteOpen(true)}
                                        className="group flex h-14 flex-1 items-center justify-between rounded-full bg-[#D8FF65] pl-7 pr-2 text-[14px] font-semibold text-black transition hover:bg-white"
                                    >

                                        Get a Quote

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101411] text-white transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>

                                    </button>

                                    <button
                                        type="button"
                                        onClick={addToCart}
                                        className={`
                      flex
                      h-14
                      flex-1
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      text-[14px]
                      font-semibold
                      transition-all
                      duration-300

                      ${addedToCart
                                                ? "border-[#D8FF65] bg-[#D8FF65] text-black"
                                                : "border-white/25 bg-white/[0.03] text-white hover:bg-white hover:text-black"
                                            }
                    `}
                                    >

                                        {addedToCart ? (
                                            <>
                                                <Check className="h-4 w-4" />
                                                Added to Cart
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingBag className="h-4 w-4" />
                                                Add to Cart
                                            </>
                                        )}

                                    </button>

                                </div>

                                {/* =================================================
                    BENEFITS
                ================================================= */}

                                <div className="mt-8 grid gap-3 sm:grid-cols-3">

                                    <BenefitCard
                                        icon={Truck}
                                        title="UAE Delivery"
                                    />

                                    <BenefitCard
                                        icon={ShieldCheck}
                                        title="Trusted Brand"
                                    />

                                    <BenefitCard
                                        icon={RotateCcw}
                                        title="Sales Support"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            PRODUCT OVERVIEW
        ===================================================== */}

                <section className="px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">

                    <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1fr_.82fr] lg:gap-20">

                        {/* =================================================
                DESCRIPTION
            ================================================= */}

                        <div>

                            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#4E554F]">
                                Product Overview
                            </p>

                            <h2 className="mt-4 text-[39px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#101411] md:text-[52px]">

                                Performance built
                                <br />

                                <span className="text-[#626A63]">
                                    for demanding work.
                                </span>

                            </h2>

                            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#505750]">

                                The cordless hammer drill combines
                                performance, portability and precise
                                control for construction professionals.
                                Its brushless motor delivers efficient
                                operation while improving durability,
                                battery runtime and overall tool life.

                            </p>

                            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#505750]">

                                Suitable for drilling into concrete,
                                masonry, timber and steel, making it
                                ideal for contractors, maintenance
                                teams, fit-out companies and industrial
                                applications.

                            </p>

                            {/* Features */}

                            <div className="mt-10">

                                <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-[#101411]">
                                    Key features
                                </h3>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                    {[
                                        "Heavy-duty brushless motor",
                                        "Hammer drilling function",
                                        "Variable speed control",
                                        "Professional 13 mm chuck",
                                        "Ergonomic rubber grip",
                                        "Built-in LED work light",
                                        "High-performance battery system",
                                        "Construction-grade durability",
                                    ].map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-center gap-3 rounded-[18px] border border-black/[0.08] bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.025)]"
                                        >

                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D8FF65]">
                                                <Check className="h-3.5 w-3.5 text-black" />
                                            </span>

                                            <span className="text-[14px] font-medium leading-6 text-[#383E39]">
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                SPECIFICATIONS
            ================================================= */}

                        <div className="self-start rounded-[32px] bg-[#101411] p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-10">

                            <div className="flex items-start justify-between gap-5">

                                <div>

                                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8FF65]">
                                        Technical Details
                                    </p>

                                    <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.035em] text-white">
                                        Specifications
                                    </h3>

                                </div>

                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.09]">

                                    <Package className="h-5 w-5 text-[#D8FF65]" />

                                </span>

                            </div>

                            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">

                                <Specification
                                    label="Brand"
                                    value="DeWalt"
                                />

                                <Specification
                                    label="Category"
                                    value="Power Tools"
                                />

                                <Specification
                                    label="SKU"
                                    value="TR-PT-001"
                                />

                                <Specification
                                    label="Product Type"
                                    value="Cordless Hammer Drill"
                                />

                                <Specification
                                    label="Voltage"
                                    value="20V"
                                />

                                <Specification
                                    label="Motor"
                                    value="Brushless"
                                />

                                <Specification
                                    label="Chuck Size"
                                    value="13 mm"
                                />

                                <Specification
                                    label="Speed"
                                    value="0 – 2000 RPM"
                                />

                                <Specification
                                    label="Application"
                                    value="Concrete / Steel / Wood"
                                />

                                <Specification
                                    label="Color"
                                    value={selectedColor}
                                />

                                <Specification
                                    label="Package"
                                    value={selectedPack}
                                />

                                <Specification
                                    label="Stock"
                                    value="28 Available"
                                />

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            SERVICE INFORMATION
        ===================================================== */}

                <section className="border-y border-black/[0.08] bg-white">

                    <div className="mx-auto grid max-w-[1450px] md:grid-cols-3">

                        <ServiceCard
                            number="01"
                            icon={Truck}
                            title="Project Delivery"
                            description="Delivery options are available throughout the UAE based on product type, quantity and project location."
                        />

                        <ServiceCard
                            number="02"
                            icon={ShieldCheck}
                            title="Trusted Products"
                            description="Professional products sourced from established manufacturers and trusted building material suppliers."
                        />

                        <ServiceCard
                            number="03"
                            icon={Package}
                            title="Bulk Procurement"
                            description="Contact our sales team for project quantities, alternative brands and consolidated quotation support."
                        />

                    </div>

                </section>

                {/* =====================================================
            RELATED PRODUCTS
        ===================================================== */}

                <section className="px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">

                    <div className="mx-auto max-w-[1450px]">

                        {/* Header */}

                        <div className="flex items-end justify-between gap-6">

                            <div>

                                <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#4E554F]">
                                    Related Products
                                </p>

                                <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.045em] text-[#101411] md:text-[48px]">
                                    You may also need
                                </h2>

                            </div>

                            <Link
                                href="/products"
                                className="hidden items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-[12px] font-semibold text-[#222722] transition hover:bg-[#101411] hover:text-white sm:flex"
                            >

                                View All

                                <ArrowRight className="h-4 w-4" />

                            </Link>

                        </div>

                        {/* Product Cards */}

                        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {relatedProducts.map((product) => (

                                <Link
                                    href="/product-details"
                                    key={product.id}
                                    className="group overflow-hidden rounded-[27px] border border-black/[0.08] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,.09)]"
                                >

                                    {/* Full Image */}

                                    <div className="relative h-[260px] overflow-hidden bg-[#E9ECE5]">

                                        <ProductImage
                                            src={product.image}
                                            alt={product.name}
                                            cover
                                        />

                                    </div>

                                    {/* Information */}

                                    <div className="p-5">

                                        <div className="flex items-center justify-between gap-3">

                                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#4E554F]">
                                                {product.brand}
                                            </p>

                                            <p className="text-[11px] font-medium text-[#6A716B]">
                                                {product.category}
                                            </p>

                                        </div>

                                        <h3 className="mt-3 min-h-[54px] text-[20px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#111512]">
                                            {product.name}
                                        </h3>

                                        <div className="mt-5 flex items-end justify-between border-t border-black/[0.08] pt-4">

                                            <div>

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[#69706A]">
                                                    Starting Price
                                                </p>

                                                <p className="mt-1 text-[20px] font-bold text-[#101411]">
                                                    AED {product.price}
                                                </p>

                                            </div>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101411] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#D8FF65] group-hover:text-black">

                                                <ArrowUpRight className="h-4 w-4" />

                                            </span>

                                        </div>

                                    </div>

                                </Link>

                            ))}

                        </div>

                    </div>

                </section>

                {/* =====================================================
            QUOTE CTA
        ===================================================== */}

                <section className="px-5 pb-16 md:px-10 lg:px-14">

                    <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[36px] bg-[#101411] p-8 text-white md:p-12 lg:p-16">

                        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#D8FF65]/10 blur-[130px]" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                            <div>

                                <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#D8FF65]">
                                    Bulk Requirement
                                </p>

                                <h2 className="mt-5 max-w-[800px] text-[40px] font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-[56px]">

                                    Need a larger quantity?
                                    <br />

                                    Get a project quote.

                                </h2>

                                <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/70">

                                    Share the required quantity,
                                    preferred brand, target price,
                                    delivery location and project
                                    specifications with our sales team.

                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={() => setQuoteOpen(true)}
                                className="group flex items-center gap-8 rounded-full bg-[#D8FF65] py-2 pl-7 pr-2 text-[14px] font-semibold text-black transition hover:bg-white"
                            >

                                Get a Quote

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101411] text-white transition-transform duration-300 group-hover:rotate-45">

                                    <ArrowUpRight className="h-4 w-4" />

                                </span>

                            </button>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            BACK TO PRODUCTS
        ===================================================== */}

                <section className="px-5 pb-20 md:px-10 lg:px-14">

                    <div className="mx-auto max-w-[1450px]">

                        <Link
                            href="/products"
                            className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-4 text-[12px] font-semibold text-[#252A26] transition hover:bg-[#101411] hover:text-white"
                        >

                            <ArrowLeft className="h-4 w-4" />

                            Back to Products

                        </Link>

                    </div>

                </section>

            </main>

            {/* =====================================================
          QUOTE MODAL
      ===================================================== */}

            {quoteOpen && (

                <QuoteModal
                    quantity={quantity}
                    color={selectedColor}
                    packageValue={selectedPack}
                    onClose={() =>
                        setQuoteOpen(false)
                    }
                />

            )}

        </>
    );
}

/* =========================================================
   PRODUCT IMAGE
========================================================= */

function ProductImage({
    src,
    alt,
    large = false,
    cover = false,
}) {
    return (
        <img
            src={src}
            alt={alt}
            onError={(e) => {
                e.currentTarget.onerror = null;

                e.currentTarget.src =
                    "https://placehold.co/900x700/EEF0E8/101411?text=Top+Range+Product";
            }}
            className={`
        h-full
        w-full
        transition-transform
        duration-700
        ease-out

        ${cover
                    ? "object-cover group-hover:scale-105"
                    : large
                        ? "object-cover"
                        : "object-cover"
                }
      `}
        />
    );
}

/* =========================================================
   PRODUCT DROPDOWN
========================================================= */

function ProductDropdown({
    label,
    value,
    options,
    onChange,
}) {
    const [open, setOpen] =
        useState(false);

    return (
        <div className="relative">

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                {label}
            </p>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
          flex
          h-[56px]
          w-full
          items-center
          justify-between
          gap-4
          rounded-[15px]
          border
          border-white/20
          bg-white/[0.09]
          px-4
          text-left
          text-[14px]
          font-semibold
          text-white
          transition
          hover:bg-white/[0.13]
        "
            >

                <span>
                    {value}
                </span>

                <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/80 transition-transform duration-300 ${open
                            ? "rotate-180"
                            : ""
                        }`}
                />

            </button>

            {open && (

                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[70] overflow-hidden rounded-[18px] border border-white/15 bg-[#181D19] p-2 shadow-[0_25px_70px_rgba(0,0,0,.4)]">

                    {options.map((option) => (

                        <button
                            type="button"
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className={`
                flex
                w-full
                items-center
                justify-between
                rounded-[12px]
                px-4
                py-3.5
                text-left
                text-[13px]
                font-semibold
                transition

                ${option === value
                                    ? "bg-[#D8FF65] text-black"
                                    : "text-white/85 hover:bg-white/10 hover:text-white"
                                }
              `}
                        >

                            {option}

                            {option === value && (
                                <Check className="h-3.5 w-3.5" />
                            )}

                        </button>

                    ))}

                </div>

            )}

        </div>
    );
}

/* =========================================================
   BENEFIT CARD
========================================================= */

function BenefitCard({
    icon: Icon,
    title,
}) {
    return (
        <div className="flex items-center gap-3 rounded-[16px] border border-white/15 bg-white/[0.07] p-3.5">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.1]">

                <Icon className="h-4 w-4 text-[#D8FF65]" />

            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-white/80">
                {title}
            </span>

        </div>
    );
}

/* =========================================================
   SPECIFICATION
========================================================= */

function Specification({
    label,
    value,
}) {
    return (
        <div className="flex items-center justify-between gap-5 py-4">

            <span className="text-[13px] font-medium text-white/65">
                {label}
            </span>

            <span className="max-w-[58%] text-right text-[14px] font-semibold leading-5 text-white">
                {value}
            </span>

        </div>
    );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
    number,
    icon: Icon,
    title,
    description,
}) {
    return (
        <div className="border-b border-black/[0.08] p-7 md:border-b-0 md:border-r md:p-10 last:border-r-0">

            <div className="flex items-start justify-between">

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8FF65]">

                    <Icon className="h-5 w-5 text-black" />

                </span>

                <span className="text-[11px] font-bold tracking-[0.14em] text-[#707770]">
                    {number}
                </span>

            </div>

            <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.03em] text-[#101411]">
                {title}
            </h3>

            <p className="mt-3 text-[14px] leading-7 text-[#535A54]">
                {description}
            </p>

        </div>
    );
}

/* =========================================================
   QUOTE MODAL
========================================================= */

function QuoteModal({
    quantity,
    color,
    packageValue,
    onClose,
}) {
    const [form, setForm] =
        useState({
            company: "",
            contactName: "",
            email: "",
            phone: "",
            projectName: "",
            quantity:
                String(quantity),
            brand: "DeWalt",
            category:
                "Power Tools",
            color,
            packageValue,
            targetPrice: "",
            deliveryLocation: "",
            requiredDate: "",
            paymentTerms: "",
            description: "",
        });

    const update = (e) => {
        const {
            name,
            value,
        } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        const subject =
            encodeURIComponent(
                "Quotation Request - Cordless Hammer Drill"
            );

        const body =
            encodeURIComponent(`
TOP RANGE BUILDING MATERIALS
PRODUCT QUOTATION REQUEST

PRODUCT DETAILS

Product: Cordless Hammer Drill
SKU: TR-PT-001
Brand: DeWalt
Category: Power Tools
Listed Price: AED 699


CUSTOMER DETAILS

Company Name:
${form.company}

Contact Person:
${form.contactName}

Email:
${form.email}

Phone:
${form.phone}


PROJECT DETAILS

Project Name:
${form.projectName}

Quantity:
${form.quantity}

Preferred Brand:
${form.brand}

Category:
${form.category}

Color / Finish:
${form.color}

Package:
${form.packageValue}

Target Price:
AED ${form.targetPrice || "Not specified"}

Delivery Location:
${form.deliveryLocation}

Required Date:
${form.requiredDate || "Not specified"}

Payment Terms:
${form.paymentTerms || "Not specified"}


REQUIREMENT / DESCRIPTION

${form.description || "No additional requirements provided."}
`);

        window.location.href =
            `mailto:info@toprange.ae?subject=${subject}&body=${body}`;
    };

    return (
        <div className="fixed inset-0 z-[250] overflow-y-auto bg-[#07100D]/85 p-3 backdrop-blur-xl sm:p-5 md:p-8">

            <div className="mx-auto flex min-h-full max-w-[1100px] items-center">

                <div className="w-full overflow-hidden rounded-[34px] bg-[#F4F5EF] shadow-[0_40px_120px_rgba(0,0,0,.35)] lg:grid lg:grid-cols-[.60fr_1.40fr]">

                    {/* =================================================
              LEFT SIDE
          ================================================= */}

                    <div className="relative overflow-hidden bg-[#101411] p-7 text-white sm:p-9 lg:p-10">

                        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#D8FF65]/10 blur-[120px]" />

                        <div className="relative">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8FF65]">
                                        Product Enquiry
                                    </p>

                                    <h3 className="mt-2 text-[27px] font-semibold text-white">
                                        Get a Quote
                                    </h3>

                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-black"
                                >

                                    <X className="h-4 w-4" />

                                </button>

                            </div>

                            {/* Product Summary */}

                            <div className="mt-9 overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.07]">

                                <div className="h-[220px] overflow-hidden bg-[#E9ECE5]">

                                    <ProductImage
                                        src="/Assets/products/cordless-hammer-drill.jpg"
                                        alt="Cordless Hammer Drill"
                                        cover
                                    />

                                </div>

                                <div className="p-5">

                                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                                        DeWalt · TR-PT-001
                                    </p>

                                    <h4 className="mt-2 text-[21px] font-semibold text-white">
                                        Cordless Hammer Drill
                                    </h4>

                                    <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">

                                        <span className="text-[12px] font-medium text-white/70">
                                            Unit Price
                                        </span>

                                        <span className="text-[17px] font-bold text-[#D8FF65]">
                                            AED 699
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <p className="mt-7 text-[14px] leading-7 text-white/70">

                                Submit your project details,
                                required quantity and delivery
                                information. Final pricing and
                                stock will be confirmed by our
                                sales team.

                            </p>

                            {/* Small Benefits */}

                            <div className="mt-8 space-y-3">

                                <QuoteBenefit
                                    icon={Package}
                                    title="Bulk Quantities"
                                    description="Request custom project quantities."
                                />

                                <QuoteBenefit
                                    icon={Truck}
                                    title="UAE Delivery"
                                    description="Add your required delivery location."
                                />

                                <QuoteBenefit
                                    icon={ShieldCheck}
                                    title="Brand Alternatives"
                                    description="Alternative brands can be discussed."
                                />

                            </div>

                        </div>

                    </div>

                    {/* =================================================
              FORM SIDE
          ================================================= */}

                    <div className="p-6 sm:p-8 lg:p-10">

                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#505750]">
                            Quotation Request
                        </p>

                        <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.045em] text-[#101411] md:text-[40px]">
                            Project details
                        </h2>

                        <p className="mt-3 text-[14px] leading-6 text-[#535A54]">
                            Complete the information below and
                            submit your product requirement.
                        </p>

                        <form
                            onSubmit={submit}
                            className="mt-8"
                        >

                            <div className="grid gap-5 md:grid-cols-2">

                                <FormInput
                                    label="Company Name"
                                    name="company"
                                    value={form.company}
                                    onChange={update}
                                    placeholder="Company name"
                                    required
                                />

                                <FormInput
                                    label="Contact Person"
                                    name="contactName"
                                    value={form.contactName}
                                    onChange={update}
                                    placeholder="Full name"
                                    required
                                />

                                <FormInput
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={update}
                                    placeholder="name@company.com"
                                    required
                                />

                                <FormInput
                                    label="Phone Number"
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={update}
                                    placeholder="+971"
                                    required
                                />

                                <FormInput
                                    label="Project Name"
                                    name="projectName"
                                    value={form.projectName}
                                    onChange={update}
                                    placeholder="Project / site"
                                />

                                <FormInput
                                    label="Quantity / Count"
                                    type="number"
                                    name="quantity"
                                    value={form.quantity}
                                    onChange={update}
                                    placeholder="Quantity"
                                    required
                                />

                                <FormInput
                                    label="Preferred Brand"
                                    name="brand"
                                    value={form.brand}
                                    onChange={update}
                                />

                                <FormInput
                                    label="Category"
                                    name="category"
                                    value={form.category}
                                    onChange={update}
                                />

                                <FormInput
                                    label="Color / Finish"
                                    name="color"
                                    value={form.color}
                                    onChange={update}
                                />

                                <FormInput
                                    label="Package"
                                    name="packageValue"
                                    value={form.packageValue}
                                    onChange={update}
                                />

                                <FormInput
                                    label="Target Price AED"
                                    type="number"
                                    name="targetPrice"
                                    value={form.targetPrice}
                                    onChange={update}
                                    placeholder="Expected price"
                                />

                                <FormInput
                                    label="Required Date"
                                    type="date"
                                    name="requiredDate"
                                    value={form.requiredDate}
                                    onChange={update}
                                />

                                <div className="md:col-span-2">

                                    <FormInput
                                        label="Delivery Location"
                                        name="deliveryLocation"
                                        value={form.deliveryLocation}
                                        onChange={update}
                                        placeholder="Dubai, Ajman, Sharjah..."
                                        required
                                    />

                                </div>

                                {/* Payment Terms */}

                                <div className="md:col-span-2">

                                    <label className="mb-2 block text-[12px] font-semibold text-[#424943]">
                                        Payment Terms
                                    </label>

                                    <select
                                        name="paymentTerms"
                                        value={form.paymentTerms}
                                        onChange={update}
                                        className="h-[54px] w-full rounded-[15px] border border-black/10 bg-white px-4 text-[14px] font-medium text-[#252A26] outline-none transition focus:border-black/20 focus:ring-4 focus:ring-[#D8FF65]/25"
                                    >

                                        <option value="">
                                            Select payment preference
                                        </option>

                                        <option>
                                            Cash
                                        </option>

                                        <option>
                                            Bank Transfer
                                        </option>

                                        <option>
                                            Credit Terms Required
                                        </option>

                                        <option>
                                            To Be Discussed
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* Description */}

                            <div className="mt-5">

                                <label className="mb-2 block text-[12px] font-semibold text-[#424943]">
                                    Requirement / Description
                                </label>

                                <textarea
                                    rows={5}
                                    name="description"
                                    value={form.description}
                                    onChange={update}
                                    placeholder="Mention specifications, model, accessories, alternative brands, delivery instructions or any other project requirements..."
                                    className="w-full resize-none rounded-[16px] border border-black/10 bg-white p-4 text-[14px] leading-6 text-[#252A26] outline-none placeholder:text-black/40 focus:border-black/20 focus:ring-4 focus:ring-[#D8FF65]/25"
                                />

                            </div>

                            {/* Submit */}

                            <div className="mt-7 flex flex-col gap-5 border-t border-black/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">

                                <p className="max-w-sm text-[12px] leading-5 text-[#555C56]">
                                    Final price, stock availability and
                                    delivery terms will be confirmed
                                    after reviewing your enquiry.
                                </p>

                                <button
                                    type="submit"
                                    className="group flex items-center justify-between gap-8 rounded-full bg-[#101411] py-2 pl-7 pr-2 text-[14px] font-semibold text-white"
                                >

                                    Submit Quote

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8FF65] text-black transition-transform duration-300 group-hover:rotate-45">

                                        <ArrowUpRight className="h-4 w-4" />

                                    </span>

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

/* =========================================================
   QUOTE BENEFIT
========================================================= */

function QuoteBenefit({
    icon: Icon,
    title,
    description,
}) {
    return (
        <div className="flex items-center gap-4 rounded-[17px] border border-white/15 bg-white/[0.06] p-4">

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D8FF65] text-black">

                <Icon className="h-4 w-4" />

            </span>

            <div>

                <p className="text-[13px] font-semibold text-white">
                    {title}
                </p>

                <p className="mt-1 text-[11px] leading-5 text-white/65">
                    {description}
                </p>

            </div>

        </div>
    );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
    label,
    name,
    value,
    onChange,
    placeholder = "",
    type = "text",
    required = false,
}) {
    return (
        <div>

            <label className="mb-2 block text-[12px] font-semibold text-[#424943]">

                {label}

                {required && (
                    <span className="ml-1 text-red-500">
                        *
                    </span>
                )}

            </label>

            <input
                required={required}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
          h-[54px]
          w-full
          rounded-[15px]
          border
          border-black/10
          bg-white
          px-4
          text-[14px]
          font-medium
          text-[#252A26]
          outline-none
          transition
          placeholder:text-black/40
          focus:border-black/20
          focus:ring-4
          focus:ring-[#D8FF65]/25
        "
            />

        </div>
    );
}