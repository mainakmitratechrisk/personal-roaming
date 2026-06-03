"use client";

import { MdFlightLand, MdFlightTakeoff, MdRefresh, MdSearch } from "react-icons/md";
import { TbPlaneDeparture } from "react-icons/tb";

/* ─── Static data ─────────────────────────────────────────── */
type FlightStatus = "ARRIVED" | "LANDED" | "EXPECTED" | "ON TIME" | "DELAYED" | "BOARDING" | "GATE OPEN" | "SCHEDULED";

interface Flight {
  time: string;
  flight: string;
  airline: string;
  from: string;
  status: FlightStatus;
  gate: string;
}

const arrivals: Flight[] = [
  { time: "8:45",  flight: "BG 147", airline: "Biman Bangladesh Airlines", from: "Dubai (DXB)",       status: "ARRIVED",  gate: "A2" },
  { time: "9:20",  flight: "QR 642", airline: "Qatar Airways",              from: "Doha (DOH)",        status: "LANDED",   gate: "B4" },
  { time: "10:05", flight: "EK 584", airline: "Emirates Airlines",          from: "Dubai (DXB)",       status: "EXPECTED", gate: "A1" },
  { time: "10:30", flight: "SV 881", airline: "Saudia Airlines",            from: "Jeddah (JED)",      status: "EXPECTED", gate: "B2" },
  { time: "11:15", flight: "TG 321", airline: "Thai Airways",               from: "Bangkok (BKK)",     status: "ON TIME",  gate: "A3" },
  { time: "11:50", flight: "KU 287", airline: "Kuwait Airways",             from: "Kuwait (KWI)",      status: "DELAYED",  gate: "B1" },
  { time: "12:35", flight: "MH 193", airline: "Malaysia Airlines",          from: "Kuala Lumpur (KUL)",status: "ON TIME",  gate: "A2" },
  { time: "13:10", flight: "GF 152", airline: "Gulf Air",                   from: "Bahrain (BAH)",     status: "SCHEDULED",gate: "B4" },
];

const departures: Flight[] = [
  { time: "9:30",  flight: "BG 148", airline: "Biman Bangladesh Airlines", from: "Dubai (DXB)",       status: "BOARDING",  gate: "A2" },
  { time: "10:15", flight: "QR 643", airline: "Qatar Airways",              from: "Doha (DOH)",        status: "GATE OPEN", gate: "B6" },
  { time: "10:46", flight: "EK 585", airline: "Emirates Airlines",          from: "Dubai (DXB)",       status: "ON TIME",   gate: "A3" },
  { time: "11:20", flight: "SV 882", airline: "Saudia Airlines",            from: "Jeddah (JED)",      status: "ON TIME",   gate: "B2" },
  { time: "12:10", flight: "TG 322", airline: "Thai Airways",               from: "Bangkok (BKK)",     status: "ON TIME",   gate: "A1" },
  { time: "13:00", flight: "KU 288", airline: "Kuwait Airways",             from: "Kuwait (KWI)",      status: "DELAYED",   gate: "B1" },
  { time: "13:40", flight: "MH 194", airline: "Malaysia Airlines",          from: "Kuala Lumpur (KUL)",status: "SCHEDULED", gate: "A2" },
  { time: "14:30", flight: "GF 153", airline: "Gulf Air",                   from: "Bahrain (BAH)",     status: "SCHEDULED", gate: "B3" },
];

/* ─── Status badge colours ────────────────────────────────── */
const statusStyle: Record<FlightStatus, string> = {
  ARRIVED:    "bg-emerald-100 text-emerald-700",
  LANDED:     "bg-blue-100 text-blue-700",
  EXPECTED:   "bg-amber-100 text-amber-700",
  "ON TIME":  "bg-green-100 text-green-700",
  DELAYED:    "bg-red-100 text-red-700",
  BOARDING:   "bg-indigo-100 text-indigo-700",
  "GATE OPEN":"bg-violet-100 text-violet-700",
  SCHEDULED:  "bg-slate-100 text-slate-600",
};

