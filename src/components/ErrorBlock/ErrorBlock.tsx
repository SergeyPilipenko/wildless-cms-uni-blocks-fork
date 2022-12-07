import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { ErrorBlockContent } from './ErrorBlockContent';

export interface ErrorBlockProps extends ErrorBlockContent, UniBlockProps {}

const renderErrorContent = (error: ErrorBlockContent['error']) => {
  if (error?.errorContentType === 'Image' && error?.image) {
    return <Img image={error.image} />;
  }

  if (error?.errorContentType === 'Code' && error.code) {
    return <div className="font-mohave text-title-extra gradient-color-text">{error.code}</div>;
  }

  return null;
};

export const ErrorBlock = JSX<ErrorBlockProps>(
  ({ context, className = '', title, subtitle, error, button }) => {
    const { useRouter, handlerDecorator } = context;
    const router = useRouter();

    return (
      <section className={`flex flex-col justify-center items-center mt-12 ${className}`}>
        <div className="flex justify-center py-20">{renderErrorContent(error)}</div>
        {title ? <Heading headingType="h1" className="text-left mb-4" title={title} /> : null}
        {subtitle ? (
          <div className="font-sans text-xl-light mb-7 max-w-[613px] text-center">{subtitle}</div>
        ) : null}
        {button?.text ? (
          <Button
            className="py-4 px-9"
            version={button?.version}
            {...useLink({ router, handlerDecorator }, button)}
          >
            {button.text}
          </Button>
        ) : null}
      </section>
    );
  },
);
