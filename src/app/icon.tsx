import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/belleza/v15/0nkoC9_pNeECw6U__vA.ttf'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: 'hsl(40, 33%, 97%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'hsl(30, 30%, 50%)',
          fontFamily: 'Belleza',
          fontWeight: 700,
          letterSpacing: '0.05em',
        }}
      >
        AK
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Belleza',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
