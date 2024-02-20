import { FlowbiteCheckboxTheme } from "@/components/Checkbox/Checkbox";

const checkboxTheme: FlowbiteCheckboxTheme = {
  root: {
    base: 'w-4 h-4 rounded border border-gray-300 bg-gray-100 focus:ring-offset-0 cursor-pointer',
    color: {
      default: 'text-blue-400',
      red: 'text-red-400',
      dark: 'text-gray-400',
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      indigo: 'text-indigo-400',
      yellow: 'text-yellow-400',
      
      lime: 'focus:ring-lime-700 text-lime-700',
      pink: 'focus:ring-pink-400 text-pink-400',
      success: 'focus:ring-green-800 dark:ring-offset-green-800  text-green-800',
      warning: 'focus:ring-yellow-400 dark:ring-offset-yellow-400  text-yellow-400',
      gray: 'focus:ring-gray-900 dark:ring-offset-gray-900  text-gray-900',
      info: 'focus:ring-cyan-800 dark:ring-offset-gray-800  text-cyan-800',
      light: 'focus:ring-gray-900 dark:ring-offset-gray-900 text-gray-900',
      failure: 'focus:ring-red-900 dark:ring-offset-red-900 text-red-900',
      teal: 'focus:ring-teal-400 text-teal-400',
    },
  },
};

export default checkboxTheme