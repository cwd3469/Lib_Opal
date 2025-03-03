const QueryKey = {
  RETREAT: ["retreat"],
  RETREAT_DETAIL: (id?: string) => ["retreatDetail", id],
  MEMBERSHIP: ["membership"],
  MEMBERSHIP_DETAIL: (id?: string) => ["membershipDetail", id],
  CHURCH: ["church"],
};

export default QueryKey;
