export type ServiceCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    duration?: string;
    price?: string;
  }[];
};

export const groomingServices: ServiceCategory[] = [
  {
    title: "Essential Services",
    description: "Our core grooming services, delivered with precision and care.",
    items: [
      { name: "Haircut", duration: "40 min", price: "$46" },
      { name: "Haircut and Beard", duration: "1 hour", price: "$68" },
      { name: "Hot Shave", duration: "30 min", price: "$42" }
    ]
  },
  {
    title: "Premium Treatments",
    description: "Transformative services for those seeking something special.",
    items: [
      { name: "Partial Perm with Haircut", duration: "2 hours", price: "$160" },
      { name: "Full Perm with Haircut", duration: "2.5 hours", price: "$190" }
    ]
  }
]; 