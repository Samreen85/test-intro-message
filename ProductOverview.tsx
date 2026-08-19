import React from "react";

const features = [
  {
    title: "AI-powered workflows",
    description:
      "Automate repetitive design tasks and move from idea to polished UI faster.",
  },
  {
    title: "Reusable components",
    description:
      "Build consistent interfaces with reusable components and flexible layouts.",
  },
  {
    title: "Team collaboration",
    description:
      "Share designs, review changes, and keep your team aligned in one place.",
  },
];

export default function ProductOverview() {
  return (
    <main
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        color: "#111827",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#6366f1",
            margin: "0 0 16px",
          }}
        >
          PRODUCT PLATFORM
        </p>

        <h1
          style={{
            maxWidth: 760,
            margin: "0 auto 20px",
            fontSize: "clamp(40px, 6vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            fontWeight: 700,
          }}
        >
          Build better products, faster.
        </h1>

        <p
          style={{
            maxWidth: 650,
            margin: "0 auto 32px",
            fontSize: 18,
            lineHeight: 1.6,
            color: "#6b7280",
          }}
        >
          A modern workspace for creating, refining, and collaborating on
          beautiful digital experiences from a single place.
        </p>

        <button
          style={{
            border: 0,
            borderRadius: 10,
            padding: "14px 24px",
            minHeight: 48,
            background: "#111827",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Start designing
        </button>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 72px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {features.map((feature) => (
          <article
            key={feature.title}
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              background: "#fff",
              boxShadow: "0 4px 14px rgba(17, 24, 39, 0.04)",
            }}
          >
            <h2
              style={{
                fontSize: 19,
                lineHeight: 1.35,
                margin: "0 0 10px",
                fontWeight: 650,
              }}
            >
              {feature.title}
            </h2>

            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.6,
                margin: 0,
                fontSize: 15,
              }}
            >
              {feature.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
