// utils/demoPackages.js
import { transport } from "./Data";
import { accommodation } from "./Data";

export const demoPackages = [
  {
    id: 1,
    name: "Basic Package",
    description: "Includes a private car and Comfort PG accommodation.",
    price: 500 + 500,
    transportation: transport.find((t) => t.mode === "Car"),
    accommodation: accommodation.find((a) => a.type === "PG"),
  },
  {
    id: 2,
    name: "Standard Package",
    description: "Includes public bus and Sunny Homestay accommodation.",
    price: 20 + 3000,
    transportation: transport.find((t) => t.mode === "Bus"),
    accommodation: accommodation.find((a) => a.type === "Homestay"),
  },
  {
    id: 3,
    name: "Premium Package",
    description: "Includes a flight and Luxury Inn accommodation.",
    price: 300 + 1000,
    transportation: transport.find((t) => t.mode === "Flight"),
    accommodation: accommodation.find((a) => a.type === "Hotel Room"),
  },
];
