import Image from "next/image";

export default function DrinksPage() {
  return (
    <main
      style={{
        background: "#050505",
        color: "#f4efe6",
        minHeight: "100vh",
      }}
    >
      {/* INTRO */}
      <section
        style={{
          textAlign: "center",
          padding: "110px 24px 70px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#b9a16b",
            marginBottom: "18px",
          }}
        >
          House of Havana
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 82px)",
            fontWeight: "400",
            lineHeight: "0.95",
            margin: "0",
          }}
        >
          THE BAR
        </h1>

        <p
          style={{
            color: "#9d9a94",
            marginTop: "24px",
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          Grooming. Conversation. A proper drink.
        </p>
      </section>

      {/* OLD FASHIONED */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 120px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "min(62vh, 680px)",
minHeight: "440px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/drinks/old-fashioned.png"
            alt="House of Havana Old Fashioned cocktail"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div
          style={{
            paddingTop: "36px",
            borderTop: "1px solid #2a2926",
            marginTop: "36px",
          }}
        >
          <p
            style={{
              color: "#b9a16b",
              letterSpacing: "3px",
              fontSize: "10px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            House Classic
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 6vw, 60px)",
                fontWeight: "400",
                margin: "0",
              }}
            >
              Old Fashioned
            </h2>

            <span
              style={{
                color: "#b9a16b",
                fontSize: "22px",
              }}
            >
              $14
            </span>
          </div>

          <p
            style={{
              color: "#aaa69e",
              marginTop: "18px",
              fontSize: "14px",
              lineHeight: "1.8",
            }}
          >
            Buffalo Trace · Bitters · Sugar
          </p>

          <p
            style={{
              color: "#6f6c66",
              marginTop: "8px",
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            Bold. Smooth. Timeless.
          </p>
        </div>
      </section>
    </main>
  );
}
