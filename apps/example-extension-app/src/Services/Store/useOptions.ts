import { useLocalstorageState } from 'rooks';

import { defaults } from './defaults';
import { useCallback } from 'react';

type UseOptionsProps = {
  id?: string;
};

export function useOptions({
  id = 'my-extension-options',
}: UseOptionsProps = {}) {
  const [options, save, reset] = useLocalstorageState('options', defaults);

  const handleReset = useCallback(() => {
    reset();
    save(defaults);
  }, [reset, save]);

  return { options, save, reset: handleReset };
}
