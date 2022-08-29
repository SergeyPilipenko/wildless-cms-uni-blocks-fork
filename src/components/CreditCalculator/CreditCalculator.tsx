import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Tabs } from '../../ui-kit/Tabs/Tabs';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import type { CreditCalculatorContent } from './CreditCalculatorContent';
import { CreditCalculatorForm } from './CreditCalculatorForm';
import { DEFAULT_TABS } from './defaultTabs';

export interface CreditCalculatorProps extends CreditCalculatorContent, UniBlockProps {}

export const CreditCalculator = JSX<CreditCalculatorProps>(
  ({ className = '', context, tabs = DEFAULT_TABS, anchor = null }) => {
    const [currentTabIndex, setCurrentTabIndex] = context.useState(0);

    return (
      <section className={`font-sans text-primary-text py-10 bg-white ${className}`} id={anchor}>
        <Heading
          className="w-full text-center mb-8"
          headingType={getTileHeadingType(className)}
          title="Калькулятор"
        />
        <Tabs tabs={tabs} currentTabIndex={currentTabIndex} onTabClick={setCurrentTabIndex} />
        <CreditCalculatorForm
          context={context}
          directoryName={tabs[currentTabIndex]?.directoryName}
        />
      </section>
    );
  },
);
