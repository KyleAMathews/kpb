import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { Theme } from '@radix-ui/themes'

import { Header } from '../components/Header'
import { ThemeProvider } from '../contexts/ThemeContext'

import radixCss from '@radix-ui/themes/styles.css?url'
import interCss from '@fontsource/inter/latin.css?url'
import sourceSerifCss from '@fontsource/source-serif-4/latin.css?url'
import sourceSansCss from '@fontsource/source-sans-3/latin.css?url'
import alegreyaCss from '@fontsource/alegreya/latin.css?url'
import alegreyaSansCss from '@fontsource/alegreya-sans/latin.css?url'
import playfairCss from '@fontsource/playfair-display/latin.css?url'
import latoCss from '@fontsource/lato/latin.css?url'
import frauncesCss from '@fontsource/fraunces/latin.css?url'
import figtreeCss from '@fontsource/figtree/latin.css?url'
import typographyCss from '../../public/typography.css?url'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
    links: [
      { rel: 'stylesheet', href: radixCss },
      { rel: 'stylesheet', href: interCss },
      { rel: 'stylesheet', href: sourceSerifCss },
      { rel: 'stylesheet', href: sourceSansCss },
      { rel: 'stylesheet', href: alegreyaCss },
      { rel: 'stylesheet', href: alegreyaSansCss },
      { rel: 'stylesheet', href: playfairCss },
      { rel: 'stylesheet', href: latoCss },
      { rel: 'stylesheet', href: frauncesCss },
      { rel: 'stylesheet', href: figtreeCss },
      { rel: 'stylesheet', href: typographyCss },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Theme accentColor="blue" grayColor="slate" radius="medium">
          <ThemeProvider>
            <Header />
            <Outlet />
          </ThemeProvider>
        </Theme>
        <Scripts />
      </body>
    </html>
  )
}
