import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'

import { capsizeRadixPlugin } from 'vite-plugin-capsize-radix'
import inter from '@capsizecss/metrics/inter'
import arial from '@capsizecss/metrics/arial'

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    capsizeRadixPlugin({
      outputPath: './public/typography.css',
      defaultFontStack: [inter, arial],
    }),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
