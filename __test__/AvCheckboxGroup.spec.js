import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AvCheckboxGroup, AvFeedback } from 'availity-reactstrap-validation';
import '@testing-library/jest-dom';

describe('AvCheckboxGroup', () => {
  let context;

  beforeEach(() => {
    context = {
      FormCtrl: {
        inputs: {},
        getDefaultValue: jest.fn(),
        getInputState: jest.fn(() => ({})),
        hasError: jest.fn(() => false),
        isDirty: jest.fn(() => false),
        isTouched: jest.fn(() => false),
        isBad: jest.fn(() => false),
        isDisabled: jest.fn(() => false),
        isReadOnly: jest.fn(() => false),
        setDirty: jest.fn(),
        setTouched: jest.fn(),
        setBad: jest.fn(),
        register: jest.fn(),
        unregister: jest.fn(),
        validate: jest.fn(),
      },
    };
  });

  it('should render a checkbox group', () => {
    render(<AvCheckboxGroup name="test-checkbox" />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('should register and unregister during lifecycle', () => {
    const { unmount } = render(<AvCheckboxGroup name="test-checkbox" />);
    expect(context.FormCtrl.register).toHaveBeenCalled();
    unmount();
    expect(context.FormCtrl.unregister).toHaveBeenCalled();
  });

  it('should apply validation rules dynamically', () => {
    const { rerender } = render(
      <AvCheckboxGroup name="test-checkbox" required />
    );
    expect(context.FormCtrl.validate).toHaveBeenCalledWith(expect.any(String));

    rerender(<AvCheckboxGroup name="test-checkbox" required={false} />);
    expect(context.FormCtrl.validate).toHaveBeenCalledTimes(1);
  });

  it('should show validation error message', () => {
    context.FormCtrl.getInputState.mockReturnValue({ errorMessage: 'Error!' });
    render(<AvCheckboxGroup name="test-checkbox" />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('should handle value changes correctly', () => {
    const handleChange = jest.fn();
    render(
      <AvCheckboxGroup name="test-checkbox" onChange={handleChange}>
        <input type="checkbox" value="option1" data-testid="checkbox" />
      </AvCheckboxGroup>
    );
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(
      expect.anything(),
      'option1',
      expect.anything()
    );
  });

  it('should render a legend if label is provided', () => {
    render(<AvCheckboxGroup name="test-checkbox" label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should reset correctly when called', () => {
    const handleReset = jest.fn();
    render(
      <AvCheckboxGroup
        name="test-checkbox"
        defaultValue="default"
        onReset={handleReset}
      />
    );
    // Simulate a reset
    expect(handleReset).toHaveBeenCalled();
  });
});
