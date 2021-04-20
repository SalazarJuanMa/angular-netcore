import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MSButtonComponent } from '../projects/shared/src/lib/components/ms-button/ms-button.component';
import { MatButtonModule } from '@angular/material';

export default {
  title: 'MS/Components/Button',
  component: MSButtonComponent,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    size: {
      control: {
        type: 'select',
        options: [
          'default',
          'xs',
          's',
          'm',
          'l',
          'xl',
        ],
      }
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<MSButtonComponent> = (args: MSButtonComponent) => ({
  component: MSButtonComponent,
  moduleMetadata: {
    declarations: [MSButtonComponent],
  },
  props: args,
  template: `<lib-ms-button [mode]="mode" [size]="size" [disabled]="disabled" type="button">Button</lib-ms-button>`,
});

export const Default = Template.bind({});
Default.args = { };

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  size: 'm',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  size: 'm',
};
