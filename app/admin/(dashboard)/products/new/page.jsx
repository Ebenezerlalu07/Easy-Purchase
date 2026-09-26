"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
    ArrowLeft,
    ArrowRight,
    Boxes,
    Check,
    ChevronDown,
    CircleDollarSign,
    ImagePlus,
    Package,
    PackagePlus,
    RotateCcw,
    Save,
    Sparkles,
    Tag,
    Trash2,
    Upload,
    X,
} from "lucide-react";

/* =========================================================
   OPTIONS
========================================================= */

const categories = [
    "Power Tools",
    "Hand Tools",
    "Electrical",
    "Plumbing",
    "Hardware",
    "Fasteners",
    "Safety",
    "Paint & Adhesives",
    "Construction Materials",
    "HVAC",
];

const brands = [
    "DeWalt",
    "Bosch",
    "Stanley",
    "3M",
    "Sika",
    "Fischer",
    "Hepworth",
    "Mueller",
    "Dormakaba",
    "Fluke",
];

const productStatuses = [
    "Active",
    "Draft",
    "Inactive",
];

/* =========================================================
   DEFAULT FORM
========================================================= */

const defaultForm = {
    name: "",
    sku: "",
    category: "",
    brand: "",
    price: "",
    oldPrice: "",
    stock: "",
    status: "Active",
    shortDescription: "",
    description: "",
    featured: false,
};

/* =========================================================
   PAGE
========================================================= */

