import React from 'react';
import { Heading } from './Heading';

export default {
  all: (
    <div className="p-2 w-full h-full">
      <div className="bg-slate-100 w-full h-full">
        <div className="pb-3">
          <Heading type="h1" text="Копите в нескольких валютах" />
        </div>
        <div className="pb-3">
          <Heading type="h2" text="Копите в нескольких валютах" />
        </div>
        <div className="pb-3">
          <Heading type="h3" text="Дополнительные документы" />
        </div>
        <div className="pb-3">
          <Heading type="h4" text="Вклады в любой валюте" />
        </div>
        <div className="pb-3">
          <Heading type="h5" text="Вклады в любой валюте" />
        </div>
        <div className="pb-3">
          <Heading type="h6" text="Вклады в любой валюте" />
        </div>
      </div>
    </div>
  ),
};
