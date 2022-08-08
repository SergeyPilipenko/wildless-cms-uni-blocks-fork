import React from 'react';
import { Heading } from './Heading';

export default {
  all: (
    <div className="p-2 w-full h-full">
      <div className="bg-slate-100 w-full h-full">
        <div className="pb-3">
          <Heading headingType="h1" title="Копите в нескольких валютах" />
        </div>
        <div className="pb-3">
          <Heading headingType="h2" title="Копите в нескольких валютах" />
        </div>
        <div className="pb-3">
          <Heading headingType="h3" title="Дополнительные документы" />
        </div>
        <div className="pb-3">
          <Heading headingType="h4" title="Вклады в любой валюте" />
        </div>
        <div className="pb-3">
          <Heading headingType="h5" title="Вклады в любой валюте" />
        </div>
        <div className="pb-3">
          <Heading headingType="h6" title="Вклады в любой валюте" />
        </div>
      </div>
    </div>
  ),
};