export default function AddProductPage() {
    const router = useRouter();
    const fileInputRef = useRef(null);

    const [form, setForm] = useState(defaultForm);
    const [imagePreview, setImagePreview] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);

    const [error, setError] = useState("");
    const [saved, setSaved] = useState(false);

    /* =========================================================
       UPDATE FORM
    ========================================================= */

    const updateForm = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
        setSaved(false);
    };

    /* =========================================================
       IMAGE
    ========================================================= */

    const handleImage = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Please choose a valid image file.");
            return;
        }

        setImageFile(file);

        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);

        setError("");
    };

    const removeImage = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        setImagePreview("");
        setImageFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    /* =========================================================
       STOCK STATUS
    ========================================================= */

    const stockLabel = useMemo(() => {
        const stock = Number(form.stock || 0);

        if (!form.stock) {
            return "Not set";
        }

        if (stock <= 0) {
            return "Out of Stock";
        }

        if (stock <= 15) {
            return "Low Stock";
        }

        return "In Stock";
    }, [form.stock]);

    const stockStyle = useMemo(() => {
        const stock = Number(form.stock || 0);

        if (!form.stock) {
            return "bg-[#ECEEEC] text-[#626862]";
        }

        if (stock <= 0) {
            return "bg-[#FCE8E8] text-[#A83E3E]";
        }

        if (stock <= 15) {
            return "bg-[#FFF1DA] text-[#95610C]";
        }

        return "bg-[#E7F5E9] text-[#31733A]";
    }, [form.stock]);

    /* =========================================================
       RESET
    ========================================================= */

    const resetForm = () => {
        setForm(defaultForm);
        removeImage();
        setError("");
        setSaved(false);
    };

    /* =========================================================
       SUBMIT
    ========================================================= */

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.name.trim()) {
            setError("Please enter the product name.");
            return;
        }

        if (!form.sku.trim()) {
            setError("Please enter the product SKU.");
            return;
        }

        if (!form.category) {
            setError("Please select a category.");
            return;
        }

        if (!form.brand) {
            setError("Please select a brand.");
            return;
        }

        if (!form.price) {
            setError("Please enter the product price.");
            return;
        }

        /*
          Backend/API integration can be added here later.
    
          const productData = {
            ...form,
            image: imageFile,
          };
        */

        setError("");
        setSaved(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full">
            {/* =====================================================
          PAGE HEADER
      ====================================================== */}

            <div className="flex flex-col gap-6 border-b border-black/[0.08] pb-7 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <button
                        type="button"
                        onClick={() => router.push("/admin/products")}
                        className="group mb-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#656C65] transition hover:text-[#151814]"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white transition group-hover:bg-[#151814] group-hover:text-white">
                            <ArrowLeft className="h-3.5 w-3.5" />
                        </span>

                        Back to Products
                    </button>

                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#94BE26]" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D746D]">
                            Product Management
                        </p>
                    </div>

                    <h1 className="mt-3 text-[36px] font-semibold leading-none tracking-[-0.045em] text-[#151814] sm:text-[42px] lg:text-[48px]">
                        Add Product
                    </h1>

                    <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#686F68]">
                        Add a new product to your catalogue with pricing, stock,
                        brand, category and product information.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-black/[0.09] bg-white px-5 text-[11px] font-bold text-[#414741] transition hover:bg-[#F0F1EC]"
                    >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Reset
                    </button>

                    <button
                        type="submit"
                        form="add-product-form"
                        className="group inline-flex h-11 items-center gap-4 rounded-full bg-[#151814] pl-5 pr-1.5 text-[11px] font-bold text-white transition hover:bg-[#292F2A]"
                    >
                        Save Product

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D8FF65] text-[#151814]">
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </button>
                </div>
            </div>

            {/* =====================================================
          ALERTS
      ====================================================== */}

            {error && (
                <div className="mt-6 flex items-center justify-between gap-4 rounded-[16px] border border-red-100 bg-red-50 px-5 py-4">
                    <p className="text-[12px] font-semibold text-red-600">
                        {error}
                    </p>

                    <button
                        type="button"
                        onClick={() => setError("")}
                        className="text-red-500"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            {saved && (
                <div className="mt-6 flex items-center gap-3 rounded-[16px] border border-green-100 bg-green-50 px-5 py-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <Check className="h-4 w-4" />
                    </span>

                    <div>
                        <p className="text-[12px] font-bold text-green-700">
                            Product saved successfully
                        </p>

                        <p className="mt-0.5 text-[10px] font-medium text-green-600">
                            UI demo completed. Connect your backend/API to store the product.
                        </p>
                    </div>
                </div>
            )}

            {/* =====================================================
          FORM
      ====================================================== */}

            <form
                id="add-product-form"
                onSubmit={handleSubmit}
                className="mt-7"
            >
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start">
                    {/* =================================================
              LEFT
          ================================================== */}

                    <div className="space-y-6">
                        {/* PRODUCT INFORMATION */}

                        <FormSection
                            title="Product Information"
                            description="Basic information used throughout the product catalogue."
                            icon={Package}
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="md:col-span-2">
                                    <FormField
                                        label="Product Name"
                                        required
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={updateForm}
                                            placeholder="Example: Cordless Hammer Drill"
                                            className={inputClass}
                                        />
                                    </FormField>
                                </div>

                                <FormField
                                    label="SKU"
                                    required
                                >
                                    <input
                                        type="text"
                                        name="sku"
                                        value={form.sku}
                                        onChange={updateForm}
                                        placeholder="TR-PT-001"
                                        className={inputClass}
                                    />
                                </FormField>

                                <FormField label="Product Status">
                                    <AdminDropdown
                                        value={form.status}
                                        options={productStatuses}
                                        open={statusOpen}
                                        setOpen={setStatusOpen}
                                        onChange={(value) =>
                                            setForm((prev) => ({
                                                ...prev,
                                                status: value,
                                            }))
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Category"
                                    required
                                >
                                    <AdminDropdown
                                        placeholder="Select category"
                                        value={form.category}
                                        options={categories}
                                        open={categoryOpen}
                                        setOpen={setCategoryOpen}
                                        onChange={(value) =>
                                            setForm((prev) => ({
                                                ...prev,
                                                category: value,
                                            }))
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Brand"
                                    required
                                >
                                    <AdminDropdown
                                        placeholder="Select brand"
                                        value={form.brand}
                                        options={brands}
                                        open={brandOpen}
                                        setOpen={setBrandOpen}
                                        onChange={(value) =>
                                            setForm((prev) => ({
                                                ...prev,
                                                brand: value,
                                            }))
                                        }
                                    />
                                </FormField>
                            </div>
                        </FormSection>

                        {/* PRICING */}

                        <FormSection
                            title="Pricing & Stock"
                            description="Configure selling price and product availability."
                            icon={CircleDollarSign}
                        >
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <FormField
                                    label="Selling Price"
                                    required
                                >
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#697069]">
                                            AED
                                        </span>

                                        <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            name="price"
                                            value={form.price}
                                            onChange={updateForm}
                                            placeholder="0.00"
                                            className={`${inputClass} pl-14`}
                                        />
                                    </div>
                                </FormField>

                                <FormField label="Previous Price">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#697069]">
                                            AED
                                        </span>

                                        <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            name="oldPrice"
                                            value={form.oldPrice}
                                            onChange={updateForm}
                                            placeholder="0.00"
                                            className={`${inputClass} pl-14`}
                                        />
                                    </div>
                                </FormField>

                                <FormField label="Stock Quantity">
                                    <input
                                        type="number"
                                        min="0"
                                        name="stock"
                                        value={form.stock}
                                        onChange={updateForm}
                                        placeholder="0"
                                        className={inputClass}
                                    />
                                </FormField>
                            </div>

                            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-black/[0.06] pt-5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#777E77]">
                                    Availability
                                </span>

                                <span
                                    className={`rounded-full px-3 py-1.5 text-[9px] font-bold ${stockStyle}`}
                                >
                                    {stockLabel}
                                </span>
                            </div>
                        </FormSection>

                        {/* DESCRIPTION */}

                        <FormSection
                            title="Product Description"
                            description="Add customer-facing information about the product."
                            icon={Tag}
                        >
                            <FormField label="Short Description">
                                <textarea
                                    rows={3}
                                    name="shortDescription"
                                    value={form.shortDescription}
                                    onChange={updateForm}
                                    placeholder="Short overview shown on product cards..."
                                    className={textareaClass}
                                />
                            </FormField>

                            <div className="mt-5">
                                <FormField label="Full Description">
                                    <textarea
                                        rows={7}
                                        name="description"
                                        value={form.description}
                                        onChange={updateForm}
                                        placeholder="Enter detailed product description, applications, specifications and other important information..."
                                        className={textareaClass}
                                    />
                                </FormField>
                            </div>
                        </FormSection>
                    </div>

                    {/* =================================================
              RIGHT
          ================================================== */}

                    <aside className="space-y-6 xl:sticky xl:top-24">
                        {/* IMAGE */}

                        <div className="overflow-hidden rounded-[22px] border border-[#DADCD5] bg-white shadow-[0_10px_35px_rgba(20,24,20,.04)]">
                            <div className="border-b border-black/[0.07] p-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#EEF1E7]">
                                        <ImagePlus className="h-4 w-4" />
                                    </span>

                                    <div>
                                        <h3 className="text-[12px] font-bold text-[#202420]">
                                            Product Image
                                        </h3>

                                        <p className="mt-0.5 text-[10px] font-medium text-[#777E77]">
                                            Upload product catalogue image
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                {imagePreview ? (
                                    <div className="relative overflow-hidden rounded-[18px] bg-[#EEF1E9]">
                                        <img
                                            src={imagePreview}
                                            alt="Product preview"
                                            className="aspect-[4/3] w-full object-cover"
                                        />

                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#151814]/90 text-white shadow-xl backdrop-blur transition hover:bg-red-500"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>

                                        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold text-[#202420] backdrop-blur">
                                            {imageFile?.name}
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="
                      group
                      flex
                      aspect-[4/3]
                      w-full
                      flex-col
                      items-center
                      justify-center
                      rounded-[18px]
                      border
                      border-dashed
                      border-black/15
                      bg-[#F5F5F0]
                      p-6
                      text-center
                      transition
                      hover:border-[#94BE26]
                      hover:bg-[#F8F9F3]
                    "
                                    >
                                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#4F574F] shadow-sm transition group-hover:bg-[#D8FF65] group-hover:text-[#151814]">
                                            <Upload className="h-5 w-5" />
                                        </span>

                                        <p className="mt-4 text-[12px] font-bold text-[#303630]">
                                            Upload product image
                                        </p>

                                        <p className="mt-1.5 text-[10px] leading-5 text-[#7A817A]">
                                            PNG, JPG or WebP
                                            <br />
                                            Recommended 1200 × 900px
                                        </p>
                                    </button>
                                )}

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/png,image/jpeg,image/webp"
                                    onChange={handleImage}
                                    className="hidden"
                                />

                                {imagePreview && (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-black/[0.08] text-[10px] font-bold text-[#444A44] transition hover:bg-[#F0F1EC]"
                                    >
                                        <Upload className="h-3.5 w-3.5" />
                                        Change Image
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* FEATURED */}

                        <div className="rounded-[22px] border border-[#DADCD5] bg-white p-5 shadow-[0_10px_35px_rgba(20,24,20,.04)]">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#F0F2E8]">
                                        <Sparkles className="h-4 w-4 text-[#56653B]" />
                                    </span>

                                    <div>
                                        <p className="text-[12px] font-bold text-[#202420]">
                                            Featured Product
                                        </p>

                                        <p className="mt-1 text-[10px] leading-5 text-[#747A74]">
                                            Highlight this product in featured catalogue sections.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setForm((prev) => ({
                                            ...prev,
                                            featured: !prev.featured,
                                        }))
                                    }
                                    className={`
                    relative
                    h-7
                    w-12
                    shrink-0
                    rounded-full
                    transition-all
                    duration-300

                    ${form.featured
                                            ? "bg-[#151814]"
                                            : "bg-[#D9DDD6]"
                                        }
                  `}
                                >
                                    <span
                                        className={`
                      absolute
                      top-1
                      h-5
                      w-5
                      rounded-full
                      transition-all
                      duration-300

                      ${form.featured
                                                ? "left-6 bg-[#D8FF65]"
                                                : "left-1 bg-white"
                                            }
                    `}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* PREVIEW */}

                        <div className="rounded-[22px] bg-[#151814] p-5 text-white shadow-[0_18px_50px_rgba(20,24,20,.13)]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                                        Product Preview
                                    </p>

                                    <p className="mt-1 text-[11px] font-semibold text-white/70">
                                        Catalogue information
                                    </p>
                                </div>

                                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#D8FF65] text-[#151814]">
                                    <PackagePlus className="h-4 w-4" />
                                </span>
                            </div>

                            <div className="mt-6 border-t border-white/10 pt-5">
                                <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#D8FF65]">
                                    {form.brand || "Brand"}
                                </p>

                                <h3 className="mt-2 text-[20px] font-semibold leading-6">
                                    {form.name || "Product Name"}
                                </h3>

                                <div className="mt-5 flex items-end justify-between">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.12em] text-white/40">
                                            Price
                                        </p>

                                        <p className="mt-1 text-[21px] font-bold">
                                            <span className="mr-1 text-[10px] text-[#D8FF65]">
                                                AED
                                            </span>

                                            {form.price
                                                ? Number(form.price).toLocaleString()
                                                : "0.00"}
                                        </p>
                                    </div>

                                    <span
                                        className={`rounded-full px-3 py-1.5 text-[9px] font-bold ${stockStyle}`}
                                    >
                                        {stockLabel}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* SAVE MOBILE/DESKTOP */}

                        <button
                            type="submit"
                            className="
                group
                flex
                h-[58px]
                w-full
                items-center
                justify-between
                rounded-full
                bg-[#D8FF65]
                pl-6
                pr-2
                text-[12px]
                font-bold
                text-[#151814]
                transition
                hover:bg-[#151814]
                hover:text-white
              "
                        >
                            <span className="flex items-center gap-2">
                                <Save className="h-4 w-4" />
                                Save Product
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#151814] text-white transition group-hover:bg-white group-hover:text-[#151814]">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </button>
                    </aside>
                </div>
            </form>
        </div>
    );
}

/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
    title,
    description,
    icon: Icon,
    children,
}) {
    return (
        <section className="overflow-visible rounded-[22px] border border-[#DADCD5] bg-white shadow-[0_10px_35px_rgba(20,24,20,.04)]">
            <div className="flex items-start gap-3 border-b border-black/[0.07] p-5 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#EEF1E7]">
                    <Icon className="h-4 w-4 text-[#505850]" />
                </span>

                <div>
                    <h2 className="text-[13px] font-bold text-[#202420]">
                        {title}
                    </h2>

                    <p className="mt-1 text-[10px] leading-5 text-[#747A74]">
                        {description}
                    </p>
                </div>
            </div>

            <div className="p-5 sm:p-6">
                {children}
            </div>
        </section>
    );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
    label,
    required = false,
    children,
}) {
    return (
        <div className="min-w-0">
            <label className="mb-2.5 block text-[10px] font-bold text-[#626962]">
                {label}

                {required && (
                    <span className="ml-1 text-red-500">
                        *
                    </span>
                )}
            </label>

            {children}
        </div>
    );
}

/* =========================================================
   DROPDOWN
========================================================= */

function AdminDropdown({
    value,
    placeholder = "Select",
    options,
    open,
    setOpen,
    onChange,
}) {
    return (
        <div className={`relative min-w-0 ${open ? "z-[100]" : "z-10"}`}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`
          flex
          h-[54px]
          w-full
          min-w-0
          items-center
          justify-between
          gap-3
          rounded-[14px]
          border
          bg-[#F7F7F3]
          pl-4
          pr-2
          text-left
          transition-all

          ${open
                        ? "border-[#94BE26] bg-white ring-4 ring-[#D8FF65]/15"
                        : "border-black/[0.08] hover:border-black/15"
                    }
        `}
            >
                <span
                    className={`min-w-0 flex-1 truncate text-[12px] font-semibold ${value
                            ? "text-[#252A25]"
                            : "text-[#929792]"
                        }`}
                >
                    {value || placeholder}
                </span>

                <span
                    className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            transition

            ${open
                            ? "rotate-180 bg-[#D8FF65]"
                            : "bg-white"
                        }
          `}
                >
                    <ChevronDown className="h-4 w-4" />
                </span>
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[500] overflow-hidden rounded-[16px] border border-black/[0.08] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,.14)]">
                    <div className="max-h-[240px] space-y-1 overflow-y-auto">
                        {options.map((option) => {
                            const selected = value === option;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                        onChange(option);
                                        setOpen(false);
                                    }}
                                    className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-[11px]
                    px-3.5
                    py-3
                    text-left
                    text-[11px]
                    font-bold
                    transition

                    ${selected
                                            ? "bg-[#D8FF65] text-[#151814]"
                                            : "text-[#4E554E] hover:bg-[#F1F2ED]"
                                        }
                  `}
                                >
                                    {option}

                                    {selected && (
                                        <Check className="h-3.5 w-3.5" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

/* =========================================================
   COMMON STYLES
========================================================= */

const inputClass = `
  h-[54px]
  w-full
  min-w-0
  rounded-[14px]
  border
  border-black/[0.08]
  bg-[#F7F7F3]
  px-4
  text-[12px]
  font-semibold
  text-[#252A25]
  outline-none
  transition-all
  placeholder:font-medium
  placeholder:text-[#969B96]
  hover:border-black/15
  focus:border-[#94BE26]
  focus:bg-white
  focus:ring-4
  focus:ring-[#D8FF65]/15
`;

const textareaClass = `
  w-full
  min-w-0
  resize-y
  rounded-[14px]
  border
  border-black/[0.08]
  bg-[#F7F7F3]
  p-4
  text-[12px]
  font-medium
  leading-6
  text-[#252A25]
  outline-none
  transition-all
  placeholder:text-[#969B96]
  hover:border-black/15
  focus:border-[#94BE26]
  focus:bg-white
  focus:ring-4
  focus:ring-[#D8FF65]/15
`;