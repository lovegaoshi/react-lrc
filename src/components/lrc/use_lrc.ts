import { useMemo } from 'react';

import parser from '../../../react-native-lyric/src/util/parser/parser';

export default (lrc: string, showUnformatted = true) => {
  const lrcLineList = useMemo(
    () => parser(lrc, showUnformatted),
    [lrc, showUnformatted],
  );
  return lrcLineList;
};
