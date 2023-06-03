import { create } from 'jss';
import { ThemeProvider, jssPreset, StylesProvider } from '@mui/system';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Создание экземпляра JSS и настройка его параметров
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point'),
});
const cache = createCache({ key: 'css', prepend: true });
jss.use(cache);

export const JssProvider = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <StylesProvider jss={jss}>
        <ThemeProvider>{children}</ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
};
