/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error('error', error);

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2
          css={{
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          Something went wrong!
        </h2>
      </body>
    </html>
  );
}
