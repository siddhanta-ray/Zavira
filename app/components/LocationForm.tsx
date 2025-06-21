"use client";

import { useState } from "react";

export default function LocationForm() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="City"
        className="p-2 rounded border"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        className="p-2 rounded border"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        className="p-2 rounded border"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="date"
        className="p-2 rounded border"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </form>
  );
}
