import dark from './dark.theme.less';
import darkCompact from './dark-compact.theme.less';
import light from './light.theme.less';
import lightCompact from './light-compact.theme.less';
import { useEffect } from 'react';
import { keyBy } from 'lodash-es';

export const themes = [
  {
    id: 'light', // used as value in the select
    displayName: 'Light', // used as label in the select
    styles: light, // the style module
  },
  {
    id: 'lightCompact',
    displayName: 'Light Compact',
    styles: lightCompact,
  },
  {
    id: 'dark',
    displayName: 'Dark',
    styles: dark,
  },
  {
    id: 'darkCompact',
    displayName: 'Dark Compact',
    styles: darkCompact,
  },
];

const themeMap = keyBy(themes, 'id');

export function useAntdTheme(themeId) {
  // themeId is the active (i. e. selected) theme
  useEffect(() => {
    const { styles } = themeMap[themeId]; // 2. retrieve the imported style module for current themeId
    styles?.use(); // 3. apply the styling
    return () => styles?.unuse(); // 1. unapply the previous styling (if any)
  }, [themeId]);
}

export const defaultThemeId = themes[0].id;
