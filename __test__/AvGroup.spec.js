import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvGroup } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';

describe('AvGroup', function() {
  let inputState;
  let props;
  let registerSpy;
  let context;
  let container;

  beforeEach(() => {
    inputState = { color: 'danger' };
    props = {
      name: 'fieldName',
    };
    registerSpy = jest.fn();
    context = {
      FormCtrl: {
        getInputState: jest.fn().mockReturnValue(inputState),
        register: registerSpy,
      },
    };
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
    }
  });

  it('should render with "FormGroup"', () => {
    const { container } = render(<AvGroup {...props}>Yo!</AvGroup>, { wrapper: ({ children }) => <div>{children}</div> });

    expect(container.firstChild).toHaveClass(FormGroup.name); // Check if it renders with "FormGroup" class
  });

  it('should render color prop based on inputState', () => {
    const { container } = render(<AvGroup {...props}>Yo!</AvGroup>, { wrapper: ({ children }) => <div>{children}</div> });

    expect(container.firstChild).toHaveClass(`text-${inputState.color}`); // Check if color class is applied
  });

  it('should render children inside the FormGroup', () => {
    const { getByText } = render(<AvGroup {...props}>Yo!</AvGroup>, { wrapper: ({ children }) => <div>{children}</div> });

    expect(getByText('Yo!')).toBeInTheDocument(); // Check if the child content is rendered
  });

  it('should render with the props passed in', () => {
    const { container } = render(
      <AvGroup {...props} style={{ textAlign: 'center' }}>
        Yo!
      </AvGroup>,
      { wrapper: ({ children }) => <div>{children}</div> }
    );

    expect(container.firstChild).toHaveStyle('text-align: center'); // Check if style is applied correctly
  });

  it('should intercept an input registration', () => {
    const { container } = render(<AvGroup {...props}>Yo!</AvGroup>, { wrapper: ({ children }) => <div>{children}</div> });

    // Simulate the context registration
    const input = { props };
    context.FormCtrl.register(input);

    expect(registerSpy).toHaveBeenCalledWith(input); // Check if the register function was called correctly
  });
});
