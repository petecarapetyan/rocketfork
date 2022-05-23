/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = '40--blog/index.rocket.js';
// prettier-ignore
import { html, layout, setupUnifiedPlugins, components, openGraphLayout } from '../recursive.data.js';
export { html, layout, setupUnifiedPlugins, components, openGraphLayout };
export async function registerCustomElements() {
  // server-only components
  // prettier-ignore
  customElements.define('rocket-social-link', await import('@rocket/components/social-link.js').then(m => m.RocketSocialLink));
  // prettier-ignore
  customElements.define('rocket-header', await import('@rocket/components/header.js').then(m => m.RocketHeader));
  // prettier-ignore
  customElements.define('main-docs', await import('@rocket/components/main-docs.js').then(m => m.MainDocs));
  // hydrate-able components
  // prettier-ignore
  customElements.define('rocket-search', await import('@rocket/search/web').then(m => m.RocketSearch));
  // prettier-ignore
  customElements.define('rocket-drawer', await import('@rocket/components/drawer.js').then(m => m.RocketDrawer));
}
/* END - Rocket auto generated - do not touch */

export const menuLinkText = 'Blog';

export default () => html`
  <h1>Rocket Blog</h1>
  <p>
    Discover articles from the core team and contributors about Rocket, tips and tricks included!
  </p>
`;
