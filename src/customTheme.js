// src/customTheme.js
import { PrismTheme } from 'prism-react-renderer';

const customTheme = {
  plain: {
    color: '#d6deeb',
    backgroundColor: '#282A36',
  },
  styles: [
    {
      types: ['number','string', 'char','variable', 'constant', 'function', 'keyword', 'selector', 'builtin', 'punctuation', 'comment'],
      style: {
        color: '#4CB3D4', // Blue color for numbers
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#fffff',
      },
    },
  ],
};

export default customTheme;