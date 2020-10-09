const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

function buildUrl(id) {
  return `${BASE_URL}${id ? `/id` : ''}`;
}

const DragonsClient = {
  fetch: async id => {
    const url = buildUrl(id);
    const res = await fetch(url);
    return res.json();
  }
};

export { DragonsClient, };
