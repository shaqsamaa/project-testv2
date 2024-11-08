export const areEqual = (prevProps, nextProps): boolean => {

    /**
     * check if both props are objects
     */
    if (Object(prevProps) !== prevProps || Object(nextProps) !== nextProps) {
      return false;
    }
  
    /**
     * If the number of keys is different, the props have changed
     */
    const prevKeys = Object.keys(prevProps);
    const nextKeys = Object.keys(nextProps);
  
    if (prevKeys.length !== nextKeys.length) {
      return false;
    }
  
    /**
     * Check if all keys and values are shallowly equal
     */
    for (let key of prevKeys) {
      if (prevProps[key] !== nextProps[key]) {
        return false;
      }
    }
  
    return true;
  };