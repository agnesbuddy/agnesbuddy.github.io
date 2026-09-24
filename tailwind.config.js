/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{ts,tsx}'],

  theme: {
    /* 旧站只有 860px 一个断点（见原 assets/site.css 的 @media）。
       这里直接覆盖默认 screens，保证 `md:` 与旧版行为逐像素一致，
       也避免出现 640/768/1024/1280 这些旧站根本没有的中间态。 */
    screens: { md: '860px' },

    extend: {
      /* 令牌 → Tailwind 颜色名。
         值写成 CSS 变量，深浅两套主题只需在 index.css 里重定义变量，
         组件里一律用 bg-n-0 / text-n-700 / bg-brand 这类语义名，不写死色值。
         注意：CSS 变量色值不支持 Tailwind 的 `/50` 透明度修饰符
         （那需要 rgb(var(--x) / <alpha-value>) 格式），需要半透明时直接用原生 CSS。 */
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          dark: 'var(--brand-dark)',
          bg: 'var(--brand-bg)',
          bg2: 'var(--brand-bg-2)'
        },
        n: {
          0: 'var(--n-0)',
          50: 'var(--n-50)',
          100: 'var(--n-100)',
          150: 'var(--n-150)',
          200: 'var(--n-200)',
          300: 'var(--n-300)',
          400: 'var(--n-400)',
          500: 'var(--n-500)',
          600: 'var(--n-600)',
          700: 'var(--n-700)',
          800: 'var(--n-800)',
          900: 'var(--n-900)'
        }
      },

      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Hiragino Sans GB"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'sans-serif'
        ],
        mono: ['"JetBrains Mono"', 'Consolas', 'Menlo', 'monospace']
      },

      borderRadius: {
        card: 'var(--radius)'
      },

      boxShadow: {
        card: 'var(--shadow)',
        cardHover: '0 20px 44px -16px rgba(15, 23, 42, 0.30)',
        shot: '0 24px 56px -26px rgba(15, 23, 42, 0.42)',
        shotSm: '0 10px 22px -12px rgba(15, 23, 42, 0.32)',
        btn: '0 8px 20px -10px var(--brand)'
      },

      maxWidth: {
        wrap: '1080px',
        doc: '820px',
        sub: '660px'
      }
    }
  },

  plugins: []
}
