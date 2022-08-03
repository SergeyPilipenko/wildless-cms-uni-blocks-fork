import { Heading } from './Heading';

export default {
  all: (
    <div className="p-2 w-full h-full">
      <div className="bg-slate-100 w-full h-full">
        <div className="pb-3">
          <Heading type="h1" text="«Своя» дебетовая карта" />
        </div>
        <div className="pb-3">
          <Heading type="h2" text="Рефинансирование кредитов" />
        </div>
        <div className="pb-3">
          <Heading type="h3" text="Потребительский кредит" />
        </div>
        <div className="pb-3">
          <Heading type="h4" text="Курсы обмена валют" />
        </div>
        <div className="pb-3">
          <Heading type="h5" text="Своё Родное" />
        </div>
        <div className="pb-3">
          <Heading type="h6" text="Своё Родное" />
        </div>
      </div>
    </div>
  ),
};
