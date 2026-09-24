// "use client";

import Link from "next/link";

import {
    ArrowUpRight,
    BriefcaseBusiness,
    CircleDollarSign,
    Clock3,
    TrendingUp,
    Users,
} from "lucide-react";

/* =========================================================
   SUMMARY DATA
========================================================= */

const stats = [
    {
        title: "Total Quotations",
        value: "128",
        change: "+12.4%",
        note: "Compared to last month",
        icon: BriefcaseBusiness,
        featured: true,
    },
    {
        title: "New Quotations",
        value: "18",
        change: "+6",
        note: "Waiting for review",
        icon: Clock3,
    },
    {
        title: "Customers",
        value: "84",
        change: "+8.2%",
        note: "12 new this month",
        icon: Users,
    },
    {
        title: "Total Quote Value",
        value: "AED 84K",
        change: "+18.6%",
        note: "Estimated total value",
        icon: CircleDollarSign,
    },
];

/* =========================================================
   GRAPH DATA
========================================================= */

const graphData = [
    {
        day: "Mon",
        value: 4200,
        height: 42,
    },
    {
        day: "Tue",
        value: 6100,
        height: 61,
    },
    {
        day: "Wed",
        value: 4800,
        height: 48,
    },
    {
        day: "Thu",
        value: 8400,
        height: 84,
    },
    {
        day: "Fri",
        value: 7100,
        height: 71,
    },
    {
        day: "Sat",
        value: 9700,
        height: 97,
    },
    {
        day: "Sun",
        value: 7800,
        height: 78,
    },
];

/* =========================================================
   RECENT QUOTATIONS
========================================================= */

const recentQuotes = [
    {
        id: "QT-1048",
        company: "Al Noor Contracting LLC",
        customer: "Ahmed Kareem",
        date: "24 Sep 2026",
        products: 6,
        amount: "AED 8,450",
        status: "New",
    },
    {
        id: "QT-1047",
        company: "Blue Arc Technical Services",
        customer: "Joseph Mathew",
        date: "23 Sep 2026",
        products: 3,
        amount: "AED 4,280",
        status: "Reviewing",
    },
    {
        id: "QT-1046",
        company: "Prime Build Interiors",
        customer: "Nadia Ali",
        date: "23 Sep 2026",
        products: 8,
        amount: "AED 12,900",
        status: "Quoted",
    },
    {
        id: "QT-1045",
        company: "Gulf Horizon Maintenance",
        customer: "Saeed Rahman",
        date: "22 Sep 2026",
        products: 4,
        amount: "AED 6,750",
        status: "Approved",
    },
    {
        id: "QT-1044",
        company: "Vertex Building Solutions",
        customer: "Mohammed Ali",
        date: "21 Sep 2026",
        products: 5,
        amount: "AED 9,200",
        status: "Completed",
    },
];

/* =========================================================
   DASHBOARD
========================================================= */

