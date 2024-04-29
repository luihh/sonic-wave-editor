import * as assets from '../assets';

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  bmp: assets.image,
  css: assets.bracketsSky,
  gif: assets.image,
  gitignore: assets.git,
  html: assets.codeOrange,
  icns: assets.image,
  ico: assets.image,
  jpeg: assets.image,
  jpg: assets.image,
  js: assets.javascript,
  json: assets.bracketsOrange,
  jsx: assets.react,
  md: assets.markdown,
  png: assets.image,
  rs: assets.rust,
  svg: assets.image,
  tiff: assets.image,
  ts: assets.typescript,
  tsx: assets.reactTS,
};

export default function FileIcon({ name }: { name: string }) {
  const lastDotIndex = name.lastIndexOf('.');
  const ext =
    lastDotIndex !== -1 ? name.slice(lastDotIndex + 1).toLowerCase() : 'NONE';

  if (icons[ext]) {
    return (
      <img
        className="w-5"
        src={icons[ext]}
        alt={name}
      />
    );
  }

  return (
    <img
      className="w-5"
      src={assets.document}
      alt={name}
    />
  );
}
