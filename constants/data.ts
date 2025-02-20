import { Product, Service, Stats, Value } from "@/lib/definitions";

export const stats: Stats[] = [
    { value: "100+", label: "Clients Served" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];
  
  export const products: Product[] = [
    {
      category: "IT Products",
      items: ["High-performance laptops", "Desktop computers", "Networking equipment", "Licensed software"],
      description: "Premium IT equipment and solutions for modern businesses"
    },
    {
      category: "Cereals",
      items: ["Maize", "Rice", "Beans", "Lentils", "Green grams"],
      description: "High-quality cereals sourced from local farmers"
    },
    {
      category: "Construction",
      items: ["Bricks", "Cement", "Sand", "Timber"],
      description: "Quality construction materials from reputable suppliers"
    },
    {
      category: "Stationery",
      items: ["Paper", "Writing materials", "Office supplies", "Filing systems"],
      description: "Complete range of office and school stationery"
    }
  ];


    export const services: Service[] = [
      {
        title: "IT Solutions",
        items: ["Custom Websites", "E-Commerce Platforms", "Cloud Solutions", "Cybersecurity"],
        icon: "computer",
      },
      {
        title: "Data Science",
        items: ["Data Analysis", "Predictive Analytics", "Data Visualization", "AI and Machine Learning"],
        icon: "database",
      },
      {
        title: "Supply Chain",
        items: ["Cereals Supply", "Construction Materials", "Stationery", "IT Products"],
        icon: "truck",
      }
    ];

      export const values: Value[] = [
        {
          title: "Customer Focus",
          description: "Prioritizing our clients' success and satisfaction",
          icon: "users"
        },
        {
          title: "Innovation",
          description: "Staying ahead through creative and forward-thinking solutions",
          icon: "lightbulb"
        },
        {
          title: "Integrity",
          description: "Conducting business with honesty and transparency",
          icon: "shield"
        },
        {
          title: "Excellence",
          description: "Striving for the highest standards in all we do",
          icon: "star"
        }
      ];