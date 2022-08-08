import { Heading } from './Heading';

export default {
  all: (
    <div className="p-2 w-full h-full">
      <div className="bg-slate-100 w-full h-full">
        <div className="pb-3">
          <Heading headingType="h1" title="«Своя» дебетовая карта" />
        </div>
        <div className="pb-3">
          <Heading headingType="h2" title="Рефинансирование кредитов" />
        </div>
        <div className="pb-3">
          <Heading headingType="h3" title="Потребительский кредит" />
        </div>
        <div className="pb-3">
          <Heading headingType="h4" title="Курсы обмена валют" />
        </div>
        <div className="pb-3">
          <Heading headingType="h5" title="Своё Родное" />
        </div>
        <div className="pb-3">
          <Heading headingType="h6" title="Своё Родное" />
        </div>
      </div>
    </div>
  ),
};
