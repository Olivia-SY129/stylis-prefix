export interface StylisElement {
  type: string;
  value: string;
  props: Array<string> | string;
  root: StylisElement | null;
  parent: StylisElement | null;
  children: Array<StylisElement> | string;
  line: number;
  column: number;
  length: number;
  return: string;
}

export type StylisPluginCallback = (
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
) => string | void;

export function prefixer(
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
): string | void;
