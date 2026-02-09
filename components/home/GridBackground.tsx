"use client";

import React from "react";

export const GridBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#FAFAF9]"
            style={{
                backgroundImage: `
             linear-gradient(to right, rgba(255, 180, 180, 0.3) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255, 180, 180, 0.3) 1px, transparent 1px)
           `,
                backgroundSize: '100px 100px'
            }}
        >
            {/* Optional: Add a central highlight or subtle gradient overlay if needed for depth */}
            <div className="absolute inset-0 bg-white/30" />
        </div>
    );
};
