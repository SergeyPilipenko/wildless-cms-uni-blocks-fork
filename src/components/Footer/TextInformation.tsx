import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { FooterLink } from './FooterLink';
import { TextInformationLink } from './TextInformationLink';

export const TextInformation = JSX<FooterLink>(({ className, links, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;

  return (
    <div className={`${className || ''}`}>
      <div className="pt-5">
        <span className="text-xs-light text-secondary-text">
          {`\u00a9\u00A02000-${new Date().getFullYear()}\u00A0АО \u00ABРоссельхозбанк\u00BB Генеральная лицензия Банка России \u2116\u00A03349 от\u00A012.08.2015\u00A0г.`}
        </span>
      </div>
      {links?.length ? (
        <div className="flex justify-start items-start gap-5 pt-2.5">
          {links.map((_, i) => (
            <TextInformationLink
              key={String(i)}
              index={i}
              {...useLink({ router, handlerDecorator }, _)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});
