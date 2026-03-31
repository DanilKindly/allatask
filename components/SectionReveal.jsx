"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionReveal({ className = "", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      {...props}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
