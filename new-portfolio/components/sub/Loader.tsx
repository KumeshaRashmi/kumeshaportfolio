"use client";
import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <motion.span
                className="canvas-loader"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    width: 50,
                    height: 50,
                    border: "5px solid #ccc",
                    borderRadius: "50%",
                    borderTop: "5px solid #F1F1F1",
                }}
            ></motion.span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default CanvasLoader;
