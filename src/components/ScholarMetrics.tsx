import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState } from "react";

interface ScholarMetricsProps {
  publications?: number;
  citations?: number;
  hIndex?: number;
  i10Index?: number;
  byYear?: { year: number; citations: number }[];
  scholarUrl?: string;
}

interface StatCardProps {
  label: string;
  value: number;
  index: number;
}

const StatCard = ({ label, value, index }: StatCardProps) => (
  <div
    className="border border-slate-100 dark:border-slate-800 rounded-lg p-3 transition-all duration-200 animate-fade-in"
    style={{ animationDelay: `${index * 50}ms` }}
    aria-label={`${label}: ${value}`}
  >
    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
      {label}
    </p>
    <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">{value}</p>
  </div>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-md px-2 py-1 shadow-sm">
        <p className="text-xs text-slate-600 dark:text-slate-300">
          {payload[0].payload.year}: {payload[0].value} citations
        </p>
      </div>
    );
  }
  return null;
};

export const ScholarMetrics = ({
  publications = 10,
  citations = 62,
  hIndex = 4,
  i10Index = 2,
  byYear = [
    { year: 2022, citations: 8 },
    { year: 2023, citations: 22 },
    { year: 2024, citations: 32 },
  ],
  scholarUrl = "https://scholar.google.com/citations?user=YOUR_ID",
}: ScholarMetricsProps) => {
  const [focusedBar, setFocusedBar] = useState<number | null>(null);

  const stats = [
    { label: "Publications", value: publications },
    { label: "Citations", value: citations },
    { label: "h-index", value: hIndex },
    { label: "i10-index", value: i10Index },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <Separator className="mb-6" />
        
        {/* Header */}
        <div className="mb-4 animate-fade-in">
          <h3 className="text-base font-medium text-slate-600 dark:text-slate-300 mb-0.5">
            Scholar Metrics
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500">Data from Google Scholar</p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              index={index}
            />
          ))}
        </div>

        {/* Bar Chart Section */}
        <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-4 animate-fade-in mb-3">
          <h4 className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
            Citations by Year
          </h4>
          <div className="w-full h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={byYear}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              >
                <XAxis
                  dataKey="year"
                  stroke="#94a3b8"
                  style={{ fontSize: "11px" }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  style={{ fontSize: "11px" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f1f5f9", opacity: 0.2 }} />
                <Bar
                  dataKey="citations"
                  fill="#94a3b8"
                  radius={[4, 4, 0, 0]}
                  animationDuration={600}
                  animationBegin={100}
                  onMouseEnter={(data, index) => setFocusedBar(index)}
                  onMouseLeave={() => setFocusedBar(null)}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA Link */}
        <div className="flex justify-end animate-fade-in">
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 hover:underline flex items-center gap-1 group"
          >
            View on Google Scholar
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