/* ─── Sub-components ──────────────────────────────────────── */
function Badge({ status }: { status: FlightStatus }) {
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${statusStyle[status]}`}>
      {status}
    </span>
  );
}

function FlightTable({ flights, type }: { flights: Flight[]; type: "arrivals" | "departures" }) {
  const isArr = type === "arrivals";
  return (
    <div className="flex-1 min-w-0 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Table header bar */}
      <div className="bg-[#1a1f5e] px-4 py-2.5 flex items-center gap-2">
        {isArr
          ? <MdFlightLand className="text-white w-5 h-5 rotate-[-15deg]" />
          : <MdFlightTakeoff className="text-white w-5 h-5 rotate-[15deg]" />}
        <span className="text-white font-semibold text-sm tracking-wide">
          {isArr ? "Arrivals" : "Departures"}
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[56px_70px_1fr_120px_80px_44px] px-3 py-1.5 bg-slate-50 border-b border-slate-100">
        {["TIME","FLIGHT","AIRLINE","FROM","STATUS","GATE"].map((h) => (
          <span key={h} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-50">
        {flights.map((f, i) => (
          <div
            key={i}
            className="grid grid-cols-[56px_70px_1fr_120px_80px_44px] px-3 py-1.5 items-center hover:bg-slate-50 transition-colors"
          >
            <span className="text-xs font-medium text-slate-700">{f.time}</span>
            <span className="text-xs font-semibold text-[#1a1f5e]">{f.flight}</span>
            <span className="text-[11px] text-slate-600 truncate pr-2">{f.airline}</span>
            <span className="text-[11px] text-slate-500 truncate pr-2">{f.from}</span>
            <Badge status={f.status} />
            <span className="text-xs font-semibold text-slate-700">{f.gate}</span>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="px-3 py-2 border-t border-slate-100">
        <button className="text-[11px] text-[#1a1f5e] font-medium hover:underline cursor-pointer">
          {isArr ? "View All Arrivals →" : "View All Departures →"}
        </button>
      </div>

      {/* Disclaimer */}
      <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] text-slate-400 flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border border-slate-400 inline-flex items-center justify-center text-[8px]">i</span>
          All flight information is provided in real-time and subject to change.
        </span>
        <span className="text-[10px] text-slate-400">Data provided by Roaming Bangladesh</span>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────── */
const GrowBussiness = () => {
  return (
    <section className="mt-5 max-w-350 mx-auto w-full font-sans select-none">
      {/* ── Top heading row ── */}
      <div className="flex items-center gap-3 mb-4">
        <TbPlaneDeparture className="text-[#1a1f5e] w-6 h-6" />
        <h2 className="text-[#1a1f5e] font-bold text-lg tracking-tight">Live Airport Information</h2>
      </div>

      {/* ── Search bar ── */}
      <div className="flex gap-3 mb-5">
        <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2 bg-white shadow-sm">
          <MdSearch className="text-slate-400 w-4 h-4 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search Airport / City / IATA Code"
            className="flex-1 text-sm text-slate-600 outline-none bg-transparent placeholder:text-slate-400"
          />
        </div>
        <button className="bg-[#1a1f5e] text-white text-sm font-medium px-6 py-2 rounded-md hover:opacity-90 active:scale-95 transition-all cursor-pointer">
          Search
        </button>
      </div>

      {/* ── Tables + Sidebar ── */}
      <div className="flex gap-4 items-start">
        {/* Arrivals */}
        <FlightTable flights={arrivals} type="arrivals" />

        {/* Departures */}
        <FlightTable flights={departures} type="departures" />

        {/* Airport Info Sidebar */}
        <div className="w-44 flex-shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col gap-3">
          {/* Airport name */}
          <div className="flex items-start gap-2">
            <TbPlaneDeparture className="text-[#1a1f5e] w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Airport Information</p>
              <p className="text-[12px] font-bold text-[#1a1f5e] leading-tight">Hazrat Shahjalal International Airport</p>
              <p className="text-xl font-black text-[#1a1f5e] leading-none mt-1">DAC</p>
              <p className="text-[10px] text-slate-500">Dhaka, Bangladesh</p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Arrivals today */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <MdFlightLand className="text-emerald-600 w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Arrivals Today</p>
              <p className="text-lg font-black text-[#1a1f5e]">127</p>
            </div>
          </div>

          {/* Departures today */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <MdFlightTakeoff className="text-violet-600 w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Departures Today</p>
              <p className="text-lg font-black text-[#1a1f5e]">119</p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Last updated */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400">Last Updated</p>
              <p className="text-[11px] font-semibold text-slate-600">10:35 AM (BST)</p>
            </div>
            <button className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer" title="Refresh">
              <MdRefresh className="text-slate-500 w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowBussiness;
