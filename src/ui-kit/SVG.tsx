import { JSX } from '@redneckz/uni-jsx';

export interface SVGPathOptions {
  fill?: string;
  stroke?: string;
  strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';
  strokeLinejoin?: 'inherit' | 'round' | 'miter' | 'bevel';
  strokeWidth?: string;
  strokeMiterlimit?: string;
}

export interface SVGPath extends SVGPathOptions {
  d: string;
}

export interface SVGProps extends SVGPathOptions {
  className?: string;
  viewBox?: string;
  paths: SVGPath[];
  width?: string;
  height?: string;
}

export const SVG = JSX<SVGProps>(
  ({ className, viewBox, fill = 'none', width, height, paths, ...commonOptions }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox={viewBox}
        fill={fill}
        width={width}
        height={height}
      >
        {paths.map(({ d, fill: pathFill, ...options }, i) => (
          <path key={i} d={d} fill={pathFill || 'currentColor'} {...commonOptions} {...options} />
        ))}
      </svg>
    );
  },
);
