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

const whiskies = [
  {
    name: "Johnnie Walker Blue Label",
    oneOz: "$36",
    twoOz: "$68",
  },
  {
    name: "Lagavulin 16 Year",
    oneOz: "$22",
    twoOz: "$38",
  },
  {
    name: "Balvenie DoubleWood 12 Year",
    oneOz: "$18",
    twoOz: "$30",
  },
  {
    name: "Dalmore 12 Year",
    oneOz: "$16",
    twoOz: "$26",
  },
  {
    name: "Glenfiddich 14 Bourbon Barrel Reserve",
    oneOz: "$16",
    twoOz: "$26",
  },
  {
    name: "Macallan 12 Double Cask",
    oneOz: "$14",
    twoOz: "$20",
  },
  {
    name: "Glenlivet 12",
    oneOz: "$12",
    twoOz: "$18",
  },
  {
    name: "Glenfiddich 12",
    oneOz: "$12",
    twoOz: "$18",
  },
  {
    name: "Crown Royal Reserve",
    oneOz: "$10",
    twoOz: "$16",
  },
  {
    name: "Johnnie Walker Black",
    oneOz: "$8",
    twoOz: "$14",
  },
  {
    name: "Jameson Irish Whiskey",
    oneOz: "$8",
    twoOz: "$14",
  },
  {
    name: "Johnnie Walker Red",
    oneOz: "$7",
    twoOz: "$12",
  },
  {
    name: "Forty Creek Barrel Select",
    oneOz: "$7",
    twoOz: "$12",
  },
];

const beers = [
  {
    name: "Stella Artois",
    price: "$7",
  },
  {
    name: "Heineken",
    price: "$7",
  },
  {
    name: "Corona Extra",
    price: "$7",
  },
  {
    name: "Original 16",
    price: "$7",
  },
  {
    name: "Budweiser",
    price: "$6.50",
  },
  {
    name: "Coors Light",
    price: "$6.50",
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
          padding: "20px 24px 120px",
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

      {/* WHISKY & SCOTCH */}
      <section
        style={{
          borderTop: "1px solid #1f1f1d",
          padding: "110px 24px 130px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <p
              style={{
                color: "#b9a16b",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              The House Collection
            </p>

            <h2
              style={{
                fontSize: "clamp(38px, 7vw, 68px)",
                fontWeight: "400",
                lineHeight: "1",
                margin: "0",
              }}
            >
              WHISKY & SCOTCH
            </h2>

            <p
              style={{
                color: "#77736c",
                fontSize: "13px",
                marginTop: "20px",
                letterSpacing: "1px",
              }}
            >
              Select pours from the House collection
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(360px, 48vw, 500px)",
              overflow: "hidden",
              marginBottom: "65px",
            }}
          >
            <Image
              src="/drinks/whisky-scotch.png"
              alt="House of Havana Whisky and Scotch collection"
              fill
              sizes="(max-width: 768px) 100vw, 1050px"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 70px 70px",
              gap: "20px",
              paddingBottom: "14px",
              borderBottom: "1px solid #3a3833",
            }}
          >
            <span
              style={{
                color: "#77736c",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Selection
            </span>

            <span
              style={{
                color: "#b9a16b",
                fontSize: "10px",
                letterSpacing: "1px",
                textAlign: "right",
              }}
            >
              1 OZ
            </span>

            <span
              style={{
                color: "#b9a16b",
                fontSize: "10px",
                letterSpacing: "1px",
                textAlign: "right",
              }}
            >
              2 OZ
            </span>
          </div>

          {whiskies.map((whisky) => (
            <div
              key={whisky.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 70px 70px",
                gap: "20px",
                alignItems: "center",
                padding: "22px 0",
                borderBottom: "1px solid #242320",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  letterSpacing: "0.2px",
                }}
              >
                {whisky.name}
              </span>

              <span
                style={{
                  color: "#d1cfc9",
                  textAlign: "right",
                  fontSize: "15px",
                }}
              >
                {whisky.oneOz}
              </span>

              <span
                style={{
                  color: "#b9a16b",
                  textAlign: "right",
                  fontSize: "15px",
                }}
              >
                {whisky.twoOz}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BEER */}
      <section
        style={{
          borderTop: "1px solid #1f1f1d",
          padding: "110px 24px 130px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <p
              style={{
                color: "#b9a16b",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Cold Selection
            </p>

            <h2
              style={{
                fontSize: "clamp(38px, 7vw, 68px)",
                fontWeight: "400",
                lineHeight: "1",
                margin: "0",
              }}
            >
              BEER
            </h2>

            <p
              style={{
                color: "#77736c",
                fontSize: "13px",
                marginTop: "20px",
                letterSpacing: "1px",
              }}
            >
              Cold. Crisp. Properly served.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(360px, 48vw, 500px)",
              overflow: "hidden",
              marginBottom: "65px",
            }}
          >
            <Image
              src="/drinks/beer.png"
              alt="House of Havana beer selection"
              fill
              sizes="(max-width: 768px) 100vw, 1050px"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 90px",
              gap: "20px",
              paddingBottom: "14px",
              borderBottom: "1px solid #3a3833",
            }}
          >
            <span
              style={{
                color: "#77736c",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Selection
            </span>

            <span
              style={{
                color: "#b9a16b",
                fontSize: "10px",
                letterSpacing: "1px",
                textAlign: "right",
                textTransform: "uppercase",
              }}
            >
              Price
            </span>
          </div>

          {beers.map((beer) => (
            <div
              key={beer.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 90px",
                gap: "20px",
                alignItems: "center",
                padding: "22px 0",
                borderBottom: "1px solid #242320",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  letterSpacing: "0.2px",
                }}
              >
                {beer.name}
              </span>

              <span
                style={{
                  color: "#b9a16b",
                  textAlign: "right",
                  fontSize: "15px",
                }}
              >
                {beer.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
