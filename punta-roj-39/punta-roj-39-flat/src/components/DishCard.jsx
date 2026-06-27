/**
 * DishCard — used on the Home page featured section.
 *
 * Change: enforced consistent aspect ratio (4/3) with object-fit: cover
 * so all cards share identical image height regardless of source dimensions.
 */

export default function DishCard({ item }) {
  const { name, category, price, description, image } = item

  return (
    <article className="dish-card h-100">
      <div className="dish-media">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            width="600"
            height="450"
            onError={(e) => {
              e.currentTarget.classList.add('img-fallback')
              e.currentTarget.alt = 'Image coming soon'
            }}
          />
        ) : (
          <img
            src=""
            alt="Image coming soon"
            className="img-fallback"
            width="600"
            height="450"
          />
        )}
        <span className="dish-tag">{category}</span>
      </div>
      <div className="dish-body">
        <div className="dish-row">
          <h3 className="dish-name">{name}</h3>
          <span className="dish-price">{price}</span>
        </div>
        {description && (
          <p className="dish-desc text-pretty">{description}</p>
        )}
      </div>
    </article>
  )
}
