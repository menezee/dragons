import React from 'react';

import { useDragons } from '../../hooks/useDragons';

function List() {
  const dragons = useDragons();

  return (
    <div>
      <h1>
        List of dragons
      </h1>
      <div>
        <ul>
          {
            dragons.map(({ name }) => (
              <li key={name}>
                { name }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export { List, };
