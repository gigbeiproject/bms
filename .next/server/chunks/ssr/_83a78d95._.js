module.exports = {

"[project]/src/app/product/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
"use client";
;
;
;
// Product Data
const allProducts = [
    {
        id: 1,
        name: "ARADHYA PLUS Paddy-10kg",
        category: "Insecticides",
        price: 450,
        image: '/ARADHYA PLUS Paddy-10kg.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 2,
        name: "KANCHANA PLUS Paddy-10kg",
        category: "Insecticides",
        price: 450,
        image: '/KANCHANA PLUS Paddy-10kg.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 3,
        name: "LEELA GOLD Paddy-10kg",
        category: "Insecticides",
        price: 450,
        image: '/LEELA GOLD Paddy-10kg.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 4,
        name: "MCS Arya Gold",
        category: "Insecticides",
        price: 450,
        image: '/MCS Arya Gold.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 5,
        name: "MCS Jwala Gold",
        category: "Insecticides",
        price: 450,
        image: '/MCS Jwala Gold.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 6,
        name: "MCS 4266 Gold",
        category: "Insecticides",
        price: 450,
        image: '/MCS MCS 4266 Gold.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 7,
        name: "Morvi Crop Science",
        category: "Insecticides",
        price: 450,
        image: '/Morvi Crop Science Logo.png',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 8,
        name: "Morvi Ganga - 25 Kgs",
        category: "Insecticides",
        price: 450,
        image: '/Morvi Ganga - 25 Kgs.jpg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 9,
        name: "Product 9",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.05 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 10,
        name: "Product 10",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.06 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 11,
        name: "Product 11",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.07 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 12,
        name: "Product 12",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.07 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 13,
        name: "Product 13",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.08 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 14,
        name: "Product 14",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.08 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 15,
        name: "Product 15",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.09 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 16,
        name: "Product 16",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.09 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 17,
        name: "Product 17",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.10 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 18,
        name: "Product 18",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.11 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 19,
        name: "Product 19",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.11 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 20,
        name: "Product 20",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.12 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 21,
        name: "Product 21",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.12 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 22,
        name: "Product 22",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.13 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 23,
        name: "Product 23",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.14 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 24,
        name: "Product 24",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.14 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 25,
        name: "Product 25",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.15 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 26,
        name: "Product 26",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.15 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 27,
        name: "Product 27",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.16 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 28,
        name: "Product 28",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.16 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 29,
        name: "Product 29",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.17 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 30,
        name: "Product 30",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.18 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 31,
        name: "Product 31",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.18 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 32,
        name: "Product 32",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.28.19 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 33,
        name: "Product 33",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.31.33 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 34,
        name: "Product 34",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.31.33 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 35,
        name: "Product 35",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.31.34 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 36,
        name: "Product 36",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.31.34 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 37,
        name: "Product 37",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.04 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 38,
        name: "Product 38",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.04 PM (2).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 39,
        name: "Product 39",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.04 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 40,
        name: "Product 40",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.05 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 41,
        name: "Product 41",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.05 PM (2).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 42,
        name: "Product 42",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.05 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 43,
        name: "Product 43",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.06 PM (1).jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 44,
        name: "Product 44",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.06 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    },
    {
        id: 45,
        name: "Product 45",
        category: "Insecticides",
        price: 450,
        image: '/WhatsApp Image 2025-12-22 at 5.41.07 PM.jpeg',
        description: "Broad-spectrum protection against chewing and sucking pests."
    }
];
const ProductsPage = ()=>{
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const productsPerPage = 6;
    // Filter products based on search
    const filteredProducts = allProducts.filter((product)=>product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    // Reset to page 1 when search changes
    const handleSearch = (e)=>{
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };
    const goToPage = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 min-h-screen font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-800 py-12 md:py-20 text-center text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-10 -translate-y-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 86,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-48 h-48 bg-yellow-500 opacity-10 rounded-full translate-x-10 translate-y-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 87,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-4 relative z-10",
                        children: "Our Products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 89,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-100 max-w-xl mx-auto text-lg relative z-10",
                        children: "Explore our range of high-quality agricultural solutions designed to maximize your yield."
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 92,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/product/page.js",
                lineNumber: 85,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search products...",
                                    value: searchQuery,
                                    onChange: handleSearch,
                                    className: "w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all shadow-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/product/page.js",
                                    lineNumber: 101,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-4 top-4 text-gray-400",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/product/page.js",
                                    lineNumber: 108,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/product/page.js",
                            lineNumber: 100,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 99,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 text-gray-600 text-sm flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing ",
                                    indexOfFirstProduct + 1,
                                    "-",
                                    Math.min(indexOfLastProduct, filteredProducts.length),
                                    " of ",
                                    filteredProducts.length,
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 114,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 117,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 113,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: currentProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-56 bg-gray-100 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: product.image,
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/page.js",
                                                        lineNumber: 133,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow-sm",
                                                        children: product.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/page.js",
                                                        lineNumber: 138,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/page.js",
                                                lineNumber: 132,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 flex flex-col flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/page.js",
                                                        lineNumber: 145,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm mb-4 line-clamp-2 flex-grow",
                                                        children: product.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/page.js",
                                                        lineNumber: 148,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            [
                                                                1,
                                                                2,
                                                                3,
                                                                4,
                                                                5
                                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    size: 14,
                                                                    className: "text-yellow-400 fill-yellow-400"
                                                                }, star, false, {
                                                                    fileName: "[project]/src/app/product/page.js",
                                                                    lineNumber: 155,
                                                                    columnNumber: 13
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-400 ml-1",
                                                                children: "(45 reviews)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/page.js",
                                                                lineNumber: 161,
                                                                columnNumber: 12
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/page.js",
                                                        lineNumber: 153,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/page.js",
                                                lineNumber: 144,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/src/app/product/page.js",
                                        lineNumber: 127,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 125,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            currentPage < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>goToPage(currentPage + 1),
                                    className: "px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2",
                                    children: [
                                        "Next",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/page.js",
                                            lineNumber: 176,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/page.js",
                                    lineNumber: 171,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 170,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-center text-sm text-gray-500",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 182,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-12 text-center rounded-xl border border-dashed border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "text-gray-400",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/app/product/page.js",
                                    lineNumber: 190,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 189,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-800",
                                children: "No products found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 192,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Try adjusting your search."
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 193,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchQuery(""),
                                className: "mt-4 text-green-700 font-semibold hover:underline",
                                children: "Clear search"
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/page.js",
                                lineNumber: 194,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/product/page.js",
                        lineNumber: 188,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/product/page.js",
                lineNumber: 97,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/product/page.js",
        lineNumber: 83,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductsPage;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Star
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Star": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),

};

//# sourceMappingURL=_83a78d95._.js.map