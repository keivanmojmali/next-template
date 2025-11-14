import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sponsors } from '@/components/Sponsors';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
        {' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>
        {' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>🚀 Next.js with App Router support</li>
        <li>🔥 TypeScript for type checking</li>
        <li>💎 Tailwind CSS integration</li>
        <li>
          🔒 Authentication with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          >
            Clerk
          </a>
          {' '}
          (includes passwordless, social, and multi-factor auth)
        </li>
        <li>🌐 Multi-language support (i18n) with next-intl</li>
        <li>🔴 Form handling (React Hook Form) and validation (Zod)</li>
        <li>📏 Linting and formatting (ESLint, Prettier)</li>
        <li>
          🚨 Error monitoring (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          >
            Sentry
          </a>
          ) and logging (LogTape, an alternative to Pino.js)
        </li>
        <li>🤖 SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>⚙️ Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
      <p className="text-base">
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p>
      <h2 className="mt-5 text-2xl font-bold">{t('sponsors_title')}</h2>
      <Sponsors />
    </>
  );
};
