import React from 'react';
import { render, screen } from '@testing-library/react';
import { AvFeedback } from 'availity-reactstrap-validation';
import { FormFeedback } from 'reactstrap';
import '@testing-library/jest-dom';

describe('AvFeedback', () => {
  describe('when there is an error', () => {
    it('should render with "FormFeedback"', () => {
      const { container } = render(<AvFeedback>Yo!</AvFeedback>);
      const feedbackComponent = container.querySelector('.invalid-feedback');
      expect(feedbackComponent).toBeInTheDocument();
    });

    it('should render children inside the FormFeedback', () => {
      render(<AvFeedback>Yo!</AvFeedback>);
      expect(screen.getByText('Yo!')).toBeInTheDocument();
    });

    it('should render with the props passed in', () => {
      const { container } = render(
        <AvFeedback style={{ textAlign: 'center' }}>Yo!</AvFeedback>
      );
      const feedbackComponent = container.querySelector('.invalid-feedback');
      expect(feedbackComponent).toHaveStyle({ textAlign: 'center' });
    });
  });
});
