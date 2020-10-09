import { useEffect, useState } from 'react';

import { DragonsClient } from '../clients/dragons';
import { adaptDragon } from '../adapters/dragon';

function useDragons(id) {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    let curr = true;

    (async () => {
      const dragonsPayload = await DragonsClient.fetch(id);

      if (curr) {
        setDragons(
          dragonsPayload.map(adaptDragon)
        );
      }
    })();

    return () => { curr = false; }
  }, [id]);

  return dragons;
}

export { useDragons, };
