import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvField, AvGroup } from 'availity-reactstrap-validation';
import { Label, Col, FormText, AvInput, AvFeedback } from 'reactstrap';

let state = {};
const options = {
  context: {
    FormCtrl: {
      getInputState: () => state,
    },
  },
};

const stdProps = { name: 'testing', label: 'Test Label' };

describe('AvField', function() {
  beforeEach(() => {
    state = {};
  });

  describe('structure', () => {
    describe('default', () => {
      beforeEach(() => {
        this.wrapper = render(<AvField {...stdProps}>Yo!</AvField>, options);
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the AvGroup after the label', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(2); // Label and AvInput
      });
    });

    describe('grid', () => {
      beforeEach(() => {
        this.wrapper = render(
          <AvField {...stdProps} grid={{ xs: 8 }}>
            Yo!
          </AvField>,
          options
        );
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render a "Col" inside the AvGroup after the label', () => {
        const col = this.wrapper.container.querySelector(Col);
        expect(col).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the Col', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should not render anything else inside the Col', () => {
        const colChildren = this.wrapper.container.querySelectorAll(Col);
        expect(colChildren.length).toBe(1); // Only one AvInput in Col
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(2); // Label and Col
      });
    });
  });

  describe('with error message', () => {
    describe('default', () => {
      beforeEach(() => {
        state.errorMessage = 'error!';
        this.wrapper = render(<AvField {...stdProps}>Yo!</AvField>, options);
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the AvGroup after the label', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should render an "AvFeedback" inside the AvGroup after the AvInput', () => {
        const feedback = this.wrapper.container.querySelector(AvFeedback);
        expect(feedback).toBeInTheDocument();
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(3); // Label, AvInput, and AvFeedback
      });
    });

    describe('grid', () => {
      beforeEach(() => {
        state.errorMessage = 'error!';
        this.wrapper = render(
          <AvField {...stdProps} grid={{ xs: 8 }}>
            Yo!
          </AvField>,
          options
        );
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render a "Col" inside the AvGroup after the label', () => {
        const col = this.wrapper.container.querySelector(Col);
        expect(col).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the Col', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should render an "AvFeedback" inside the Col after the AvInput', () => {
        const feedback = this.wrapper.container.querySelector(AvFeedback);
        expect(feedback).toBeInTheDocument();
      });

      it('should not render anything else inside the Col', () => {
        const colChildren = this.wrapper.container.querySelectorAll(Col);
        expect(colChildren.length).toBe(1); // Only one AvInput and AvFeedback in Col
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(2); // Label and Col
      });
    });
  });

  describe('with help message', () => {
    describe('default', () => {
      beforeEach(() => {
        this.wrapper = render(
          <AvField {...stdProps} helpMessage="yo">
            Yo!
          </AvField>,
          options
        );
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the AvGroup after the label', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should render an "FormText" inside the AvGroup after the AvInput', () => {
        const formText = this.wrapper.container.querySelector(FormText);
        expect(formText).toBeInTheDocument();
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(3); // Label, AvInput, and FormText
      });
    });

    describe('grid', () => {
      beforeEach(() => {
        this.wrapper = render(
          <AvField {...stdProps} grid={{ xs: 8 }} helpMessage="yo">
            Yo!
          </AvField>,
          options
        );
      });

      it('should render with "AvGroup"', () => {
        expect(this.wrapper.container.firstChild).toHaveClass('av-group');
      });

      it('should render a "Label" first inside the AvGroup', () => {
        const label = this.wrapper.container.querySelector('label');
        expect(label).toBeInTheDocument();
      });

      it('should render a "Col" inside the AvGroup after the label', () => {
        const col = this.wrapper.container.querySelector(Col);
        expect(col).toBeInTheDocument();
      });

      it('should render an "AvInput" inside the Col', () => {
        const input = this.wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
      });

      it('should render an "FormText" inside the Col after the AvInput', () => {
        const formText = this.wrapper.container.querySelector(FormText);
        expect(formText).toBeInTheDocument();
      });

      it('should not render anything else inside the Col', () => {
        const colChildren = this.wrapper.container.querySelectorAll(Col);
        expect(colChildren.length).toBe(1); // Only one AvInput and FormText in Col
      });

      it('should not render anything else', () => {
        expect(this.wrapper.container.children.length).toBe(2); // Label and Col
      });
    });
  });

  describe('AvGroup', () => {
    it('should pass the "row" prop through', () => {
      const { container } = render(
        <AvField {...stdProps} grid={{ xs: 8 }}>
          Yo!
        </AvField>,
        options
      );
      expect(container.firstChild).toHaveAttribute('row');
    });

    it('should pass the "disabled" prop through', () => {
      const { container } = render(
        <AvField {...stdProps} disabled>
          Yo!
        </AvField>,
        options
      );
      expect(container.firstChild).toHaveAttribute('disabled');
    });

    it('should spread the "groupAttrs" prop on it', () => {
      const { container } = render(
        <AvField {...stdProps} groupAttrs={{ 'data-test': '123' }}>
          Yo!
        </AvField>,
        options
      );
      expect(container.firstChild).toHaveAttribute('data-test', '123');
    });
  });
});
