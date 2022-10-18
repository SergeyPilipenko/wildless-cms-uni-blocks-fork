import { JSX } from '@redneckz/uni-jsx';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import type { ListProps } from '../../ui-kit/List/ListProps';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { TileContent } from './TileContent';

export interface TileProps extends TileContent, UniBlockProps {
  role?: string;
}

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
    isDotted = true,
    listItemSize = 'M',
    className = '',
    version = 'primary',
    ...rest
  } = props;
  const headingClassName = version === 'primary' ? 'text-primary-text' : '';

  return (
    <BlockWrapper
      context={context}
      className={`overflow-hidden font-sans p-9 pr-3 box-border ${className} ${
        VersionStyleMap[version]
      } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
      {...rest}
    >
      <BaseTile
        context={context}
        title={
          title ? (
            <Heading
              headingType={headingType}
              as="h2"
              title={title}
              className={`whitespace-pre-wrap max-w-[600px] ${headingClassName}`}
            />
          ) : null
        }
        buttons={
          buttons?.length ? (
            <ButtonSection
              context={context}
              buttons={buttons.map((button) => ({ ...button, className: 'w-[158px]' }))}
              className="flex mt-8 gap-3"
            />
          ) : null
        }
        image={image?.src ? <Img className="mt-auto ml-7" image={image} /> : null}
      >
        {description ? (
          <Description className="max-w-[600px] text-xl-light mt-2" description={description} />
        ) : null}
        {children}
        {renderList(items, { version, isDotted, listItemSize })}
      </BaseTile>
    </BlockWrapper>
  );
});

function renderList(items, { version, isDotted, listItemSize }: ListProps) {
  const listVersion = version === 'primary' ? 'tile' : 'tile-white';

  return items?.length ? (
    <List
      items={items}
      isDotted={isDotted}
      className="mt-3"
      listItemSize={listItemSize}
      itemClassName="mb-1.5"
      version={listVersion}
    />
  ) : null;
}
