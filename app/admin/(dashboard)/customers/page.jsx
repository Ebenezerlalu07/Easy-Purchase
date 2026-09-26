"use client";

import { useMemo, useState } from "react";

import {
    ArrowUpRight,
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    ChevronRight,
    FileText,
    Mail,
    MapPin,
    Phone,
    Search,
    UserRound,
    Users,
    X,
} from "lucide-react";

/* =========================================================
   CUSTOMER DATA
========================================================= */

const customers = [
    {
        id: "CUS-1001",
        company: "Al Noor Contracting LLC",
        contactName: "Ahmed Kareem",
        email: "ahmed@alnoorcontracting.ae",
        phone: "+971 50 245 7821",
        location: "Dubai, UAE",
        joined: "12 Aug 2026",
        quotations: 8,
        quoteValue: "AED 34,850",
        status: "Active",
        lastEnquiry: "24 Sep 2026",
        category: "Construction",
        notes:
            "Regular contractor requesting power tools and general building materials for multiple projects.",
    },
    {
        id: "CUS-1002",
        company: "Blue Arc Technical Services",
        contactName: "Joseph Mathew",
        email: "joseph@bluearc.ae",
        phone: "+971 55 642 3190",
        location: "Sharjah, UAE",
        joined: "18 Aug 2026",
        quotations: 4,
        quoteValue: "AED 18,420",
        status: "Active",
        lastEnquiry: "23 Sep 2026",
        category: "Technical Services",
        notes:
            "Maintenance company primarily requesting electrical tools and testing equipment.",
    },
    {
        id: "CUS-1003",
        company: "Prime Build Interiors",
        contactName: "Nadia Ali",
        email: "nadia@primebuild.ae",
        phone: "+971 52 781 4632",
        location: "Abu Dhabi, UAE",
        joined: "03 Sep 2026",
        quotations: 6,
        quoteValue: "AED 42,900",
        status: "Active",
        lastEnquiry: "23 Sep 2026",
        category: "Interior Fit-out",
        notes:
            "Commercial interior contractor with regular bulk requirements.",
    },
    {
        id: "CUS-1004",
        company: "Gulf Horizon Maintenance",
        contactName: "Saeed Rahman",
        email: "saeed@gulfhorizon.ae",
        phone: "+971 50 331 9204",
        location: "Ajman, UAE",
        joined: "07 Sep 2026",
        quotations: 3,
        quoteValue: "AED 16,750",
        status: "Active",
        lastEnquiry: "22 Sep 2026",
        category: "Maintenance",
        notes:
            "Requires power tools, hand tools and maintenance products.",
    },
    {
        id: "CUS-1005",
        company: "Vertex Building Solutions",
        contactName: "Mohammed Ali",
        email: "mohammed@vertexbuild.ae",
        phone: "+971 56 410 8291",
        location: "Dubai, UAE",
        joined: "11 Sep 2026",
        quotations: 5,
        quoteValue: "AED 29,200",
        status: "Active",
        lastEnquiry: "21 Sep 2026",
        category: "Building Materials",
        notes:
            "Construction material supplier and project procurement customer.",
    },
    {
        id: "CUS-1006",
        company: "Royal Star Technical Works",
        contactName: "Faisal Khan",
        email: "faisal@royalstar.ae",
        phone: "+971 54 221 0673",
        location: "Dubai, UAE",
        joined: "15 Sep 2026",
        quotations: 2,
        quoteValue: "AED 11,480",
        status: "New",
        lastEnquiry: "20 Sep 2026",
        category: "Technical Works",
        notes:
            "New customer interested in DeWalt tools and equipment.",
    },
    {
        id: "CUS-1007",
        company: "Emirates Core Projects",
        contactName: "Arun Thomas",
        email: "arun@emiratescore.ae",
        phone: "+971 50 812 6641",
        location: "Abu Dhabi, UAE",
        joined: "09 Jul 2026",
        quotations: 7,
        quoteValue: "AED 51,300",
        status: "Inactive",
        lastEnquiry: "04 Sep 2026",
        category: "Contracting",
        notes:
            "Previous project customer. No recent quotation request.",
    },
];

