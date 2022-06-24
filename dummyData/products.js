const products = [
  {
    id: 1,
    title: "Penkwin® Inflatable Orthopaedic Ring Cushion",
    variant: {
      multiple: true,
      variantType: "Size",
      variants: [
        {
          variantTitle: "15 inch",
          sku: "",
          price: "",
          Quantity: "",
        },
        {
          variantTitle: "18 inch",
          sku: "",
          price: "",
          Quantity: "",
        },
      ],
    },
    images: [],
    shortDescription: {
      boldTitle: "",
      description: "",
      boldCarePackageText: "In each care package you will receive:",
      packageContents: ["", ""],
    },
    description: { title: "", bullets: [], image: [] },
    faq: [
      {
        "What does it do exactly":
          "The Penkwin® Cushion helps redistribute your body weight over the ischial tuberosities (aka 'sit bones') to prevent pressure on the perineum or pelvic floor.",
        "Who is it for ?":
          "It's perfect for anyone in need of a bit of extra support. It can be especially helpful for those experiencing, Pain from Prolonged Sitting, Bed Sores, Pressure Sores, Decubitus Ulcers, Chronic Pelvic Pain Syndrome (CPPS), Hemorrhoids, Hemorrhoid surgery, Pregnancy, Child Birth, Episiotomy, Rectal Fissures, Rectal Tearing, Rectal Surgery, Perineal Surgery, Prostatitis, Prostatectomy, Prostate Biopsy.",
      },
    ],

    category: ["Medical Cushion", "all"],
    sale: { onSale: false, salePrice: "" },
    featured: false,
    rating: 5,
    reviews: [
      { name: "Darryl", date: "", rating: 5, review: "High quality" },
      { name: "John", date: "", rating: 1, review: "Low quality" },
    ],
  },
];

export default products;
