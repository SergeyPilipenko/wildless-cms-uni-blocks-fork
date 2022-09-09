import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { TileContent } from './TileContent';

export interface TileProps extends TileContent, UniBlockProps {
  role?: string;
}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const {
    context,
    title,
    headingType = 'h3',
    description,
    items,
    children,
    buttons,
    image,
    className = '',
    version = 'primary',
    role,
    anchor = null,
  } = props;

  return (
    <section
      className={`overflow-hidden font-sans p-9 pr-3 box-border ${className} ${
        tileStyleMap[version]
      } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
      role={role}
      id={anchor}
    >
      <BaseTile
        context={context}
        title={
          title && (
            <Heading
              headingType={headingType}
              as="h3"
              title={title}
              className={`whitespace-pre-wrap max-w-[600px] ${title ? 'mb-3' : ''}
              ${version === 'primary' ? 'text-primary-text' : ''}`}
            />
          )
        }
        buttons={
          buttons?.length ? (
            <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
          ) : null
        }
        image={image?.src && <Img className="mt-auto ml-7" image={image} />}
      >
        {description && (
          <Description
            className="max-w-[600px] text-title-new-sm font-light"
            description={description}
          />
        )}
        {children}
        {renderList(items, version)}
      </BaseTile>
    </section>
  );
});

function renderList(items, version) {
  return items?.length ? (
    <List
      items={items}
      itemClassName="text-title-2xs font-light mt-2"
      version={version === 'primary' ? 'tile' : 'tile-white'}
    />
  ) : null;
}
