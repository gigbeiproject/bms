module.exports = {

"[project]/src/app/products/[id]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "allProducts": ()=>allProducts,
    "default": ()=>ProductDetailsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [app-ssr] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
"use client";
;
;
;
;
;
const allProducts = [
    {
        id: 1,
        name: "Aradhya Plus (Paddy)",
        category: "Seeds",
        price: 450,
        image: "/wp11pro.png",
        description: "Improved paddy seeds premium quality",
        longDescription: "Aradhya Plus is a premium paddy seed variety developed for high yield, uniform growth, and disease resistance. It adapts well to different soil conditions and ensures consistent productivity for farmers.",
        stock: true,
        features: [
            "High yield variety",
            "Disease resistant",
            "Premium quality seeds"
        ]
    },
    {
        id: 2,
        name: "Kanchana Plus (Paddy)",
        category: "Seeds",
        price: 450,
        image: "/KANCHANApro.png",
        description: "Improved paddy seeds premium quality",
        longDescription: "Kanchana Plus offers excellent grain quality with high germination rates. Suitable for farmers seeking reliable output and better harvest quality.",
        stock: true,
        features: [
            "Uniform grain",
            "High germination",
            "Better yield"
        ]
    },
    {
        id: 3,
        name: "Leela Gold (Paddy)",
        category: "Seeds",
        price: 450,
        image: "/LEELApro.png",
        description: "Improved paddy seeds premium quality",
        longDescription: "Leela Gold is an early-maturing paddy seed variety known for its strong plant structure and premium grain quality.",
        stock: true,
        features: [
            "Early maturity",
            "Strong crop",
            "Premium quality"
        ]
    },
    {
        id: 4,
        name: "MCS Arya Gold",
        category: "Seeds",
        price: 450,
        image: "/MCSpro.png",
        description: "Hybrid paddy seeds",
        longDescription: "MCS Arya Gold hybrid seeds ensure high productivity with strong disease tolerance and adaptability across regions.",
        stock: true,
        features: [
            "Hybrid variety",
            "High yield",
            "Disease tolerant"
        ]
    },
    {
        id: 5,
        name: "MCS Jwala Gold",
        category: "Seeds",
        price: 450,
        image: "/MCS-Jwalapro.png",
        description: "Hybrid paddy seeds",
        longDescription: "MCS Jwala Gold performs exceptionally well in high-temperature areas and delivers consistent grain output.",
        stock: true,
        features: [
            "Heat tolerant",
            "High productivity"
        ]
    },
    {
        id: 6,
        name: "MCS 4266 Gold",
        category: "Seeds",
        price: 450,
        image: "/ggg.png",
        description: "Hybrid paddy seeds",
        longDescription: "MCS 4266 Gold offers strong plants with better grain size and excellent crop stand.",
        stock: true,
        features: [
            "Strong plant",
            "Better grain size"
        ]
    },
    {
        id: 8,
        name: "Morvi Ganga (25kg)",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-12 at 3.23.57 PM.jpeg",
        description: "Hybrid paddy seeds",
        longDescription: "Morvi Ganga bulk pack is ideal for large-scale farming, offering high yield and uniform crop growth.",
        stock: true,
        features: [
            "Bulk pack",
            "High yield"
        ]
    },
    {
        id: 9,
        name: "Priya Gold",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp1.jpeg",
        description: "Hybrid maize seeds",
        longDescription: "Priya Gold maize seeds ensure high germination, uniform growth, and excellent cob development.",
        stock: true,
        features: [
            "High germination",
            "Uniform growth"
        ]
    },
    {
        id: 10,
        name: "Tez Pro (Bifenthrin 10% EC)",
        category: "Insecticides",
        price: 450,
        image: "/wp4.jpeg",
        description: "Broad spectrum insecticide",
        longDescription: "Tez Pro is a fast-acting insecticide that provides long residual protection against major pests.",
        stock: true,
        features: [
            "Fast knockdown",
            "Long residual action"
        ]
    },
    {
        id: 11,
        name: "Mukit 500g",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp2.jpeg",
        description: "Pymetrozine 50% WG",
        longDescription: "Mukit effectively controls sucking pests like aphids and jassids while being crop safe.",
        stock: true,
        features: [
            "Effective against sucking pests"
        ]
    },
    {
        id: 12,
        name: "Molent",
        category: "Insecticides",
        price: 450,
        image: "/wp5.jpeg",
        description: "Ethion 40% + Cypermethrin 5% EC",
        longDescription: "Molent provides dual-action control of chewing and sucking pests with long-lasting effectiveness.",
        stock: true,
        features: [
            "Dual action formula"
        ]
    },
    {
        id: 13,
        name: "Profex Super",
        category: "Insecticides",
        price: 450,
        image: "/wp6.jpeg",
        description: "Broad spectrum insecticide",
        longDescription: "Profex Super offers powerful pest control with quick knockdown and extended residual protection.",
        stock: true,
        features: [
            "Broad spectrum control",
            "Fast knockdown"
        ]
    },
    {
        id: 14,
        name: "Sool",
        category: "Insecticides",
        price: 450,
        image: "/wp12.jpeg",
        description: "Fenobucarb (BPMC) 50% EC",
        longDescription: "Sool is highly effective against hoppers and sucking pests in paddy crops.",
        stock: true,
        features: [
            "Effective against hoppers"
        ]
    },
    {
        id: 15,
        name: "Thaat+",
        category: "Insecticides",
        price: 450,
        image: "/wp13.jpeg",
        description: "Cartap Hydrochloride 50% SP",
        longDescription: "Thaat+ is a systemic insecticide that controls stem borers and leaf folders effectively.",
        stock: true,
        features: [
            "Systemic insecticide"
        ]
    },
    {
        id: 16,
        name: "Sangini",
        category: "Herbicides",
        price: 450,
        image: "/w1.jpeg",
        description: "Pyrazosulfuron Ethyl 10% WP",
        longDescription: "Sangini controls a wide range of weeds in paddy fields and ensures clean crop growth.",
        stock: true,
        features: [
            "Weed control in paddy"
        ]
    },
    {
        id: 17,
        name: "Morvi Gold",
        category: "Herbicides",
        price: 450,
        image: "/wp14.jpeg",
        description: "Bispyribac Sodium 10% SC",
        longDescription: "Morvi Gold is a selective post-emergence herbicide used in paddy to control grassy and broadleaf weeds.",
        stock: true,
        features: [
            "Selective weed control",
            "Used in paddy"
        ]
    },
    {
        id: 19,
        name: "Metri Plus",
        category: "Herbicides",
        price: 450,
        image: "/w2.jpeg",
        description: "Metribuzin 70% WP",
        longDescription: "Metri Plus controls broadleaf weeds effectively in various crops.",
        stock: true,
        features: [
            "Broad leaf weed control"
        ]
    },
    {
        id: 23,
        name: "Glypho Plus",
        category: "Herbicides",
        price: 450,
        image: "/w6.jpeg",
        description: "Glyphosate 41% SL",
        longDescription: "Glypho Plus is a non-selective herbicide used for total weed control.",
        stock: true,
        features: [
            "Non selective herbicide"
        ]
    },
    {
        id: 18,
        name: "Rudraa Fungicide",
        category: "Fungicides",
        price: 450,
        image: "/wp15.jpeg",
        description: "Tebuconazole 10% + Sulphur 65% WG",
        longDescription: "Rudraa provides strong protection against fungal diseases in crops.",
        stock: true,
        features: [
            "Controls fungal diseases"
        ]
    },
    {
        id: 34,
        name: "Provet",
        category: "Adjuvant",
        price: 450,
        image: "/wp16.jpeg",
        description: "Spray adjuvant for pesticides",
        longDescription: "Provet improves pesticide spray coverage, spreading, and absorption.",
        stock: true,
        features: [
            "Better spreading",
            "Improves efficiency"
        ]
    },
    {
        id: 40,
        name: "NPK 00:52:34",
        category: "Fertilizers",
        price: 450,
        image: "/WhatsApp Image 2026-01-12 at 3.19.05 PM.jpeg",
        description: "100% water soluble fertilizer",
        longDescription: "High phosphorus fertilizer ideal for flowering and root development.",
        stock: true,
        features: [
            "Boosts flowering"
        ]
    },
    {
        id: 41,
        name: "NPK 19:19:19",
        category: "Fertilizers",
        price: 450,
        image: "/WhatsApp Image 2026-01-12 at 3.19.18 PM.jpeg",
        description: "Balanced water soluble fertilizer",
        longDescription: "NPK 19:19:19 supports overall crop growth and nutrition.",
        stock: true,
        features: [
            "Overall plant growth"
        ]
    },
    {
        id: 43,
        name: "NPK 12:61:00",
        category: "Fertilizers",
        price: 450,
        image: "/WhatsApp Image 2026-01-12 at 3.19.23 PM.jpeg",
        description: "High phosphorus fertilizer",
        longDescription: "Encourages strong root and flower development.",
        stock: true,
        features: [
            "Root development"
        ]
    },
    {
        id: 44,
        name: "NPK 13:00:45",
        category: "Fertilizers",
        price: 450,
        image: "/13.png",
        description: "Potassium fertilizer",
        longDescription: "Improves crop quality, size, and resistance.",
        stock: true,
        features: [
            "Improves crop quality"
        ]
    },
    {
        id: 45,
        name: "NPK 00:00:50",
        category: "Fertilizers",
        price: 450,
        image: "/WhatsApp Image 2026-01-12 at 3.19.11 PM.jpeg",
        description: "High potassium fertilizer",
        longDescription: "Enhances crop strength and yield potential.",
        stock: true,
        features: [
            "Improves yield & strength"
        ]
    },
    {
        id: 50,
        name: "Eaktra",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.39 AM.jpeg",
        description: "Thiamethoxam 25% WG",
        longDescription: "Eaktra is a systemic insecticide with Thiamethoxam 25% WG. It effectively controls sucking pests like aphids, jassids, thrips, and whiteflies. The product is rapidly absorbed by plants and provides long-lasting protection, ensuring healthy crop growth and improved yield.",
        stock: true,
        features: [
            "Systemic insecticide",
            "Controls sucking pests",
            "Quick absorption",
            "Long-lasting protection",
            "Improves crop yield"
        ]
    },
    {
        id: 51,
        name: "Leodis",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.38 AM (2).jpeg",
        description: "Activator",
        longDescription: "Leodis Activator enhances plant metabolism and nutrient absorption. It supports early growth, root development, and improves overall plant vigor. Suitable for all crops and application methods.",
        stock: true,
        features: [
            "Growth activator",
            "Enhances nutrient uptake",
            "Improves root development",
            "Boosts plant health"
        ]
    },
    {
        id: 52,
        name: "Gilli King",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.38 AM (1).jpeg",
        description: "Fipronil 2.92% w/w EC",
        longDescription: "Gilli King is a broad-spectrum insecticide containing Fipronil 2.92% EC. It provides effective control against termites, stem borers, and soil insects with both contact and ingestion action.",
        stock: true,
        features: [
            "Broad-spectrum control",
            "Effective on termites",
            "Long residual action",
            "Fast knockdown effect"
        ]
    },
    {
        id: 53,
        name: "Chamtkar",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.38 AM.jpeg",
        description: "Gold Plus",
        longDescription: "Chamtkar Gold Plus improves crop growth, flowering, and fruiting. It enhances nutrient efficiency and strengthens plant immunity for higher yield.",
        stock: true,
        features: [
            "Improves flowering",
            "Enhances crop vigor",
            "Boosts yield"
        ]
    },
    {
        id: 54,
        name: "Sai Super",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.37 AM (2).jpeg",
        description: "Profenofos 40% + Cypermethrin 4% EC",
        longDescription: "Sai Super is a powerful combination insecticide that controls chewing and sucking pests. It offers quick knockdown and long-lasting crop protection.",
        stock: true,
        features: [
            "Combination insecticide",
            "Quick knockdown",
            "Broad pest control"
        ]
    },
    {
        id: 55,
        name: "Leodis",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.37 AM (1).jpeg",
        description: "Tembotrione 34.4% w/w SC",
        longDescription: "Leodis is a selective post-emergence herbicide for maize crops. It controls broadleaf and grassy weeds effectively.",
        stock: true,
        features: [
            "Selective herbicide",
            "Controls broadleaf weeds",
            "Post-emergence application"
        ]
    },
    {
        id: 56,
        name: "Glyfo flus",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.37 AM.jpeg",
        description: "Glyphosate 41% SL",
        longDescription: "Glyfo Flus is a non-selective systemic herbicide used for complete weed control in non-crop areas and orchards.",
        stock: true,
        features: [
            "Non-selective herbicide",
            "Systemic action",
            "Controls all weeds"
        ]
    },
    {
        id: 57,
        name: "Black Magik",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.36 AM (2).jpeg",
        description: "Humic + Amino + Seaweed + Fulvic",
        longDescription: "Black Magik is an advanced bio-stimulant that improves soil health, root growth, and nutrient availability.",
        stock: true,
        features: [
            "Improves soil fertility",
            "Enhances root growth",
            "Boosts nutrient uptake"
        ]
    },
    {
        id: 58,
        name: "Gro-Moxs",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.36 AM (1).jpeg",
        description: "Paraquat Dichloride 24% SL",
        longDescription: "Gro-Moxs is a fast-acting contact herbicide used for weed control in plantations and non-crop areas.",
        stock: true,
        features: [
            "Quick weed control",
            "Contact herbicide",
            "Fast visible results"
        ]
    },
    {
        id: 59,
        name: "Magik-Hit",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.36 AM.jpeg",
        description: "German Based Advanced Bio-technology",
        longDescription: "Magik-Hit improves crop resistance, stress tolerance, and nutrient absorption using advanced bio-technology.",
        stock: true,
        features: [
            "Stress resistance",
            "Advanced bio-technology",
            "Improves plant immunity"
        ]
    },
    /* --- IDs 60 to 80 CONTINUED --- */ {
        id: 60,
        name: "Gold-505",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.35 AM (2).jpeg",
        description: "Chlorpyrifos 50% + Cypermethrin 5% EC",
        longDescription: "Gold-505 is a dual-action insecticide effective against soil and foliar pests with long residual control.",
        stock: true,
        features: [
            "Dual action",
            "Soil & foliar pest control",
            "Long residual effect"
        ]
    },
    {
        id: 61,
        name: "Cora Done",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.35 AM (1).jpeg",
        description: "Chlorantraniliprole 18.5% SC",
        longDescription: "Cora Done provides excellent control of caterpillars and borers with long-lasting residual activity.",
        stock: true,
        features: [
            "Effective on borers",
            "Long residual control",
            "Low dosage"
        ]
    },
    {
        id: 62,
        name: "Shiva-20",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.35 AM.jpeg",
        description: "Acetamiprid 20% SP",
        longDescription: "Shiva-20 controls sucking pests effectively and ensures healthy crop development.",
        stock: true,
        features: [
            "Systemic action",
            "Controls sucking pests",
            "Fast results"
        ]
    },
    {
        id: 63,
        name: "Sai-95",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.34 AM (2).jpeg",
        description: "Potassium Humate Flakes 95%",
        longDescription: "Sai-95 improves soil structure and nutrient availability, enhancing overall crop growth.",
        stock: true,
        features: [
            "Soil conditioner",
            "Improves nutrient uptake",
            "Boosts yield"
        ]
    },
    {
        id: 64,
        name: "Safe Combi",
        category: "Fungicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.34 AM (1).jpeg",
        description: "Carbendazim 12% + Mancozeb 63% WP",
        longDescription: "Safe Combi offers broad-spectrum protection against fungal diseases with preventive and curative action.",
        stock: true,
        features: [
            "Broad-spectrum fungicide",
            "Preventive & curative",
            "Disease control"
        ]
    },
    {
        id: 65,
        name: "Sai-M-45",
        category: "Fungicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.34 AM.jpeg",
        description: "Mancozeb 75% WP",
        longDescription: "Sai-M-45 is a contact fungicide used for controlling various fungal diseases in crops.",
        stock: true,
        features: [
            "Contact fungicide",
            "Wide disease control",
            "Protective action"
        ]
    },
    {
        id: 66,
        name: "Proclone",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.33 AM (1).jpeg",
        description: "Emamectin Benzoate 5% SG",
        longDescription: "Proclone effectively controls lepidopteran pests with stomach and contact action.",
        stock: true,
        features: [
            "Controls caterpillars",
            "Low dosage",
            "High efficacy"
        ]
    },
    {
        id: 67,
        name: "Leodis",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.33 AM.jpeg",
        description: "Tembotrione 34.4% w/w SC",
        longDescription: "Leodis provides post-emergence weed control in maize crops with selective action.",
        stock: true,
        features: [
            "Selective herbicide",
            "Post-emergence",
            "Effective weed control"
        ]
    },
    {
        id: 68,
        name: "Damini Gold",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.32 AM (2).jpeg",
        description: "Bispyribac Sodium 10% SC",
        longDescription: "Damini Gold is used in paddy fields for effective control of grassy and broadleaf weeds.",
        stock: true,
        features: [
            "Paddy weed control",
            "Selective action",
            "High efficiency"
        ]
    },
    {
        id: 69,
        name: "Tej Pro",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.32 AM (1).jpeg",
        description: "Bifenthrin 10% EC",
        longDescription: "Tej Pro is a contact insecticide used for effective pest control in various crops.",
        stock: true,
        features: [
            "Contact insecticide",
            "Quick knockdown",
            "Wide pest control"
        ]
    },
    {
        id: 70,
        name: "Sai-Care",
        category: "Fungicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.32 AM.jpeg",
        description: "Azoxystrobin + Tebuconazole",
        longDescription: "Sai-Care provides preventive and curative control of major fungal diseases.",
        stock: true,
        features: [
            "Dual fungicide",
            "Preventive & curative",
            "Long protection"
        ]
    },
    {
        id: 71,
        name: "सुरक्षा कवच",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.31 AM (2).jpeg",
        description: "Chlorantraniliprole + Lambda-cyhalothrin",
        longDescription: "सुरक्षा कवच provides powerful control against caterpillars and borers with dual action.",
        stock: true,
        features: [
            "Dual action",
            "Strong larval control",
            "Long residual effect"
        ]
    },
    {
        id: 72,
        name: "Sai-44",
        category: "Herbicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.31 AM (1).jpeg",
        description: "2,4-D Amine Salt 58% SL",
        longDescription: "Sai-44 controls broadleaf weeds effectively in cereal crops.",
        stock: true,
        features: [
            "Broadleaf weed control",
            "Systemic herbicide",
            "Cost-effective"
        ]
    },
    {
        id: 73,
        name: "Sai-mida",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.31 AM.jpeg",
        description: "Imidacloprid 30.5% SC",
        longDescription: "Sai-mida controls sucking pests and ensures long-lasting crop protection.",
        stock: true,
        features: [
            "Systemic insecticide",
            "Long residual control",
            "Low dosage"
        ]
    },
    {
        id: 74,
        name: "Lamoa Plus",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.30 AM (1).jpeg",
        description: "Lambda Cyhalothrin 4.9% CS",
        longDescription: "Lamoa Plus provides fast knockdown and residual pest control.",
        stock: true,
        features: [
            "Fast knockdown",
            "Contact action",
            "Residual control"
        ]
    },
    {
        id: 75,
        name: "sai-Mites",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.30 AM.jpeg",
        description: "Thrips & Mites Control",
        longDescription: "Sai-Mites effectively controls mites and thrips in various crops.",
        stock: true,
        features: [
            "Mite control",
            "Thrips management",
            "Quick action"
        ]
    },
    {
        id: 76,
        name: "Conbra",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.29 AM.jpeg",
        description: "Emamectin Benzoate 1.9% EC",
        longDescription: "Conbra controls caterpillars and larval pests effectively.",
        stock: true,
        features: [
            "Larval control",
            "Fast action",
            "High efficacy"
        ]
    },
    {
        id: 77,
        name: "sanjivani",
        category: "Seeds",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.48.12 AM.jpeg",
        description: "Soil & Foliar Nutrition",
        longDescription: "Sanjivani improves soil fertility and plant nutrition through multiple application methods.",
        stock: true,
        features: [
            "Soil nutrition",
            "Foliar application",
            "Improves growth"
        ]
    },
    {
        id: 78,
        name: "Morvi",
        category: "Fungicides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.47.55 AM (1).jpeg",
        description: "Bio Fungi",
        longDescription: "Morvi is a bio-fungicide that controls soil and root fungal diseases naturally.",
        stock: true,
        features: [
            "Eco-friendly",
            "Soil disease control",
            "Improves root health"
        ]
    },
    {
        id: 79,
        name: "Shooter",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.47.55 AM.jpeg",
        description: "Thrips & Mites Control",
        longDescription: "Shooter provides fast and effective control of thrips and mites.",
        stock: true,
        features: [
            "Fast action",
            "Mite control",
            "High efficiency"
        ]
    },
    {
        id: 80,
        name: "Hitlar",
        category: "Insecticides",
        price: 450,
        image: "/WhatsApp Image 2026-01-14 at 9.47.54 AM.jpeg",
        description: "Systemic & Contact Larvicide",
        longDescription: "Hitlar is a powerful larvicide with systemic and contact action for pest control.",
        stock: true,
        features: [
            "Larvicide",
            "Systemic & contact action",
            "Long protection"
        ]
    }
];
/* ================================
   CONTACT DETAILS
================================ */ const PHONE_NUMBER = "919876543210";
const WHATSAPP_NUMBER = "919876543210";
// Helper to get random related products
const getRelatedProducts = (currentId, category)=>{
    return allProducts.filter((p)=>p.category === category && p.id !== currentId).slice(0, 4);
};
// Helper to get feature icon
const FeatureIcon = ({ text })=>{
    // Simple logic to choose an icon based on keyword
    const lower = text.toLowerCase();
    if (lower.includes('yield') || lower.includes('growth')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
        className: "text-emerald-500"
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 790,
        columnNumber: 69
    }, ("TURBOPACK compile-time value", void 0));
    if (lower.includes('disease') || lower.includes('insect')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
        className: "text-blue-500"
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 791,
        columnNumber: 71
    }, ("TURBOPACK compile-time value", void 0));
    if (lower.includes('water') || lower.includes('soluble')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
        className: "text-cyan-500"
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 792,
        columnNumber: 70
    }, ("TURBOPACK compile-time value", void 0));
    if (lower.includes('heat') || lower.includes('sun')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
        className: "text-orange-500"
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 793,
        columnNumber: 65
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
        className: "text-green-500"
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 794,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
function ProductDetailsPage({ params }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("description");
    // Mock ID handling (ensure string vs number comparison works)
    const product = allProducts.find((p)=>p.id == params.id);
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-gray-800 mb-4",
                    children: "Product Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/[id]/page.js",
                    lineNumber: 806,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: "text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 hover:underline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/[id]/page.js",
                            lineNumber: 811,
                            columnNumber: 11
                        }, this),
                        " Back to Catalog"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/[id]/page.js",
                    lineNumber: 807,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/[id]/page.js",
            lineNumber: 805,
            columnNumber: 7
        }, this);
    }
    const relatedProducts = getRelatedProducts(product.id, product.category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-50 min-h-screen pb-20 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-2 text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-emerald-600 transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 826,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: "hover:text-emerald-600 transition-colors",
                                children: "Products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 828,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 829,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 831,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 truncate max-w-[150px] md:max-w-none",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 832,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/[id]/page.js",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/products/[id]/page.js",
                    lineNumber: 824,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/[id]/page.js",
                lineNumber: 823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 py-8 md:py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-0 md:gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-8 md:p-12 flex items-center justify-center relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 left-6 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-emerald-100 text-emerald-800 text-xs uppercase tracking-wide font-bold px-3 py-1 rounded-full border border-emerald-200",
                                                children: product.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 849,
                                                columnNumber: 18
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 848,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-[350px] md:h-[500px] transition-transform duration-500 ease-in-out group-hover:scale-105",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.image,
                                                alt: product.name,
                                                fill: true,
                                                className: "object-contain drop-shadow-xl",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 855,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 854,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/products/[id]/page.js",
                                    lineNumber: 846,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 md:p-12 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl md:text-5xl font-bold text-slate-800 mb-2 leading-tight",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 869,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-slate-400 hover:text-emerald-600 transition p-2 bg-slate-50 rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 873,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 872,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 868,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex text-amber-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 18,
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 880,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 18,
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 881,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 18,
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 882,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 18,
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 883,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 18,
                                                            fill: "currentColor",
                                                            className: "text-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 884,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 879,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-500 font-medium",
                                                    children: "4.5 (120+ sold)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 886,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 878,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end gap-3 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md font-bold mb-2 ml-auto md:ml-2",
                                                children: "Best Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 895,
                                                columnNumber: 18
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 890,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 text-lg mb-8 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-slate-50 py-2",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 900,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 mb-8",
                                            children: product.features.slice(0, 2).map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 16,
                                                            className: "text-emerald-500 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 908,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 909,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 907,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 905,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 mb-8 text-sm border-t border-slate-100 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2 text-emerald-700 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 917,
                                                            columnNumber: 19
                                                        }, this),
                                                        " In Stock & Ready to Ship"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 916,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2 text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 920,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Pan-India Delivery"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 919,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 915,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mt-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:+${PHONE_NUMBER}`,
                                                    className: "flex-1 group flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold py-3.5 rounded-xl transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 20,
                                                            className: "group-hover:animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 930,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Call Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 926,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello, I'm interested in ${encodeURIComponent(product.name)}`,
                                                    target: "_blank",
                                                    className: "flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all transform hover:-translate-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 938,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Order via WhatsApp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 933,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 925,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/products/[id]/page.js",
                                    lineNumber: 866,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/[id]/page.js",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/[id]/page.js",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8 mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-8 border-b border-slate-100 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab("description"),
                                                    className: `pb-4 text-lg font-bold relative transition-colors ${activeTab === "description" ? "text-emerald-700" : "text-slate-400 hover:text-slate-600"}`,
                                                    children: [
                                                        "Description",
                                                        activeTab === "description" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded-t-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 961,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 953,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab("features"),
                                                    className: `pb-4 text-lg font-bold relative transition-colors ${activeTab === "features" ? "text-emerald-700" : "text-slate-400 hover:text-slate-600"}`,
                                                    children: [
                                                        "Specifications",
                                                        activeTab === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded-t-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 972,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                    lineNumber: 964,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 952,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-in fade-in duration-300",
                                            children: activeTab === "description" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-slate max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 leading-8 text-lg",
                                                        children: product.longDescription
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 980,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100 text-amber-900 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Note:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                                lineNumber: 984,
                                                                columnNumber: 37
                                                            }, this),
                                                            " Always store seeds/chemicals in a cool, dry place away from direct sunlight for maximum shelf life."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 983,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 979,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-2 gap-4",
                                                children: product.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 bg-white rounded-lg shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureIcon, {
                                                                    text: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/products/[id]/page.js",
                                                                    lineNumber: 992,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                                lineNumber: 991,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-slate-800 text-sm",
                                                                        children: [
                                                                            "Feature ",
                                                                            i + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                                        lineNumber: 995,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-600 text-sm",
                                                                        children: feature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                                        lineNumber: 996,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                                lineNumber: 994,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 990,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 988,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 977,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/products/[id]/page.js",
                                    lineNumber: 951,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-800 mb-6",
                                        children: "Similar Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.js",
                                        lineNumber: 1008,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: relatedProducts.length > 0 ? relatedProducts.map((rel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/products/${rel.id}`,
                                                className: "group bg-white p-3 rounded-xl border border-slate-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-20 h-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: rel.image,
                                                            alt: rel.name,
                                                            fill: true,
                                                            className: "object-contain p-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/[id]/page.js",
                                                            lineNumber: 1014,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 1013,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-slate-800 text-sm group-hover:text-emerald-700 transition-colors line-clamp-1",
                                                                children: rel.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                                lineNumber: 1017,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-400 mt-1",
                                                                children: rel.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                                lineNumber: 1019,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/products/[id]/page.js",
                                                        lineNumber: 1016,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, rel.id, true, {
                                                fileName: "[project]/src/app/products/[id]/page.js",
                                                lineNumber: 1012,
                                                columnNumber: 29
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 italic",
                                            children: "No similar products found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/[id]/page.js",
                                            lineNumber: 1024,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/[id]/page.js",
                                        lineNumber: 1009,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/[id]/page.js",
                                lineNumber: 1007,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/[id]/page.js",
                        lineNumber: 947,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/[id]/page.js",
                lineNumber: 839,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/[id]/page.js",
        lineNumber: 820,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_app_products_%5Bid%5D_page_0a31fb36.js.map