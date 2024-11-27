import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AvCheckbox } from 'availity-reactstrap-validation';
import { Input } from 'reactstrap';

describe('AvCheckbox', () => {
  let touched;
  let dirty;
  let error;
  let props;

  beforeEach(() => {
    touched = false;
    dirty = false;
    error = false;
    props = {
      name: 'yo',
    };
  });

  it('should render a reactstrap Input', () => {
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox'); // Use the role "checkbox" for inputs of type checkbox.
    expect(inputElement).toBeInTheDocument();
  });

  it('should have "is-untouched" class when untouched', () => {
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).toHaveClass('is-untouched');
    expect(inputElement).not.toHaveClass('is-touched');
  });

  it('should have "is-pristine" class when not dirty', () => {
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).toHaveClass('is-pristine');
    expect(inputElement).not.toHaveClass('is-dirty');
  });

  it('should have "av-valid" and not "is-invalid" class when valid', () => {
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).toHaveClass('av-valid');
    expect(inputElement).not.toHaveClass('is-invalid');
  });

  it('should toggle classes when touched', () => {
    touched = true;
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).not.toHaveClass('is-untouched');
    expect(inputElement).toHaveClass('is-touched');
  });

  it('should toggle classes when dirty', () => {
    dirty = true;
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).not.toHaveClass('is-pristine');
    expect(inputElement).toHaveClass('is-dirty');
  });

  it('should toggle "is-invalid" and "av-valid" classes when invalid and touched', () => {
    error = true;
    touched = true;
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).not.toHaveClass('av-valid');
    expect(inputElement).toHaveClass('is-invalid');
  });

  it('should update value on change', async () => {
    render(<AvCheckbox {...props} />);
    const inputElement = screen.getByRole('checkbox');
    await userEvent.click(inputElement);
    expect(inputElement.checked).toBe(true); // Checkbox should be checked after click.
  });

  it('should call onChange handler when provided', async () => {
    const handleChange = jest.fn();
    render(<AvCheckbox {...props} onChange={handleChange} />);
    const inputElement = screen.getByRole('checkbox');
    await userEvent.click(inputElement);
    expect(handleChange).toHaveBeenCalled();
  });
});
