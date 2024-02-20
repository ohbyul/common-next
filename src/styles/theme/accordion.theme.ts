import { FlowbiteAccordionTheme } from "@components/Accordion/items";

const accordion: FlowbiteAccordionTheme = {
  root: {
    base: 'divide-y divide-gray-200 border-gray-200',
    flush: {
      off: 'rounded-lg border',
      on: 'border-b',
    },
  },

  title: {
    arrow: {
      base: 'h-6 w-6 shrink-0',
      open: {
        off: '',
        on: 'rotate-180',
      },
    },
    base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-4 px-4 text-left font-medium text-gray-400',
    flush: {
      off: 'hover:bg-gray-100 focus:ring-gray-200',
      on: 'bg-transparent dark:bg-transparent',
    },
    heading: '',
    open: {
      off: '',
      on: 'text-slate-800 bg-gray-100 dark:bg-gray-800 dark:text-white',
    },
  },
  content: {
    base: 'py-4 px-4 text-sm last:rounded-b-lg first:rounded-t-lg',
  },
};
export default accordion