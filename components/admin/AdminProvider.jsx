"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
    ArrowUpRight,
    Search,
} from "lucide-react";

import { useAdmin } from "@/components/admin/AdminProvider";

export default function QuotesPage() {
    const { quotes = [] } = useAdmin();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredQuotes = useMemo(() => {
        const term = search.trim().toLowerCase();

        return quotes.filter((quote) => {
            const searchMatch =
                !term ||
                [
                    quote.id,
                    quote.company,
                    quote.contactName,
                    quote.email,
                    quote.phone,
                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(term);

            const statusMatch =
                status === "All" ||
                quote.status === status;

            return searchMatch && statusMatch;
        });
    }, [quotes, search, status]);

    const quoteTotal = (quote) => {
        return (quote.items || []).reduce(
            (total, item) =>
                total +
                Number(item.price || 0) *
                Number(item.quantity || 0),
            0
        );
    };

    const money = (value) =>
        Number(value || 0).toLocaleString("en-AE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    return (
        <div>
            <PageTitle
                eyebrow="Sales"
                title="Quotations"
                description="Manage quotation requests received from customers."
            />

            {/* Filters */}

            <div className="mb-5 flex flex-col gap-3 rounded-[24px] border border-black/[0.06] bg-white p-3 md:flex-row">
                <div className="flex h-12 flex-1 items-center gap-3 rounded-[15px] bg-[#F5F6F1] px-4">
                    <Search className="h-4 w-4 text-black/30" />

                    <input
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search quotation..."
                        className="h-full w-full bg-transparent text-[12px] outline-none placeholder:text-black/25"
                    />
                </div>

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                    className="h-12 rounded-[15px] bg-[#F5F6F1] px-4 text-[11px] font-bold outline-none"
                >
                    {[
                        "All",
                        "New",
                        "Reviewing",
                        "Quoted",
                        "Approved",
                        "Rejected",
                        "Completed",
                    ].map((item) => (
                        <option key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table */}

            <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">

                        <thead className="bg-[#F7F8F4]">
                            <tr className="text-left text-[8px] font-bold uppercase tracking-[0.12em] text-black/35">
                                <th className="px-6 py-4">
                                    Quote
                                </th>

                                <th className="px-6 py-4">
                                    Customer
                                </th>

                                <th className="px-6 py-4">
                                    Products
                                </th>

                                <th className="px-6 py-4">
                                    Value
                                </th>

                                <th className="px-6 py-4">
                                    Date
                                </th>

                                <th className="px-6 py-4">
                                    Status
                                </th>

                                <th className="px-6 py-4" />
                            </tr>
                        </thead>

                        <tbody>
                            {filteredQuotes.map((quote) => (
                                <tr
                                    key={quote.id}
                                    className="border-t border-black/[0.05]"
                                >
                                    <td className="px-6 py-5 text-[11px] font-bold">
                                        {quote.id}
                                    </td>

                                    <td className="px-6 py-5">
                                        <p className="text-[11px] font-bold">
                                            {quote.company}
                                        </p>

                                        <p className="mt-1 text-[9px] text-black/35">
                                            {quote.contactName}
                                        </p>
                                    </td>

                                    <td className="px-6 py-5 text-[10px]">
                                        {quote.items?.length || 0}
                                    </td>

                                    <td className="px-6 py-5 text-[10px] font-bold">
                                        AED{" "}
                                        {money(
                                            quoteTotal(quote)
                                        )}
                                    </td>

                                    <td className="px-6 py-5 text-[10px] text-black/45">
                                        {quote.date}
                                    </td>

                                    <td className="px-6 py-5">
                                        <StatusBadge
                                            value={quote.status}
                                        />
                                    </td>

                                    <td className="px-6 py-5">
                                        <Link
                                            href={`/admin/quotes/${quote.id}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#101411] text-white"
                                        >
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

function PageTitle({
    eyebrow,
    title,
    description,
}) {
    return (
        <div className="mb-7">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/35">
                {eyebrow}
            </p>

            <h1 className="mt-2 text-[38px] font-semibold tracking-[-0.05em]">
                {title}
            </h1>

            <p className="mt-2 text-[12px] text-black/45">
                {description}
            </p>
        </div>
    );
}

function StatusBadge({ value }) {
    const styles = {
        New: "bg-blue-50 text-blue-700",
        Reviewing:
            "bg-amber-50 text-amber-700",
        Quoted:
            "bg-violet-50 text-violet-700",
        Approved:
            "bg-emerald-50 text-emerald-700",
        Rejected:
            "bg-red-50 text-red-700",
        Completed:
            "bg-slate-100 text-slate-700",
    };

    return (
        <span
            className={`rounded-full px-2.5 py-1 text-[8px] font-bold uppercase ${styles[value] ||
                "bg-black/5 text-black/50"
                }`}
        >
            {value}
        </span>
    );
}