export const HEADER_CONST = {
  TEMPLATE_CONST: {
    SIGN_OUT: 'Sign Out',
    MAIN_SCREEN: 'Main Screen',
  },
  NAV_BAR_CONST: [
    {
      NAV_ITEM: 'Menu',
      MOBILE_VIEW: true,
      DESKTOP_VIEW: true,
      SUB_NAV_ITEM: [
        {
          SUB_NAV_NAME: 'Item 1',
          SUB_NAV_LINK: 'item/item'
        },
        {
          SUB_NAV_NAME: 'item 2',
          SUB_NAV_LINK: 'mssetup',
        },
        {
          SUB_NAV_NAME: 'Data Helper',
          SUB_NAV_LINK: 'ms-helper',
        }
      ],
    },
    {
      NAV_ITEM: 'Menu 2',
      MOBILE_VIEW: true,
      DESKTOP_VIEW: true,
      SUB_NAV_ITEM: [
        {
          SUB_NAV_NAME: 'Toolbox',
          SUB_NAV_LINK: 'toolbox',
        }
      ],
    },
    {
      NAV_ITEM: 'Other/Misc',
      MOBILE_VIEW: true,
      DESKTOP_VIEW: true,
      SUB_NAV_ITEM: [
        {
          SUB_NAV_NAME: 'Item Admin',
          SUB_NAV_LINK: 'admin',
        }
      ],
    },
  ],
};

export const FOOTER_CONST = {
  TEMPLATE_CONST: {
    COPYRIGHT: '© 2020 MS, Inc.',
    REPORTS: 'Reports',
    REPORTS_ITEMS: {
      CONFIG_REPORT: 'Config Report(Portal)',
    }
  }
};

export const SIDE_NAV_BAR_CONST = {
  SIDE_NAV_TEXT: {
    MS_SETUP: 'MS Setup',
    LAUNCH_SHEET: 'Launch Sheet',
    LOGOUT: 'Logout',
  },
};

export const HOME_CONST = {
  ICON_TEXT: {
    CUSTOMER_INQUIRY: 'Customer Inquiry',
    RESPONDENT_LISTING_GENERATOR: 'Respondent Listing Generator',
    MS_MAINTENANCE: 'MS Maintenance',
    FRAUD_QUEUE: 'Fraud Queue',
    INVENTORY_MAINTENANCE: 'Inventory Maintenance',
    MS_HELPER: 'Data Helper',
    LAUNCH_SHEET: 'Launch Sheet',
    MS_SETUP: 'MS Setup',
  },
  TEMPLATE_CONST: {
    WELCOME_MESSAGE: 'Welcome to the application',
    SELECT_OPTION:
      'Select the option you want to start working with the id.',
  },
} as const;

export const LOGIN_CONST = {
  TEMPLATE_CONST: {
    USERNAME: 'Username',
    PASSWORD: 'Password',
    SIGNIN: 'Sign In',
  },
  ERROR_MSG: {
    REQUIRED: {
      USERNAME: 'Username is required',
      PASSWORD: 'Password is required',
    },
    MINLENGTH: {
      USERNAME: 'Please enter more than 3 characters',
      LIMIT: 4,
    },
  },
} as const;

export const WIZARD_CONST = {
  TOTAL_NUMBER_OF_WIZARD_STEPS: 9,
  NAVIGATION: [
  ],
};


