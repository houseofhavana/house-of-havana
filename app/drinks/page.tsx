import Image from "next/image";

const cocktails = [
  {
    name: "Old Fashioned",
    price: "$14",
    image: "/drinks/old-fashioned.png",
    category: "House Classic",
    ingredients: "Buffalo Trace · Bitters · Sugar",
    note: "Bold. Smooth. Timeless.",
  },
  {
    name: "Coconut Margarita",
    price: "$12",
    image: "/drinks/coconut-margarita.png",
    category: "House Favourite",
    ingredients: "1800 Coconut Tequila · Blue Curaçao · Margarita Mix",
    note: "Tropical. Bright. Smooth.",
  },
  {
    name: "Caribbean Sunset",
    price: "$12",
    image: "/drinks/caribbean-sunset.png",
    category: "Tropical Signature",
    ingredients: "Mango Vodka · Fresh Lime · Cranberry",
    note: "Bright. Tropical. Refreshing.",
  },
  {
    name: "Cuban Mule",
    price: "$12",
    image: "/drinks/cuban-mule.png",
    category: "House Signature",
    ingredients: "Green Apple Vodka · Fresh Lime · Ginger Beer",
    note: "Crisp. Zesty. Refreshing.",
  },
  {
    name: "Cuba Libre",
    price: "$10",
    image: "/drinks/cuba-libre.png",
    category: "Cuban Classic",
    ingredients: "Bacardi White · Fresh Lime · Coca-Cola",
    note: "Classic. Crisp. Cuban.",
  },
];

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
          padding: "90px 24px 60px",
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

      {/* COCKTAILS */}
      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "20px 24px 100px",
        }}
      >
        {cocktails.map((cocktail, index) => (
          <article
            key={cocktail.name}
            style={{
              marginBottom:
                index === cocktails.length - 1 ? "0" : "100px",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(360px, 48vw, 500px)",
                overflow: "hidden",
              }}
            >
              <Image
                src={cocktail.image}
                alt={`House of Havana ${cocktail.name} cocktail`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1050px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>

            {/* COCKTAIL INFORMATION */}
            <div
              style={{
                paddingTop: "32px",
                borderTop: "1px solid #2a2926",
                marginTop: "32px",
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
                {cocktail.category}
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
                    fontSize: "clamp(32px, 6vw, 56px)",
                    fontWeight: "400",
                    margin: "0",
                  }}
                >
                  {cocktail.name}
                </h2>

                <span
                  style={{
                    color: "#b9a16b",
                    fontSize: "22px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cocktail.price}
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
                {cocktail.ingredients}
              </p>

              <p
                style={{
                  color: "#6f6c66",
                  marginTop: "8px",
                  fontSize: "13px",
                  fontStyle: "italic",
                }}
              >
                {cocktail.note}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
