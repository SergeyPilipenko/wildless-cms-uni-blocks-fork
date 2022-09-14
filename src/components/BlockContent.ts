import type { BenefitsBlockContent } from './BenefitsBlock/BenefitsBlockContent';
import type { BonusContent } from './Bonus/BonusContent';
import type { ComparisonTableContent } from './ComparisonTable/ComparisonTableContent';
import type { ExchangeRateTileContent } from './ExchangeRateTile/ExchangeRateTileContent';
import type { FooterContent } from './Footer/FooterContent';
import type { GalleryContent } from './Gallery/GalleryContent';
import type { GracePeriodContent } from './GracePeriod/GracePeriodContent';
import type { GroupBlockContent } from './GroupBlock/GroupBlockContent';
import type { HeaderContent } from './Header/HeaderContent';
import type { LinkDocsContent } from './LinkDocs/LinkDocsContent';
import type { LinkListContent } from './LinkList/LinkListContent';
import type { MobileAppTileContent } from './MobileAppTile/MobileAppTileContent';
import type { NavigationContent } from './Navigation/NavigationContent';
import type { NavigatorTabsContent } from './NavigatorTabs/NavigatorTabsContent';
import type { PictureTextContent } from './PictureText/PictureTextContent';
import type { PlaceholderContent } from './Placeholder/PlaceholderContent';
import type { ProductBlockContent } from './ProductBlock/ProductBlockContent';
import type { ProductGalleryContent } from './ProductGallery/ProductGalleryContent';
import type { ProductTileContent } from './ProductTile/ProductTileContent';
import type { PromoTileContent } from './PromoTile/PromoTileContent';
import type { StepsBlockContent } from './StepsBlock/StepsBlockContent';
import type { TariffsTableContent } from './TariffsTable/TariffsTableContent';
import type { TextBlockContent } from './TextBlock/TextBlockContent';
import type { TileContent } from './Tile/TileContent';

/**
 * @hidden
 */
export type BlockContent =
  | BenefitsBlockContent
  | BonusContent
  | ComparisonTableContent
  | ExchangeRateTileContent
  | FooterContent
  | GalleryContent
  | GracePeriodContent
  | HeaderContent
  | LinkDocsContent
  | MobileAppTileContent
  | NavigatorTabsContent
  | PictureTextContent
  | PlaceholderContent
  | ProductBlockContent
  | ProductGalleryContent
  | ProductTileContent
  | PromoTileContent
  | StepsBlockContent
  | TariffsTableContent
  | TextBlockContent
  | TileContent
  | NavigationContent
  | LinkListContent
  | GroupBlockContent;
