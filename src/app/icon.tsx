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
    'https://fonts.gstatic.com/s/greatvibes/v18/RWmMoKWR9v4ksMvYd2qU_g.ttf'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'hsl(40, 33%, 97%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'hsl(30, 30%, 50%)',
          fontFamily: '"Great Vibes"',
        }}
      >
        AK
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Great Vibes',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
