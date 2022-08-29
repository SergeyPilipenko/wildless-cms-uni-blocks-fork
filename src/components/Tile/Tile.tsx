import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
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
    description,
    items,
    children,
    buttons,
    image,
    className = '',
    version = 'primary',
    role,
  } = props;

  return (
    <section
      className={`overflow-hidden font-sans p-9 box-border ${className} ${
        tileStyleMap[version]
      } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
      role={role}
    >
      <BaseTile
        context={context}
        title={
          title && (
            <Heading
              headingType={getTileHeadingType(className)}
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
        {description && <Description className="mt-4 max-w-[600px]" description={description} />}
        {children}
        {renderList(items, version)}
      </BaseTile>
    </section>
  );
});

function renderList(items, version) {
  return items?.length ? (
    <List items={items} itemClassName="mt-2.5 first:mt-0" version={version} />
  ) : null;
}
