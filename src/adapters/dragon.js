// {"id":"5","createdAt":"","name":"teste fff","type":"sdsdsds","histories":[]}
function adaptDragon(payload) {
  return {
    id: payload.id,
    name: payload.name,
  }
}

export { adaptDragon, };
