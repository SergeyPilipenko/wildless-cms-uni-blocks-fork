import type { BenefitsBlockContent } from './BenefitsBlock/BenefitsBlockContent';
import type { BonusContent } from './Bonus/BonusContent';
import type { BonusBenefitsBlockContent } from './BonusBenefitsBlock/BonusBenefitsBlockContent';
import type { CardTransferContent } from './CardTransfer/CardTransferContent';
import type { ComparisonTableContent } from './ComparisonTable/ComparisonTableContent';
import type { ExchangeRateTileContent } from './ExchangeRateTile/ExchangeRateTileContent';
import type { FooterContent } from './Footer/FooterContent';
import type { GalleryContent } from './Gallery/GalleryContent';
import type { GracePeriodContent } from './GracePeriod/GracePeriodContent';
import type { HeaderContent } from './Header/HeaderContent';
import type { InsuranceAmountBlockContent } from './InsuranceAmountBlock/InsuranceAmountBlockContent';
import type { LinkDocsContent } from './LinkDocs/LinkDocsContent';
import type { LinkListContent } from './LinkList/LinkListContent';
import type { MobileAppTileContent } from './MobileAppTile/MobileAppTileContent';
import type { NavigationContent } from './Navigation/NavigationContent';
import type { PictureTextContent } from './PictureText/PictureTextContent';
import type { PlaceholderContent } from './Placeholder/PlaceholderContent';
import type { ProductBlockContent } from './ProductBlock/ProductBlockContent';
import type { ProductGalleryContent } from './ProductGallery/ProductGalleryContent';
import type { ProductTileContent } from './ProductTile/ProductTileContent';
import type { PromoTileContent } from './PromoTile/PromoTileContent';
import type { SafeDepositRentalContent } from './SafeDepositRental/SafeDepositRentalContent';
import type { StepsBlockContent } from './StepsBlock/StepsBlockContent';
import type { TabsContent } from './Tabs/TabsContent';
import type { TariffsTableContent } from './TariffsTable/TariffsTableContent';
import type { TextBlockContent } from './TextBlock/TextBlockContent';
import type { TileContent } from './Tile/TileContent';

/**
 * @hidden
 */
export type BlockContent =
  | BenefitsBlockContent
  | BonusContent
  | CardTransferContent
  | ComparisonTableContent
  | ExchangeRateTileContent
  | FooterContent
  | GalleryContent
  | GracePeriodContent
  | HeaderContent
  | InsuranceAmountBlockContent
  | LinkDocsContent
  | MobileAppTileContent
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
  | BonusBenefitsBlockContent
  | SafeDepositRentalContent
  | TabsContent;
