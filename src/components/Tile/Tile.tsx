import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import type { TileContent } from './TileContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';

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
    isDotted = true,
    className = '',
    version = 'primary',
    ...rest
  } = props;

  return (
    <BlockWrapper
      context={context}
      className={`overflow-hidden font-sans p-9 pr-3 box-border ${className} ${
        tileStyleMap[version]
      } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
      {...rest}
    >
      <BaseTile
        context={context}
        title={
          title ? (
            <Heading
              headingType={headingType}
              as="h3"
              title={title}
              className={`whitespace-pre-wrap max-w-[600px] text-h4
              ${version === 'primary' ? 'text-primary-text' : ''}`}
            />
          ) : null
        }
        buttons={
          buttons?.length ? (
            <ButtonSection
              context={context}
              buttons={buttons.map((button) => ({ ...button, className: 'w-[158px]' }))}
              className="flex mt-9 gap-3"
            />
          ) : null
        }
        image={image?.src ? <Img className="mt-auto ml-7" image={image} /> : null}
      >
        {description ? (
          <Description className="max-w-[600px] text-xl-light mt-2" description={description} />
        ) : null}
        {children}
        {renderList(items, version, isDotted)}
      </BaseTile>
    </BlockWrapper>
  );
});

function renderList(items, version, isDotted: boolean) {
  const listVersion = version === 'primary' ? 'tile' : 'tile-white';

  return items?.length ? (
    <List
      items={items}
      isDotted={isDotted}
      itemClassName="text-h6 font-light mt-2"
      version={listVersion}
    />
  ) : null;
}