export default function DashboardPage() {
    return (
        <div className="pb-12">

            {/* =====================================================
          PAGE TITLE
      ====================================================== */}

            <section className="mb-7">

                <h1
                    className="
            mt-2
            text-[38px]
            font-semibold
            leading-none
            tracking-[-0.05em]
            text-[#151814]
            sm:text-[44px]
          "
                >
                    Dashboard
                </h1>

                <p
                    className="
            mt-3
            text-[12px]
            font-medium
            leading-6
            text-[#666C65]
          "
                >
                    Monitor your latest quotation activity and business performance.
                </p>
            </section>

            {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}

            <section
                className="
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
            >
                {stats.map((item) => (
                    <StatCard
                        key={item.title}
                        {...item}
                    />
                ))}
            </section>

            {/* =====================================================
          GRAPH SECTION
      ====================================================== */}

            <section
                className="
          mt-6
          overflow-hidden
          rounded-[26px]
          border
          border-[#DADCD5]
          bg-white
          shadow-[0_10px_35px_rgba(17,21,18,0.04)]
        "
            >

                {/* Header */}

                <div
                    className="
            flex
            flex-col
            gap-4
            border-b
            border-[#E4E5E0]
            px-5
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
                >

                    <div>
                        <p
                            className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#747A73]
              "
                        >
                            Performance
                        </p>

                        <h2
                            className="
                mt-1.5
                text-[21px]
                font-semibold
                tracking-[-0.035em]
                text-[#151814]
              "
                        >
                            Weekly quotation value
                        </h2>

                        <p
                            className="
                mt-1.5
                text-[10px]
                font-medium
                text-[#6C726B]
              "
                        >
                            Estimated value of quotations received this week.
                        </p>
                    </div>

                    {/* Growth */}

                    <div
                        className="
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-[#DCE8C4]
              bg-[#F5FBE8]
              px-4
              py-2.5
            "
                    >
                        <span
                            className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#D8FF65]
                text-[#151814]
              "
                        >
                            <TrendingUp className="h-3.5 w-3.5" />
                        </span>

                        <div>
                            <p
                                className="
                  text-[10px]
                  font-bold
                  text-[#151814]
                "
                            >
                                +18.6%
                            </p>

                            <p
                                className="
                  mt-0.5
                  text-[8px]
                  font-medium
                  text-[#6D7467]
                "
                            >
                                vs last week
                            </p>
                        </div>
                    </div>
                </div>

                {/* =================================================
            GRAPH CONTENT
        ================================================== */}

                <div className="p-5 sm:p-6 lg:p-7">

                    {/* Value */}

                    <div
                        className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
                    >
                        <div>
                            <p
                                className="
                  text-[10px]
                  font-semibold
                  text-[#686E67]
                "
                            >
                                Total this week
                            </p>

                            <p
                                className="
                  mt-2
                  text-[34px]
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-[#151814]
                  sm:text-[38px]
                "
                            >
                                AED 48,100
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <p
                                className="
                  text-[10px]
                  font-semibold
                  text-[#686E67]
                "
                            >
                                Highest day
                            </p>

                            <p
                                className="
                  mt-1
                  text-[12px]
                  font-bold
                  text-[#151814]
                "
                            >
                                AED 9,700
                            </p>

                            <p
                                className="
                  mt-0.5
                  text-[9px]
                  font-medium
                  text-[#777D76]
                "
                            >
                                Saturday
                            </p>
                        </div>
                    </div>

                    {/* =================================================
              GRAPH
          ================================================== */}

                    <div
                        className="
              mt-9
              grid
              grid-cols-[42px_minmax(0,1fr)]
              gap-3
            "
                    >

                        {/* Y Axis */}

                        <div
                            className="
                flex
                h-[260px]
                flex-col
                justify-between
                pb-[32px]
                text-right
                text-[9px]
                font-semibold
                text-[#7B817A]
              "
                        >
                            <span>10K</span>
                            <span>7.5K</span>
                            <span>5K</span>
                            <span>2.5K</span>
                            <span>0</span>
                        </div>

                        {/* Graph */}

                        <div className="relative h-[260px]">

                            {/* Background area */}

                            <div
                                className="
                  absolute
                  inset-x-0
                  bottom-[32px]
                  top-0
                  rounded-[14px]
                  bg-[#FAFAF7]
                "
                            />

                            {/* Grid Lines */}

                            <GraphLine top="0%" />

                            <GraphLine top="25%" />

                            <GraphLine top="50%" />

                            <GraphLine top="75%" />

                            <div
                                className="
                  absolute
                  inset-x-0
                  bottom-[32px]
                  z-[1]
                  h-px
                  bg-[#CED2C9]
                "
                            />

                            {/* Bars */}

                            <div
                                className="
                  absolute
                  inset-0
                  z-10
                  grid
                  grid-cols-7
                  gap-2
                  sm:gap-4
                  lg:gap-6
                "
                            >
                                {graphData.map((item, index) => (
                                    <GraphBar
                                        key={item.day}
                                        item={item}
                                        active={index === 5}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          RECENT QUOTATIONS
      ====================================================== */}

            <section
                className="
          mt-6
          overflow-hidden
          rounded-[26px]
          border
          border-[#DADCD5]
          bg-white
          shadow-[0_10px_35px_rgba(17,21,18,0.04)]
        "
            >

                {/* Section heading */}

                <div
                    className="
            flex
            items-center
            justify-between
            gap-5
            border-b
            border-[#E4E5E0]
            px-5
            py-5
            sm:px-6
          "
                >
                    <div>
                        <p
                            className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#747A73]
              "
                        >
                            Latest Requests
                        </p>

                        <h2
                            className="
                mt-1.5
                text-[21px]
                font-semibold
                tracking-[-0.035em]
                text-[#151814]
              "
                        >
                            Recent quotations
                        </h2>

                        <p
                            className="
                mt-1.5
                text-[10px]
                font-medium
                text-[#6C726B]
              "
                        >
                            Most recent quotation requests from customers.
                        </p>
                    </div>

                    <Link
                        href="/admin/quotes"
                        className="
              group
              flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-[#DADCD5]
              bg-[#F7F7F3]
              px-4
              py-2.5
              text-[9px]
              font-bold
              text-[#30342F]
              transition
              hover:bg-[#151814]
              hover:text-white
            "
                    >
                        View All

                        <ArrowUpRight
                            className="
                h-3.5
                w-3.5
                transition
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
                        />
                    </Link>
                </div>

                {/* =================================================
            DESKTOP TABLE
        ================================================== */}

                <div className="hidden overflow-x-auto md:block">

                    <table className="w-full min-w-[850px]">

                        <thead className="bg-[#F5F5F1]">

                            <tr
                                className="
                  text-left
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.10em]
                  text-[#626861]
                "
                            >
                                <th className="px-6 py-4">
                                    Reference
                                </th>

                                <th className="px-6 py-4">
                                    Customer
                                </th>

                                <th className="px-6 py-4">
                                    Products
                                </th>

                                <th className="px-6 py-4">
                                    Amount
                                </th>

                                <th className="px-6 py-4">
                                    Status
                                </th>

                                <th className="px-6 py-4" />
                            </tr>

                        </thead>

                        <tbody>

                            {recentQuotes.map((quote) => (

                                <tr
                                    key={quote.id}
                                    className="
                    border-t
                    border-[#E7E8E3]
                    transition
                    hover:bg-[#FAFAF7]
                  "
                                >

                                    {/* Reference */}

                                    <td className="px-6 py-5">

                                        <p
                                            className="
                        text-[11px]
                        font-bold
                        text-[#151814]
                      "
                                        >
                                            {quote.id}
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[9px]
                        font-medium
                        text-[#777D76]
                      "
                                        >
                                            {quote.date}
                                        </p>

                                    </td>

                                    {/* Customer */}

                                    <td className="px-6 py-5">

                                        <p
                                            className="
                        text-[11px]
                        font-semibold
                        text-[#151814]
                      "
                                        >
                                            {quote.company}
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[9px]
                        font-medium
                        text-[#737972]
                      "
                                        >
                                            {quote.customer}
                                        </p>

                                    </td>

                                    {/* Products */}

                                    <td
                                        className="
                      px-6
                      py-5
                      text-[11px]
                      font-semibold
                      text-[#353A34]
                    "
                                    >
                                        {quote.products}
                                    </td>

                                    {/* Amount */}

                                    <td
                                        className="
                      px-6
                      py-5
                      text-[11px]
                      font-bold
                      text-[#151814]
                    "
                                    >
                                        {quote.amount}
                                    </td>

                                    {/* Status */}

                                    <td className="px-6 py-5">

                                        <StatusBadge
                                            value={quote.status}
                                        />

                                    </td>

                                    {/* Action */}

                                    <td className="px-6 py-5">

                                        <Link
                                            href={`/admin/quotes/${quote.id}`}
                                            className="
                        ml-auto
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DDE0D8]
                        bg-[#F4F5F0]
                        text-[#151814]
                        transition
                        hover:border-[#151814]
                        hover:bg-[#151814]
                        hover:text-white
                      "
                                        >
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </Link>

                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {/* =================================================
            MOBILE VIEW
        ================================================== */}

                <div className="divide-y divide-[#E5E6E1] md:hidden">

                    {recentQuotes.map((quote) => (

                        <Link
                            key={quote.id}
                            href={`/admin/quotes/${quote.id}`}
                            className="
                block
                p-5
                transition
                hover:bg-[#FAFAF7]
              "
                        >

                            <div
                                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
                            >

                                <div>
                                    <p
                                        className="
                      text-[11px]
                      font-bold
                      text-[#151814]
                    "
                                    >
                                        {quote.id}
                                    </p>

                                    <p
                                        className="
                      mt-1
                      text-[9px]
                      font-medium
                      text-[#777D76]
                    "
                                    >
                                        {quote.date}
                                    </p>
                                </div>

                                <StatusBadge
                                    value={quote.status}
                                />

                            </div>

                            <div className="mt-4">

                                <p
                                    className="
                    text-[12px]
                    font-semibold
                    text-[#151814]
                  "
                                >
                                    {quote.company}
                                </p>

                                <p
                                    className="
                    mt-1
                    text-[9px]
                    font-medium
                    text-[#70766F]
                  "
                                >
                                    {quote.customer}
                                </p>

                            </div>

                            <div
                                className="
                  mt-5
                  flex
                  items-end
                  justify-between
                  gap-5
                "
                            >

                                <div>

                                    <p
                                        className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#777D76]
                    "
                                    >
                                        {quote.products} Products
                                    </p>

                                    <p
                                        className="
                      mt-1.5
                      text-[13px]
                      font-bold
                      text-[#151814]
                    "
                                    >
                                        {quote.amount}
                                    </p>

                                </div>

                                <span
                                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DDE0D8]
                    bg-[#F4F5F0]
                    text-[#151814]
                  "
                                >
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </span>

                            </div>

                        </Link>
                    ))}

                </div>
            </section>
        </div>
    );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
    title,
    value,
    change,
    note,
    icon: Icon,
    featured = false,
}) {
    return (
        <article
            className={`
        relative
        overflow-hidden
        rounded-[23px]
        border
        p-5
        shadow-[0_8px_25px_rgba(17,21,18,0.035)]

        ${featured
                    ? `
              border-[#151814]
              bg-[#151814]
              text-white
            `
                    : `
              border-[#DADCD5]
              bg-white
              text-[#151814]
            `
                }
      `}
        >

            {featured && (
                <div
                    className="
            pointer-events-none
            absolute
            -right-14
            -top-14
            h-36
            w-36
            rounded-full
            bg-[#D8FF65]/10
            blur-[50px]
          "
                />
            )}

            <div className="relative">

                <div
                    className="
            flex
            items-start
            justify-between
            gap-4
          "
                >

                    <p
                        className={`
              text-[10px]
              font-semibold

              ${featured
                                ? "text-[#C9CDC7]"
                                : "text-[#626861]"
                            }
            `}
                    >
                        {title}
                    </p>

                    <span
                        className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[12px]

              ${featured
                                ? `
                    bg-[#D8FF65]
                    text-[#151814]
                  `
                                : `
                    bg-[#F0F1EC]
                    text-[#151814]
                  `
                            }
            `}
                    >
                        <Icon className="h-4 w-4" />
                    </span>

                </div>

                <p
                    className="
            mt-5
            text-[30px]
            font-semibold
            leading-none
            tracking-[-0.05em]
          "
                >
                    {value}
                </p>

                <div
                    className="
            mt-5
            flex
            items-center
            gap-2
          "
                >

                    <span
                        className={`
              rounded-full
              px-2.5
              py-1
              text-[8px]
              font-bold

              ${featured
                                ? `
                    bg-[#D8FF65]
                    text-[#151814]
                  `
                                : `
                    bg-[#EDF7E5]
                    text-[#39712F]
                  `
                            }
            `}
                    >
                        {change}
                    </span>

                    <p
                        className={`
              truncate
              text-[8px]
              font-medium

              ${featured
                                ? "text-[#AFB5AD]"
                                : "text-[#747A73]"
                            }
            `}
                    >
                        {note}
                    </p>

                </div>

            </div>
        </article>
    );
}

/* =========================================================
   GRAPH LINE
========================================================= */

function GraphLine({ top }) {
    return (
        <div
            style={{
                top,
            }}
            className="
        absolute
        inset-x-0
        z-[1]
        h-px
        bg-[#E1E3DD]
      "
        />
    );
}

/* =========================================================
   GRAPH BAR
========================================================= */

function GraphBar({
    item,
    active = false,
}) {
    return (
        <div
            className="
        group
        flex
        h-full
        min-w-0
        flex-col
        justify-end
      "
        >

            {/* Bar Area */}

            <div
                className="
          relative
          flex
          flex-1
          items-end
          justify-center
          pb-[32px]
        "
            >

                {/* Tooltip */}

                <div
                    className={`
            absolute
            left-1/2
            z-30
            -translate-x-1/2
            whitespace-nowrap
            rounded-[8px]
            bg-[#151814]
            px-2.5
            py-1.5
            text-[8px]
            font-bold
            text-white
            shadow-lg
            transition

            ${active
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
          `}
                    style={{
                        bottom: `calc(${item.height}% + 35px)`,
                    }}
                >
                    AED {(item.value / 1000).toFixed(1)}K
                </div>

                {/* Bar */}

                <div
                    style={{
                        height: `${item.height}%`,
                    }}
                    className={`
            relative
            w-[58%]
            max-w-[48px]
            min-w-[15px]
            rounded-t-[8px]
            transition-all
            duration-300
            group-hover:-translate-y-1

            ${active
                            ? "bg-[#151814]"
                            : "bg-[#D3D8CE] group-hover:bg-[#BAC3B4]"
                        }
          `}
                >

                    {active && (
                        <span
                            className="
                absolute
                left-1/2
                top-2
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-[#D8FF65]
              "
                        />
                    )}

                </div>
            </div>

            {/* Day */}

            <p
                className={`
          text-center
          text-[9px]
          font-semibold

          ${active
                        ? "text-[#151814]"
                        : "text-[#747A73]"
                    }
        `}
            >
                {item.day}
            </p>
        </div>
    );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ value }) {
    const styles = {
        New:
            "bg-[#E9F2FF] text-[#235CA8]",

        Reviewing:
            "bg-[#FFF4D9] text-[#93620E]",

        Quoted:
            "bg-[#F1EAFE] text-[#6741A5]",

        Approved:
            "bg-[#E8F7E9] text-[#31783A]",

        Completed:
            "bg-[#ECEEEC] text-[#515751]",

        Rejected:
            "bg-[#FDE9E9] text-[#A63A3A]",
    };

    return (
        <span
            className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-2.5
        py-1.5
        text-[8px]
        font-bold

        ${styles[value] ||
                "bg-[#ECEEEC] text-[#515751]"
                }
      `}
        >

            <span
                className="
          h-1.5
          w-1.5
          rounded-full
          bg-current
        "
            />

            {value}

        </span>
    );
}