const statusFilters = ["All", "Active", "New", "Inactive"];

/* =========================================================
   PAGE
========================================================= */

export default function CustomersPage() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    /* =========================================================
       FILTER
    ========================================================= */

    const filteredCustomers = useMemo(() => {
        const query = search.trim().toLowerCase();

        return customers.filter((customer) => {
            const matchesSearch =
                !query ||
                [
                    customer.id,
                    customer.company,
                    customer.contactName,
                    customer.email,
                    customer.phone,
                    customer.location,
                    customer.category,
                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(query);

            const matchesStatus =
                status === "All" || customer.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [search, status]);

    const activeCustomers = customers.filter(
        (customer) => customer.status === "Active"
    ).length;

    const totalQuotations = customers.reduce(
        (total, customer) => total + customer.quotations,
        0
    );

    return (
        <>
            <div className="w-full">

                {/* =====================================================
            PAGE HEADER
        ====================================================== */}

                <div className="flex flex-col gap-6 border-b border-black/[0.08] pb-7 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-[#94BE26]" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D746D]">
                                Customer Management
                            </p>
                        </div>

                        <h1 className="mt-3 text-[36px] font-semibold leading-none tracking-[-0.045em] text-[#151814] sm:text-[42px] lg:text-[48px]">
                            Customers
                        </h1>

                        <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#686F68]">
                            View customer information, quotation history, contact details and
                            account activity.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2.5 shadow-sm">
                        <Users className="h-4 w-4 text-[#5A615A]" />

                        <span className="text-[12px] font-semibold text-[#444A44]">
                            {customers.length} Customers
                        </span>
                    </div>
                </div>

                {/* =====================================================
            SUMMARY
        ====================================================== */}

                <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                    <CustomerStatCard
                        title="Total Customers"
                        value={customers.length}
                        description="Registered customer accounts"
                        icon={Users}
                        dark
                    />

                    <CustomerStatCard
                        title="Active Customers"
                        value={activeCustomers}
                        description="Customers with recent activity"
                        icon={UserRound}
                    />

                    <CustomerStatCard
                        title="Total Quotations"
                        value={totalQuotations}
                        description="Quotation requests from customers"
                        icon={BriefcaseBusiness}
                    />

                </div>

                {/* =====================================================
            CUSTOMER LIST
        ====================================================== */}

                <div className="mt-6 overflow-hidden rounded-[24px] border border-[#DADCD5] bg-white shadow-[0_12px_35px_rgba(20,24,20,0.04)]">

                    {/* Toolbar */}

                    <div className="border-b border-black/[0.07] p-4 sm:p-5 lg:p-6">

                        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

                            {/* Search */}

                            <div className="relative w-full xl:max-w-[440px]">
                                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7D837D]" />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search customer, company, phone or email..."
                                    className="
                    h-12
                    w-full
                    rounded-[14px]
                    border
                    border-black/[0.08]
                    bg-[#F5F5F0]
                    pl-11
                    pr-4
                    text-[12px]
                    font-medium
                    text-[#202420]
                    outline-none
                    transition
                    placeholder:text-[#929792]
                    hover:border-black/15
                    focus:border-[#94BE26]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#D8FF65]/20
                  "
                                />
                            </div>

                            {/* Filters */}

                            <div className="overflow-x-auto">
                                <div className="flex min-w-max gap-2">
                                    {statusFilters.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => setStatus(item)}
                                            className={`
                        rounded-full
                        px-4
                        py-2.5
                        text-[10px]
                        font-bold
                        transition-all

                        ${status === item
                                                    ? "bg-[#151814] text-white"
                                                    : "bg-[#F0F1EC] text-[#626862] hover:bg-[#D8FF65] hover:text-[#151814]"
                                                }
                      `}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-black/[0.05] pt-4">
                            <p className="text-[11px] font-medium text-[#737973]">
                                Showing{" "}
                                <span className="font-bold text-[#202420]">
                                    {filteredCustomers.length}
                                </span>{" "}
                                customers
                            </p>
                        </div>

                    </div>

                    {/* =================================================
              DESKTOP TABLE
          ================================================== */}

                    <div className="hidden overflow-x-auto lg:block">
                        <table className="w-full min-w-[1080px] border-collapse">

                            <thead>
                                <tr className="border-b border-black/[0.07] bg-[#F5F5F0]">
                                    <TableHeading>Customer</TableHeading>
                                    <TableHeading>Contact Details</TableHeading>
                                    <TableHeading>Location</TableHeading>
                                    <TableHeading>Quotations</TableHeading>
                                    <TableHeading>Last Enquiry</TableHeading>
                                    <TableHeading>Status</TableHeading>
                                    <TableHeading>Action</TableHeading>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredCustomers.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="border-b border-black/[0.055] transition hover:bg-[#FAFAF7] last:border-b-0"
                                    >

                                        {/* Customer */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3.5">

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#EEF1E7]">
                                                    <Building2 className="h-4 w-4 text-[#4E574C]" />
                                                </div>

                                                <div>
                                                    <p className="text-[12px] font-bold text-[#202420]">
                                                        {customer.company}
                                                    </p>

                                                    <div className="mt-1 flex items-center gap-2">
                                                        <span className="text-[10px] font-medium text-[#666D66]">
                                                            {customer.contactName}
                                                        </span>

                                                        <span className="h-1 w-1 rounded-full bg-[#A6ABA6]" />

                                                        <span className="text-[9px] font-semibold text-[#858B85]">
                                                            {customer.id}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Contact */}

                                        <td className="px-6 py-5">
                                            <div className="space-y-2.5">

                                                <a
                                                    href={`tel:${customer.phone}`}
                                                    className="flex items-center gap-2.5 text-[11px] font-semibold text-[#252A25] transition hover:text-[#69851D]"
                                                >
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#EFF1EB]">
                                                        <Phone className="h-3.5 w-3.5" />
                                                    </span>

                                                    {customer.phone}
                                                </a>

                                                <a
                                                    href={`mailto:${customer.email}`}
                                                    className="flex max-w-[250px] items-center gap-2.5 text-[11px] font-semibold text-[#555C55] transition hover:text-[#69851D]"
                                                >
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#EFF1EB]">
                                                        <Mail className="h-3.5 w-3.5" />
                                                    </span>

                                                    <span className="break-all">
                                                        {customer.email}
                                                    </span>
                                                </a>

                                            </div>
                                        </td>

                                        {/* Location */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#555C55]">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {customer.location}
                                            </div>
                                        </td>

                                        {/* Quotations */}

                                        <td className="px-6 py-5">
                                            <p className="text-[13px] font-bold text-[#202420]">
                                                {customer.quotations}
                                            </p>

                                            <p className="mt-1 text-[10px] font-semibold text-[#747A74]">
                                                {customer.quoteValue}
                                            </p>
                                        </td>

                                        {/* Last Enquiry */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#555C55]">
                                                <CalendarDays className="h-3.5 w-3.5" />
                                                {customer.lastEnquiry}
                                            </div>
                                        </td>

                                        {/* Status */}

                                        <td className="px-6 py-5">
                                            <CustomerStatus status={customer.status} />
                                        </td>

                                        {/* Action */}

                                        <td className="px-6 py-5">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedCustomer(customer)}
                                                className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#151814]
                          px-4
                          py-2.5
                          text-[10px]
                          font-bold
                          text-white
                          transition
                          hover:bg-[#2A302B]
                        "
                                            >
                                                View Details

                                                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* =================================================
              MOBILE / TABLET
          ================================================== */}

                    <div className="grid gap-4 bg-[#F1F0EA] p-4 sm:p-5 md:grid-cols-2 lg:hidden">

                        {filteredCustomers.map((customer) => (
                            <article
                                key={customer.id}
                                className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-4 shadow-sm sm:p-5"
                            >

                                {/* Top */}

                                <div className="flex items-start justify-between gap-3">

                                    <div className="min-w-0">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#858B85]">
                                            {customer.id}
                                        </p>

                                        <h3 className="mt-2 text-[16px] font-bold leading-5 text-[#202420]">
                                            {customer.company}
                                        </h3>

                                        <p className="mt-1.5 text-[11px] font-semibold text-[#666D66]">
                                            {customer.contactName}
                                        </p>
                                    </div>

                                    <CustomerStatus status={customer.status} />

                                </div>

                                {/* Contact */}

                                <div className="mt-5 space-y-3 rounded-[15px] bg-[#F5F5F0] p-4">

                                    <a
                                        href={`tel:${customer.phone}`}
                                        className="flex items-center gap-3 text-[12px] font-semibold text-[#252A25]"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-white">
                                            <Phone className="h-3.5 w-3.5" />
                                        </span>

                                        {customer.phone}
                                    </a>

                                    <a
                                        href={`mailto:${customer.email}`}
                                        className="flex items-start gap-3 text-[11px] font-semibold leading-5 text-[#4D544D]"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-white">
                                            <Mail className="h-3.5 w-3.5" />
                                        </span>

                                        <span className="min-w-0 break-all">
                                            {customer.email}
                                        </span>
                                    </a>

                                </div>

                                {/* Details */}

                                <div className="mt-4 grid grid-cols-2 gap-3">

                                    <MobileInfo
                                        label="Location"
                                        value={customer.location}
                                    />

                                    <MobileInfo
                                        label="Quotations"
                                        value={`${customer.quotations} Requests`}
                                    />

                                    <MobileInfo
                                        label="Quote Value"
                                        value={customer.quoteValue}
                                    />

                                    <MobileInfo
                                        label="Last Enquiry"
                                        value={customer.lastEnquiry}
                                    />

                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedCustomer(customer)}
                                    className="
                    group
                    mt-5
                    flex
                    h-12
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-[#151814]
                    pl-5
                    pr-1.5
                    text-[11px]
                    font-bold
                    text-white
                  "
                                >
                                    View Customer Details

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8FF65] text-[#151814]">
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                                    </span>
                                </button>

                            </article>
                        ))}

                    </div>

                    {/* Empty */}

                    {filteredCustomers.length === 0 && (
                        <div className="px-5 py-20 text-center">
                            <Users className="mx-auto h-9 w-9 text-[#A2A7A2]" />

                            <h3 className="mt-4 text-[18px] font-bold text-[#202420]">
                                No customers found
                            </h3>

                            <p className="mt-2 text-[12px] text-[#747A74]">
                                Try changing the search or status filter.
                            </p>
                        </div>
                    )}

                </div>
            </div>

            {/* =====================================================
          CUSTOMER DETAILS
      ====================================================== */}

            {selectedCustomer && (
                <CustomerDetails
                    customer={selectedCustomer}
                    onClose={() => setSelectedCustomer(null)}
                />
            )}
        </>
    );
}

/* =========================================================
   STAT CARD
========================================================= */

function CustomerStatCard({
    title,
    value,
    description,
    icon: Icon,
    dark = false,
}) {
    return (
        <div
            className={`
        rounded-[22px]
        border
        p-5
        shadow-[0_10px_35px_rgba(20,24,20,.04)]
        sm:p-6

        ${dark
                    ? "border-[#151814] bg-[#151814] text-white"
                    : "border-[#DADCD5] bg-white text-[#202420]"
                }
      `}
        >
            <div className="flex items-start justify-between">

                <div>
                    <p
                        className={`text-[10px] font-bold uppercase tracking-[0.15em] ${dark ? "text-white/55" : "text-[#777E77]"
                            }`}
                    >
                        {title}
                    </p>

                    <p className="mt-4 text-[32px] font-bold tracking-[-0.04em]">
                        {value}
                    </p>
                </div>

                <span
                    className={`flex h-11 w-11 items-center justify-center rounded-[13px] ${dark
                            ? "bg-[#D8FF65] text-[#151814]"
                            : "bg-[#EEF1E7] text-[#4F574F]"
                        }`}
                >
                    <Icon className="h-4 w-4" />
                </span>

            </div>

            <p
                className={`mt-4 text-[11px] font-medium ${dark ? "text-white/50" : "text-[#747A74]"
                    }`}
            >
                {description}
            </p>
        </div>
    );
}

/* =========================================================
   TABLE HEADING
========================================================= */

function TableHeading({ children }) {
    return (
        <th className="px-6 py-4 text-left text-[9px] font-bold uppercase tracking-[0.15em] text-[#777E77]">
            {children}
        </th>
    );
}

/* =========================================================
   MOBILE INFO
========================================================= */

function MobileInfo({ label, value }) {
    return (
        <div className="rounded-[13px] border border-black/[0.06] p-3">
            <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#858B85]">
                {label}
            </p>

            <p className="mt-1.5 text-[11px] font-bold leading-4 text-[#303630]">
                {value}
            </p>
        </div>
    );
}

/* =========================================================
   STATUS
========================================================= */

function CustomerStatus({ status }) {
    const styles = {
        Active: "bg-[#E7F5E9] text-[#31733A]",
        New: "bg-[#E9F2FF] text-[#255DA8]",
        Inactive: "bg-[#ECEEEC] text-[#626862]",
    };

    return (
        <span
            className={`
        inline-flex
        shrink-0
        rounded-full
        px-3
        py-1.5
        text-[9px]
        font-bold
        ${styles[status] || "bg-[#ECEEEC] text-[#626862]"}
      `}
        >
            {status}
        </span>
    );
}

/* =========================================================
   CUSTOMER DETAILS DRAWER
========================================================= */

function CustomerDetails({ customer, onClose }) {
    return (
        <div className="fixed inset-0 z-[200]">

            {/* Overlay */}

            <button
                type="button"
                aria-label="Close customer details"
                onClick={onClose}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            />

            {/* Drawer */}

            <aside
                className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          max-h-[92vh]
          flex-col
          overflow-hidden
          rounded-t-[26px]
          bg-[#EFEFE9]
          shadow-2xl

          sm:bottom-auto
          sm:left-auto
          sm:right-0
          sm:top-0
          sm:h-full
          sm:max-h-none
          sm:w-full
          sm:max-w-[620px]
          sm:rounded-none
        "
            >

                {/* Header */}

                <div className="flex items-start justify-between gap-5 border-b border-black/[0.08] bg-white px-5 py-5 sm:px-7 sm:py-6">

                    <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#777E77]">
                            Customer Profile
                        </p>

                        <h2 className="mt-2 truncate text-[22px] font-bold tracking-[-0.03em] text-[#202420] sm:text-[26px]">
                            {customer.company}
                        </h2>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                            <CustomerStatus status={customer.status} />

                            <span className="text-[10px] font-semibold text-[#777E77]">
                                {customer.id}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F1EC] text-[#202420] transition hover:bg-[#151814] hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>

                </div>

                {/* Content */}

                <div className="flex-1 overflow-y-auto p-4 sm:p-6">

                    {/* Customer Information */}

                    <DetailSection title="Customer Information">

                        <div className="rounded-[18px] bg-[#151814] p-5 text-white">
                            <div className="flex items-start gap-4">

                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#D8FF65] text-[#151814]">
                                    <Building2 className="h-5 w-5" />
                                </span>

                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                                        Company
                                    </p>

                                    <p className="mt-2 text-[17px] font-bold">
                                        {customer.company}
                                    </p>

                                    <p className="mt-1 text-[11px] font-medium text-white/60">
                                        {customer.category}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2">

                            <a
                                href={`tel:${customer.phone}`}
                                className="rounded-[16px] border border-black/[0.07] bg-white p-4 transition hover:border-[#94BE26]"
                            >
                                <div className="flex items-center gap-3">

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF1EB]">
                                        <Phone className="h-4 w-4" />
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#858B85]">
                                            Phone
                                        </p>

                                        <p className="mt-1 text-[13px] font-bold text-[#202420]">
                                            {customer.phone}
                                        </p>
                                    </div>

                                </div>
                            </a>

                            <a
                                href={`mailto:${customer.email}`}
                                className="rounded-[16px] border border-black/[0.07] bg-white p-4 transition hover:border-[#94BE26]"
                            >
                                <div className="flex items-start gap-3">

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF1EB]">
                                        <Mail className="h-4 w-4" />
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#858B85]">
                                            Email
                                        </p>

                                        <p className="mt-1 break-all text-[12px] font-bold leading-5 text-[#202420]">
                                            {customer.email}
                                        </p>
                                    </div>

                                </div>
                            </a>

                        </div>

                    </DetailSection>

                    {/* Account */}

                    <DetailSection title="Account Information">

                        <div className="grid gap-3 sm:grid-cols-2">

                            <DetailItem
                                icon={UserRound}
                                label="Contact Person"
                                value={customer.contactName}
                            />

                            <DetailItem
                                icon={MapPin}
                                label="Location"
                                value={customer.location}
                            />

                            <DetailItem
                                icon={CalendarDays}
                                label="Customer Since"
                                value={customer.joined}
                            />

                            <DetailItem
                                icon={CalendarDays}
                                label="Last Enquiry"
                                value={customer.lastEnquiry}
                            />

                        </div>

                    </DetailSection>

                    {/* Quotation */}

                    <DetailSection title="Quotation Summary">

                        <div className="grid grid-cols-2 gap-3">

                            <div className="rounded-[17px] bg-white p-4">
                                <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#858B85]">
                                    Quotations
                                </p>

                                <p className="mt-2 text-[24px] font-bold tracking-[-0.03em] text-[#202420]">
                                    {customer.quotations}
                                </p>
                            </div>

                            <div className="rounded-[17px] bg-[#151814] p-4 text-white">
                                <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-white/45">
                                    Quote Value
                                </p>

                                <p className="mt-2 text-[18px] font-bold text-[#D8FF65]">
                                    {customer.quoteValue}
                                </p>
                            </div>

                        </div>

                    </DetailSection>

                    {/* Notes */}

                    <DetailSection title="Customer Notes">

                        <div className="rounded-[17px] bg-white p-5">
                            <div className="flex gap-3">

                                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#697069]" />

                                <p className="text-[12px] leading-6 text-[#5F665F]">
                                    {customer.notes}
                                </p>

                            </div>
                        </div>

                    </DetailSection>

                </div>

                {/* Footer */}

                <div className="border-t border-black/[0.08] bg-white p-4 sm:p-5">

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-12 flex-1 rounded-full border border-black/[0.10] bg-white text-[11px] font-bold text-[#303630] transition hover:bg-[#F0F1EC]"
                        >
                            Close
                        </button>

                        <a
                            href={`mailto:${customer.email}`}
                            className="flex h-12 flex-1 items-center justify-between rounded-full bg-[#151814] pl-5 pr-1.5 text-[11px] font-bold text-white"
                        >
                            Contact Customer

                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8FF65] text-[#151814]">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                        </a>

                    </div>

                </div>

            </aside>
        </div>
    );
}

/* =========================================================
   DETAIL SECTION
========================================================= */

function DetailSection({ title, children }) {
    return (
        <section className="mb-5 rounded-[20px] border border-black/[0.06] bg-[#F6F6F1] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#94BE26]" />

                <h3 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#666D66]">
                    {title}
                </h3>
            </div>

            {children}
        </section>
    );
}

/* =========================================================
   DETAIL ITEM
========================================================= */

function DetailItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-[16px] bg-white p-4">

            <div className="flex items-start gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EFF1EB]">
                    <Icon className="h-4 w-4 text-[#525A52]" />
                </span>

                <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#858B85]">
                        {label}
                    </p>

                    <p className="mt-1.5 text-[12px] font-bold leading-5 text-[#252A25]">
                        {value}
                    </p>
                </div>

            </div>

        </div>
    );
} 