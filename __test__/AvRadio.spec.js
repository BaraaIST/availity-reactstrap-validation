import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvRadio } from 'availity-reactstrap-validation';
import { Input } from 'reactstrap';

let options;
let props;
let inputState;
let component;
let touched;
let dirty;
let bad;
let error;

describe('AvRadio', () => {
  beforeEach(() => {
    touched = false;
    dirty = false;
    bad = false;
    error = false;
    inputState = 'danger';
    props = {
      name: 'fieldName',
      value: 'testValue',
    };
    options = {
      context: {
        Group: {
          getProps: () => ({
            name: 'test',
          }),
          update: jest.fn(),
        },
        FormCtrl: {
          inputs: {},
          getDefaultValue: jest.fn(),
          getInputState: jest.fn().mockReturnValue(inputState),
          hasError: () => error,
          isDirty: () => dirty,
          isTouched: () => touched,
          isBad: () => bad,
          setDirty: jest.fn(),
          setTouched: jest.fn(),
          setBad: jest.fn(),
          register: jest.fn(),
          unregister: jest.fn(),
          validate: jest.fn(),
          getValidationEvent: () => 'formCtrlValidationEvent',
          validation: {},
          parent: null,
        },
      },
    };

    component = new AvRadio(props);
    component.context = options.context;
  });

  it('should render a reactstrap Input', () => {
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should have "is-untouched" class when untouched', () => {
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).toHaveClass('is-untouched');
    expect(input).not.toHaveClass('is-touched');
  });

  it('should have "is-pristine" class when not dirty', () => {
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).toHaveClass('is-pristine');
    expect(input).not.toHaveClass('is-dirty');
  });

  it('should have "av-valid" not "is-invalid" class when valid', () => {
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).toHaveClass('av-valid');
    expect(input).not.toHaveClass('is-invalid');
  });

  it('should have "is-touched" class when touched', () => {
    touched = true;
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).not.toHaveClass('is-untouched');
    expect(input).toHaveClass('is-touched');
  });

  it('should have "is-dirty" class when dirty', () => {
    dirty = true;
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).not.toHaveClass('is-pristine');
    expect(input).toHaveClass('is-dirty');
  });

  it('should have "is-invalid" class when invalid and touched', () => {
    error = true;
    touched = true;
    const { container } = render(<AvRadio name="yo" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).not.toHaveClass('av-valid');
    expect(input).toHaveClass('is-invalid');
  });

  it('should render the value as string in the Input field', () => {
    const { container } = render(<AvRadio name="yo" value="yes" />, { wrapper: ({ children }) => <div>{children}</div> });
    const input = container.querySelector('input');
    expect(input).toHaveValue('yes');
  });

  describe('on change handler', () => {
    it('should update group value on change', () => {
      const event = { target: { value: 'newValue' } };
      component.onChangeHandler(event);
      expect(options.context.Group.update).toHaveBeenCalledWith(event, props.value);
    });

    it('should run props onChange handler if it\'s there', () => {
      props.onChange = jest.fn();
      component.onChangeHandler();
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
