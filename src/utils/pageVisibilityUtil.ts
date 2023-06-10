
export const pageVisibilityApi = (): Array<keyof DocumentEventMap> => {
  const hidden = (document: Document & {msHidden?: boolean; webkitHidden?: boolean}): keyof DocumentEventMap | undefined => {
    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      return 'hidden' as keyof DocumentEventMap;
    } else if (typeof document.msHidden !== 'undefined') {
      return 'msHidden' as keyof DocumentEventMap;
    } else if (typeof document.webkitHidden !== 'undefined') {
      return 'webkitHidden' as keyof DocumentEventMap;
    }
    return undefined;
  }

  const visibilityChange= (document: Document & {msHidden?: boolean; webkitHidden?: boolean}): keyof DocumentEventMap | undefined  =>  {
    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      return 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      return 'msvisibilitychange' as keyof DocumentEventMap;
    } else if (typeof document.webkitHidden !== 'undefined') {
      return 'webkitvisibilitychange' as keyof DocumentEventMap;
    }
    return undefined;
  };
  return [ hidden(document), visibilityChange(document) ].filter((value): value is keyof DocumentEventMap => value !== undefined);
};