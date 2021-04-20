export enum HttpStatusCode {
  Success = 200,
  Unauthorized = 401,
  NotFound = 404,
  Forbidden = 403,
  BadRequest = 400,
  InternalServerError = 500,
  ServiceUnavailable = 500,
  UnknownError = 0,
}

export enum OPTION_VALUES {
  OPTION = '',
  ACCESS_CONTROL_ALLOW_ORIGIN = '*',
  APPLICATION_JSON = 'application/json'
}

export enum PAGE_LEVEL_ERROR {
  LOGIN_FAILED = 'Login failed. Please check the Username/ Password and try again.',
  UNKNOWN_ERROR = 'Oops! Something went wrong. Please try again later.'
}

export enum Action {
  Add = 'Add',
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete',
  Cancel = 'Cancel',
  Import = 'Import'
}

export enum ActionColor {
  MATCH = 'action-green',
  PARTIAL_MATCH = 'action-yellow',
  MIS_MATCH = 'action-red',
  DEFAULT = 'action-black'
}

export enum WizardSteps {
  'General Information',
  'Done',
}
