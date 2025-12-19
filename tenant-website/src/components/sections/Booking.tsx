import { useEffect, useState } from "react";

type Slot = {
  start: string;
  end: string;
};

export default function Booking() {
  const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState<number>(1);
  const [slots, setSlots] = useState<Slot[]>([
    { start: "09:00", end: "09:30" },
    { start: "09:30", end: "10:00" },
    { start: "10:00", end: "10:30" },
    { start: "11:00", end: "11:30" },
    { start: "11:30", end: "12:00" },
  ]);

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    if (!date) return;

    fetch(
      `http://localhost:3001/api/hairdressers/1/availability?date=${date}&serviceId=${serviceId}`
    )
      .then((res) => res.json())
      .then((data: Slot[]) => {
        setSlots(data);
        setSelectedSlot(null);
      });
  }, [date, serviceId]);

  const book = () => {
    if (!selectedSlot) return;

    fetch("http://localhost:3001/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hairdresserId: 1,
        serviceId,
        date,
        startTime: selectedSlot,
      }),
    }).then(() => alert("Κλείστηκε ✔️"));
  };

  return (
    <div className="mb-[30px]">
      <h1>Ραντεβού</h1>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Κλείσε ραντεβού
          </h2>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <select
              value={serviceId}
              onChange={(e) => setServiceId(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value={1}>Κούρεμα (30')</option>
              <option value={2}>Βαφή (60')</option>
            </select>
          </div>

          {/* Slots */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-3">
              Διαθέσιμες ώρες
            </h3>

            {slots.length === 0 ? (
              <p className="text-sm text-gray-500">
                Δεν υπάρχουν διαθέσιμα ραντεβού
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.map((s) => {
                  const isSelected = selectedSlot === s.start;

                  return (
                    <button
                      key={s.start}
                      onClick={() => setSelectedSlot(s.start)}
                      className={`
                      rounded-lg border px-3 py-2 text-sm font-medium
                      transition
                      ${
                        isSelected
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-gray-700 hover:bg-indigo-50 hover:border-indigo-400"
                      }
                    `}
                    >
                      {s.start} – {s.end}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Action */}
          <button
            onClick={book}
            disabled={!selectedSlot}
            className={`
            w-full py-3 rounded-xl font-semibold transition
            ${
              selectedSlot
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
          >
            Επιβεβαίωση ραντεβού
          </button>
        </div>
      </div>
    </div>
  );
}
