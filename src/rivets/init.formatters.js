
import vtexHelpers from './../utils/vtex-helpers.js';

if ( typeof window !== 'object' ) {
    global.window = global;
    global.window.navigator = {};
}

if ( 'rivets' in window ) {
    rivets.formatters.formatPrice = (target) => vtexHelpers.formatPrice(target);
    rivets.formatters.getResizedImage = (src, width, height) => vtexHelpers.getResizedImage(src, width, height);
    rivets.formatters.getResizeImageByRatio = (src, type, newSize, aspectRatio) => vtexHelpers.getResizeImageByRatio(src, type, newSize, aspectRatio);
    rivets.formatters.replaceBreakLines = (target) => vtexHelpers.replaceBreakLines(target);

    rivets.formatters.productImgSize = rivets.formatters.getResizedImage;
}
