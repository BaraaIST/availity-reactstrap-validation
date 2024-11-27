import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvInput } from 'availity-reactstrap-validation';
import { Input } from 'reactstrap';

let options;
let touched;
let dirty;
let bad;
let error;

describe('AvInput', () => {
  beforeEach(() => {
    touched = false;
    dirty = false;
    bad = false;
    error = false;
    options = {
      context: {
        FormCtrl: {
          inputs: {},
          getDefaultValue: jest.fn(),
          getInputState: jest.fn(),
          hasError: () => error,
          isDirty: () => dirty,
          isTouched: () => touched,
          isBad: () => bad,
          isDisabled: () => false,
          isReadOnly: () => false,
          setDirty: jest.fn(),
          setTouched: jest.fn(),
          setBad: jest.fn(),
          register: jest.fn(),
          unregister: jest.fn(),
          validate: jest.fn(),
          validationEvent: jest.fn(),
          parent: null,
        },
      },
    };
  });

  it('should render a reactstrap Input', () => {
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should have "is-untouched" class when untouched', () => {
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('is-untouched');
    expect(input).not.toHaveClass('is-touched');
  });

  it('should have "is-pristine" class when not dirty', () => {
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('is-pristine');
    expect(input).not.toHaveClass('is-dirty');
  });

  it('should have "av-valid" not "is-invalid" class when valid', () => {
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('av-valid');
    expect(input).not.toHaveClass('is-invalid');
  });

  it('should not have "is-bad-input" class when the input is not "bad"', () => {
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveClass('is-bad-input');
  });

  it('should have "is-touched" class when touched', () => {
    touched = true;
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveClass('is-untouched');
    expect(input).toHaveClass('is-touched');
  });

  it('should have "is-dirty" class when dirty', () => {
    dirty = true;
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveClass('is-pristine');
    expect(input).toHaveClass('is-dirty');
  });

  it('should have "is-invalid" class when invalid and touched', () => {
    error = true;
    touched = true;
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveClass('av-valid');
    expect(input).toHaveClass('is-invalid');
  });

  it('should have "is-bad-input" class when the input is bad', () => {
    bad = true;
    render(<AvInput name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('is-bad-input');
  });

  it('should allow custom classes', () => {
    render(<AvInput name="yo" className="yo-yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('yo-yo');
  });

  it('should pass props through to reactstrap\'s Input', () => {
    render(<AvInput name="yo" type="number" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'number');
  });
});
