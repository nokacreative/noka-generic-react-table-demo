export const ROUTES = {
  usersTable: '/users',
  groupsTable: '/groups',
  tagsTable: '/tags',
  productsTable: '/products',
  selectionSample: '/selection',
  serverSample: '/server',
  headerSample: '/header',
  serverHeaderSample: '/serverHeader',
  masterSample: '/masterSample',
  userDetails: (id: string) => `/user/${id}`,
  groupDetails: (id: string) => `/group/${id}`,
  personDetails: (id: string) => `/person/${id}`,
  styleSample: '/styles',
  textOverrideSample: '/textOverride',
}

export const ID_PARAM_PLACEHOLDER = ':id'
