import type { FlowbiteTextInputTheme } from '@/components/Input/Text';

const textInput: FlowbiteTextInputTheme = {
  base: 'flex',
  field: {
    base: 'relative w-full',

    input: {
      base: 'block w-full border border-gray-400 focus:border-natural-900 placeholder-natural-300 disabled:cursor-not-allowed disabled:bg-gray-200',
      sizes: {
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4',
      },
      colors: {
        gray:
        'border-gray-500 text-gray-900 focus:border-blue-900',
        info:
        'border-gray-400 text-natural-900 focus:border-natural-900',
        failure:
        'border-failure-100 text-failure-900',
        warning:
        'border-warning-100 text-warning-900',
        success:
        'border-success-100 text-success-900',
      },
      withAddon: {
        on: 'rounded-r-lg',
        off: 'rounded-lg',
      },

    },
  },
  width: {
    '1': 'w-1',
    '1.5': 'w-1.5',
    '2': 'w-2',
    '2.5': 'w-2.5',
    '3': 'w-3',
    '3.5': 'w-3.5',
    '4': 'w-4',
    '5': 'w-5',
    '6': 'w-6',
    '7': 'w-7',
    '8': 'w-8',
    '9': 'w-9',
    '10': 'w-10',
    '11': 'w-11',
    '12': 'w-12',
    '14': 'w-14',
    '16': 'w-16',
    '20': 'w-20',
    '24': 'w-24',
    '28': 'w-28',
    '32': 'w-32',
    '36': 'w-36',
    '40': 'w-40',
    '44': 'w-44',
    '48': 'w-48',
    '52': 'w-52',
    '56': 'w-56',
    '60': 'w-60',
    '64': 'w-64',
    '72': 'w-72',
    '80': 'w-80',
    '96': 'w-96',
    'auto': 'w-auto',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '2/3': 'w-2/3',
    '1/4': 'w-1/4',
    '2/4': 'w-2/4',
    '3/4': 'w-3/4',
    '1/5': 'w-1/5',
    '2/5': 'w-2/5',
    '3/5': 'w-3/5',
    '4/5': 'w-4/5',
    '1/6': 'w-1/6',
    '2/6': 'w-2/6',
    '3/6': 'w-3/6',
    '4/6': 'w-4/6',
    '5/6': 'w-5/6',
    '1/12': 'w-1/12',
    '2/12': 'w-2/12',
    '3/12': 'w-3/12',
    '4/12': 'w-4/12',
    '5/12': 'w-5/12',
    '6/12': 'w-6/12',
    '7/12': 'w-7/12',
    '8/12': 'w-8/12',
    '9/12': 'w-9/12',
    '10/12': 'w-10/12',
    '11/12': 'w-11/12',
    'full': 'w-full',
  }
};
export default textInput