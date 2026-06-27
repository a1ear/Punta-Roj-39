/**
 * MenuCard — used on the Menu page.
 * Migrated from the article.menu-card markup in menu.php
 */

export default function MenuCard({ item }) {
  const { name, price, description } = item

  return (
    <article className="menu-card h-100">
      <div className="menu-card-head">
        <h3 className="menu-item-name">{name}</h3>
        <span className="menu-dots" aria-hidden="true"></span>
        <span className="menu-item-price">{price}</span>
      </div>
      {description && (
        <p className="menu-item-desc text-pretty">{description}</p>
      )}
    </article>
  )
}
