export function StickyProducthuntBadge() {
  return (
    <div className="fixed bottom-[18px] z-[9999] left-1/2 ml-[-100px]">
      <ProducthuntBadge />
    </div>
  );
}

export function ProducthuntBadge() {
  return (
    <a
      href="https://www.producthunt.com/posts/utrack?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-utrack"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481388&amp;theme=light"
        alt={
          'Utrack - Modern, open-source core accounting software  | Product Hunt'
        }
        style={{ width: '200px', height: '44px' }}
        width="200"
        height="54"
      />
    </a>
  );
}
