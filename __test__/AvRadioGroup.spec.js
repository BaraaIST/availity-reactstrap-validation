import React from 'react';
import { render, unmountComponentAtNode, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvRadioGroup, AvFeedback } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';

let options;

describe('AvRadioGroup', () => {
  let touched;
  let dirty;
  let bad;
  let error;

  beforeEach(() => {
    touched = false;
    dirty = false;
    bad = false;
    error = false;
    options = {
      context: {
        FormCtrl: {
          inputs: {},
          getDefaultValue: () => {},
          getInputState: () => ({}),
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
          getValidationEvent: () => {},
          validation: {},
          parent: null,
        },
      },
    };
  });

  it('should render a reactstrap Input', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should register a validation', () => {
    const { container } = render(<AvRadioGroup name="yo" required />, options);
    const instance = container.firstChild.instance;
    expect(instance.validations.required.value).toBe(true);
  });

  it('should register then remove a disabled validation', () => {
    const { container, rerender } = render(<AvRadioGroup name="yo" required />, options);
    const instance = container.firstChild.instance;
    expect(instance.validations.required.value).toBe(true);
    rerender(<AvRadioGroup name="yo" required={false} />, options);
    expect(instance.validations.required).toBeUndefined();
  });

  it('should return the set value', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    const component = container.firstChild.instance;
    component.value = 'boop';
    expect(component.getValue()).toBe('boop');
  });

  it('should unregister when unmounted', () => {
    const { container, unmount } = render(<AvRadioGroup name="yo" />, options);
    unmount();
    expect(options.context.FormCtrl.unregister).toHaveBeenCalled();
  });

  it('should give default value from value prop', () => {
    const { container } = render(<AvRadioGroup name="yo" value="momo" />, options);
    const component = container.firstChild.instance;
    expect(component.value).toBe('momo');
  });

  it('should give default value from defaultValue prop when there is no value prop', () => {
    const { container } = render(<AvRadioGroup name="yo" defaultValue="momo" />, options);
    const component = container.firstChild.instance;
    expect(component.value).toBe('momo');
  });

  it('should update the value when the value prop changes', () => {
    const { container, rerender } = render(<AvRadioGroup name="yo" defaultValue="momo" />, options);
    const component = container.firstChild.instance;
    expect(component.getValue()).toBe('momo');
    rerender(<AvRadioGroup name="yo" value="yoyo" />, options);
    expect(component.getValue()).toBe('yoyo');
  });

  it('should update the validations when the props change', () => {
    const { container, rerender } = render(<AvRadioGroup name="yo" defaultValue="momo" />, options);
    const component = container.firstChild.instance;
    const spy = jest.spyOn(component, 'updateValidations');
    rerender(<AvRadioGroup name="yo" required />, options);
    expect(spy).toHaveBeenCalled();
  });

  it('should not update the validations when the props did not change', () => {
    const { container, rerender } = render(<AvRadioGroup name="yo" defaultValue="momo" />, options);
    const component = container.firstChild.instance;
    const spy = jest.spyOn(component, 'updateValidations');
    rerender(<AvRadioGroup name="yo" defaultValue="momo" />, options);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should give default value from context', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    const component = container.firstChild.instance;
    component.context.FormCtrl.getDefaultValue = () => {
      return 'jiri';
    };
    expect(component.getDefaultValue()).toEqual({ key: 'defaultValue', value: 'jiri' });
  });

  it('should give default fallback when no one set up their stuff', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    const component = container.firstChild.instance;
    expect(component.getDefaultValue()).toEqual({ key: 'defaultValue', value: '' });
  });

  it('should reset properly', () => {
    const { container } = render(<AvRadioGroup name="test" defaultValue="momo" />, options);
    const component = container.firstChild.instance;
    component.setState = jest.fn();
    component.reset();
    expect(component.value).toBe('momo');
    expect(component.setState).toHaveBeenCalledWith({ value: 'momo' });
    expect(options.context.FormCtrl.setDirty).toHaveBeenCalledWith('test', false);
    expect(options.context.FormCtrl.setTouched).toHaveBeenCalledWith('test', false);
    expect(options.context.FormCtrl.setBad).toHaveBeenCalledWith('test', false);
    expect(options.context.FormCtrl.validate).toHaveBeenCalledWith('test');
  });

  it('should reset properly and call props reset', () => {
    const spy = jest.fn();
    const { container } = render(<AvRadioGroup defaultValue="momo" name="test" onReset={spy} />, options);
    const component = container.firstChild.instance;
    component.reset();
    expect(spy).toHaveBeenCalledWith('momo');
  });

  it('should disconnect child context from form registration and validation', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    const component = container.firstChild.instance;
    options.context.FormCtrl.register.mockReset();
    options.context.FormCtrl.validate.mockReset();
    component.getChildContext().FormCtrl.register('charmander');
    component.getChildContext().FormCtrl.validate('squirtle');
    expect(options.context.FormCtrl.register).not.toHaveBeenCalled();
    expect(options.context.FormCtrl.validate).not.toHaveBeenCalled();
  });

  it('should update the group via child context', () => {
    const { container } = render(<AvRadioGroup name="yo" />, options);
    const component = container.firstChild.instance;
    component.setState = jest.fn();
    component.getChildContext().Group.update({}, 'momo');
    expect(component.value).toBe('momo');
    expect(component.setState).toHaveBeenCalledWith({ value: 'momo' });
    expect(options.context.FormCtrl.validate).toHaveBeenCalled();
  });

  it('should trigger the change callback when the value is updated', () => {
    const spy = jest.fn();
    const { container } = render(<AvRadioGroup name="yo" onChange={spy} />, options);
    const component = container.firstChild.instance;
    const event = {};
    component.getChildContext().Group.update(event, 'momo').then(() => {
      expect(spy).toHaveBeenCalledWith(event, 'momo');
    });
  });

  it('should render validation message when sent', () => {
    options.context.FormCtrl.getInputState = () => {
      return { errorMessage: 'WHAT ARE YOU DOING?!' };
    };
    const { container } = render(<AvRadioGroup name="yo" />, options);
    expect(container.querySelector(AvFeedback).textContent).toBe('WHAT ARE YOU DOING?!');
  });

  it('should show a legend if we defined a label', () => {
    const { container } = render(<AvRadioGroup name="yo" label="test" />, options);
    expect(container.querySelector('legend')).toHaveTextContent('test');
  });
});
