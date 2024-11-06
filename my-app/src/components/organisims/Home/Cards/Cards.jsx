"use client";
import { useRef, useState ,useLayoutEffect  } from "react";
import Image from "next/image";
import styles from "../../../../styles/Cards.module.css";

export default function Cards() {
  const cardContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const cardData = [
    {
      title: "Chauffage",
      address: "258 Serenity Lane, Crestwood Hills",
      description:
        "Nestled along the tranquil shores of a pristine lake, Lakeview Lakeside offers an idyllic escape into nature's embrace. This exquisite property combines rustic charm with modern luxury, featuring a spacious, elegantly designed home with panoramic lake views.",
      price: "$4,750,000",
      properties: "3 Bed | 2 Bath | 7,500 sq. ft",
      img: "/Cards/lakeview-elegance.png",
    },
    {
      title: "Vista Paradiso",
      address: "123 Paradise Road, Lakeview",
      description:
        "Vista Paradiso is an epitome of modern luxury, nestled against a backdrop of a breathtaking lake and verdant scenery.",
      price: "$4,500,000",
      properties: "4 Bed | 2 Bath | 7,000 sq. ft",
      img: "/Cards/vista-paradiso.png",
    },
    {
      title: "Skyline Oasis",
      address: "450 Metropolitan Ave, Downtown",
      description:
        "Skyline Oasis is a beacon of modern urban luxury, located in the heart of the city.",
      price: "$5,200,000",
      properties: "3 Bed | 3 Bath | 3,000 sq. ft",
      img: "/Cards/skyline-oasis.png",
    },
    {
      title: "Skyline Oasis",
      address: "450 Metropolitan Ave, Downtown",
      description:
        "Skyline Oasis is a beacon of modern urban luxury, located in the heart of the city.",
      price: "$5,200,000",
      properties: "3 Bed | 3 Bath | 3,000 sq. ft",
      img: "/Cards/skyline-oasis.png",
    },
    {
      title: "Skyline Oasis",
      address: "450 Metropolitan Ave, Downtown",
      description:
        "Skyline Oasis is a beacon of modern urban luxury, located in the heart of the city.",
      price: "$5,200,000",
      properties: "3 Bed | 3 Bath | 3,000 sq. ft",
      img: "/Cards/skyline-oasis.png",
    },
    
  ];

  const [likedCards, setLikedCards] = useState(
    Array(cardData.length).fill(false)
  );

  useLayoutEffect(() => {
    const updateCardWidth = () => {
      if (cardContainerRef.current) {
        const cardElement = cardContainerRef.current.querySelector(`.${styles.card}`);
        if (cardElement) {
          setCardWidth(cardElement.offsetWidth + 24); // 24 is the gap between cards
        }
      }
    };

    updateCardWidth(); // Initial calculation
    window.addEventListener("resize", updateCardWidth); // Update on resize
    return () => window.removeEventListener("resize", updateCardWidth); // Cleanup
  }, []);

  const toggleLike = (index) => {
    const updatedLikes = [...likedCards];
    updatedLikes[index] = !updatedLikes[index];
    setLikedCards(updatedLikes);
  };

  const scrollLeft = () => {
    if (cardContainerRef.current && cardWidth > 0) {
      cardContainerRef.current.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current && cardWidth > 0) {
      cardContainerRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        ◀
      </button>
      <div className={styles.cards} ref={cardContainerRef}>
        {cardData.map((card, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.card__preview}>
              <Image
                src={card.img}
                alt={`${card.title} preview`}
                width={600}
                height={400}
              />
              <div className={styles.card__price}>{card.price}</div>
            </div>
            <div className={styles.card__content}>
              <h2 className={styles.card__title}>{card.title}</h2>
              <p className={styles.card__address}>{card.address}</p>
              <p className={styles.card__description}>{card.description}</p>
              <div className={styles.card__bottom}>
                <div className={styles.card__properties}>{card.properties}</div>
                <button
                  className={`${styles.card__btn} ${
                    likedCards[index] ? styles["card__btn--like"] : ""
                  }`}
                  onClick={() => toggleLike(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}
