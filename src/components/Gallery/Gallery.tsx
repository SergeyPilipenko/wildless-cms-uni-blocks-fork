import { JSX } from '@redneckz/uni-jsx';
import { GalleryInner } from './GalleryInner';
import type { GalleryProps } from './GalleryProps';

export const Gallery = JSX<GalleryProps>((props) => <GalleryInner {...props} version="normal" />);
