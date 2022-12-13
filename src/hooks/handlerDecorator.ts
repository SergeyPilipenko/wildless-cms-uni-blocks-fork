/* eslint-disable @typescript-eslint/ban-types */

export type HandlerDecorator = <F extends Function>(handler: F, targetContent?: any) => F;

export const handlerDecorator: HandlerDecorator & {
  _impl: HandlerDecorator;
  setup(impl: HandlerDecorator): void;
} = (handler, targetContent) => {
  return handlerDecorator._impl(handler, targetContent);
};

handlerDecorator._impl = (handler) => handler;

handlerDecorator.setup = (impl) => {
  handlerDecorator._impl = impl;
};
