import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export function Products() {
  return (
    <section id="products" tabIndex={-1} aria-labelledby="products-heading" className="section-shell products-section">
      <Container>
        <div className="section-grid">
          <p className="eyebrow">04 / WHAT WE BELIEVE</p>
          <div>
            <h2 id="products-heading" className="section-title">We don&apos;t just build for clients.<br /><span className="text-olive">We&apos;re builders at heart.</span></h2>
            <div className="studio-copy"><p>Alongside client work, our ambition is to research, design, and build independent digital products that solve meaningful problems.</p><p>Hands-on experimentation informs how we approach a brief: question the assumptions, explore what is useful, and think carefully about what deserves to be built. Client work helps {siteConfig.name} pursue that longer-term ambition.</p></div>
          </div>
        </div>
        <div className="experiments-panel">
          <div className="experiment-mark" aria-hidden="true"><span /><span /><span /></div>
          <div><h3 className="eyebrow">Products & Experiments</h3>
            {products.length === 0 ? <><p className="experiment-title">Exploring useful ideas.<br />Building with intention.</p><p className="experiment-note">A space for the work taking shape. We&apos;ll share more when there&apos;s something ready to show.</p></> : <ul className="product-list">{products.map((product) => <li key={product.name}><h4>{product.url ? <a className="text-link" href={product.url}>{product.name} <ArrowUpRight size={16} aria-hidden="true" /></a> : product.name}</h4><p>{product.description}</p><p className="eyebrow">{product.status}</p></li>)}</ul>}
          </div>
        </div>
      </Container>
    </section>
  );
}
