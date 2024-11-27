/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import ValidationCustomMessageExample from '../examples/ValidationCustomMessage.js';
const ValidationCustomMessageExampleSource = require('!!raw!../examples/ValidationCustomMessage.js');
import ValidationDateExample from '../examples/ValidationDate';
const ValidationDateExampleSource = require('!!raw!../examples/ValidationDate.js');
import ValidationDateRangeExample from '../examples/ValidationDateRange';
const ValidationDateRangeExampleSource = require('!!raw!../examples/ValidationDateRange.js');
import ValidationDateTimeExample from '../examples/ValidationDateTime';
const ValidationDateTimeExampleSource = require('!!raw!../examples/ValidationDateTime.js');
import ValidationEmailExample from '../examples/ValidationEmail';
const ValidationEmailExampleSource = require('!!raw!../examples/ValidationEmail.js');
import ValidationMatchExample from '../examples/ValidationMatch';
const ValidationMatchExampleSource = require('!!raw!../examples/ValidationMatch.js');
import ValidationMaxExample from '../examples/ValidationMax';
const ValidationMaxExampleSource = require('!!raw!../examples/ValidationMax.js');
import ValidationMaxLengthExample from '../examples/ValidationMaxLength';
const ValidationMaxLengthExampleSource = require('!!raw!../examples/ValidationMaxLength.js');
import ValidationMaxCheckedExample from '../examples/ValidationMaxChecked';
const ValidationMaxCheckedExampleSource = require('!!raw!../examples/ValidationMaxChecked.js');
import ValidationMinExample from '../examples/ValidationMin';
const ValidationMinExampleSource = require('!!raw!../examples/ValidationMin.js');
import ValidationMinLengthExample from '../examples/ValidationMinLength';
const ValidationMinLengthExampleSource = require('!!raw!../examples/ValidationMinLength.js');
import ValidationMinCheckedExample from '../examples/ValidationMinChecked';
const ValidationMinCheckedExampleSource = require('!!raw!../examples/ValidationMinChecked.js');
import ValidationNpiExample from '../examples/ValidationNpi';
const ValidationNpiExampleSource = require('!!raw!../examples/ValidationNpi.js');
import ValidationNumberExample from '../examples/ValidationNumber';
const ValidationNumberExampleSource = require('!!raw!../examples/ValidationNumber.js');
import ValidationPatternExample from '../examples/ValidationPattern';
const ValidationPatternExampleSource = require('!!raw!../examples/ValidationPattern.js');
import ValidationPhoneExample from '../examples/ValidationPhone';
const ValidationPhoneExampleSource = require('!!raw!../examples/ValidationPhone.js');
import ValidationRequiredExample from '../examples/ValidationRequired';
const ValidationRequiredExampleSource = require('!!raw!../examples/ValidationRequired.js');
import ValidationStepExample from '../examples/ValidationStep';
const ValidationStepExampleSource = require('!!raw!../examples/ValidationStep.js');
import ValidationAsyncExample from '../examples/ValidationAsync';
const ValidationAsyncExampleSource = require('!!raw!../examples/ValidationAsync.js');

export default class FormPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Validators" />
        <h3>Validations</h3>
        <hr />
        
        {/* Custom error messages */}
        <h4>Custom error messages</h4>
        <div className="docs-example">
          <ValidationCustomMessageExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationCustomMessageExampleSource}
          </PrismCode>
        </pre>

        {/* Date validation */}
        <h4>Date</h4>
        <div className="docs-example">
          <ValidationDateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationDateExampleSource}
          </PrismCode>
        </pre>

        {/* DateRange validation */}
        <h4>DateRange</h4>
        <div className="docs-example">
          <ValidationDateRangeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationDateRangeExampleSource}
          </PrismCode>
        </pre>

        {/* DateTime validation */}
        <h4>DateTime</h4>
        <div className="docs-example">
          <ValidationDateTimeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationDateTimeExampleSource}
          </PrismCode>
        </pre>

        {/* Email validation */}
        <h4>Email</h4>
        <div className="docs-example">
          <ValidationEmailExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationEmailExampleSource}
          </PrismCode>
        </pre>

        {/* Match validation */}
        <h4>Match</h4>
        <div className="docs-example">
          <ValidationMatchExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMatchExampleSource}
          </PrismCode>
        </pre>

        {/* Max validation */}
        <h4>Max</h4>
        <div className="docs-example">
          <ValidationMaxExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMaxExampleSource}
          </PrismCode>
        </pre>

        {/* MaxLength validation */}
        <h4>MaxLength</h4>
        <div className="docs-example">
          <ValidationMaxLengthExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMaxLengthExampleSource}
          </PrismCode>
        </pre>

        {/* MaxChecked validation */}
        <h4>MaxChecked</h4>
        <div className="docs-example">
          <ValidationMaxCheckedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMaxCheckedExampleSource}
          </PrismCode>
        </pre>

        {/* Min validation */}
        <h4>Min</h4>
        <div className="docs-example">
          <ValidationMinExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMinExampleSource}
          </PrismCode>
        </pre>

        {/* MinLength validation */}
        <h4>MinLength</h4>
        <div className="docs-example">
          <ValidationMinLengthExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMinLengthExampleSource}
          </PrismCode>
        </pre>

        {/* MinChecked validation */}
        <h4>MinChecked</h4>
        <div className="docs-example">
          <ValidationMinCheckedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationMinCheckedExampleSource}
          </PrismCode>
        </pre>

        {/* Npi validation */}
        <h4>Npi</h4>
        <div className="docs-example">
          <ValidationNpiExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationNpiExampleSource}
          </PrismCode>
        </pre>

        {/* Number validation */}
        <h4>Number</h4>
        <div className="docs-example">
          <ValidationNumberExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationNumberExampleSource}
          </PrismCode>
        </pre>

        {/* Pattern validation */}
        <h4>Pattern</h4>
        <div className="docs-example">
          <ValidationPatternExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationPatternExampleSource}
          </PrismCode>
        </pre>

        {/* Phone validation */}
        <h4>Phone</h4>
        <p>Note: Validates against NANP</p>
        <div className="docs-example">
          <ValidationPhoneExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationPhoneExampleSource}
          </PrismCode>
        </pre>

        {/* Required validation */}
        <h4>Required</h4>
        <div className="docs-example">
          <ValidationRequiredExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationRequiredExampleSource}
          </PrismCode>
        </pre>

        {/* Step validation */}
        <h4>Step</h4>
        <p>Note: Only works only with input type of numbers</p>
        <div className="docs-example">
          <ValidationStepExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationStepExampleSource}
          </PrismCode>
        </pre>

        {/* Custom / Async validation */}
        <h4>Custom / Async</h4>
        <div className="docs-example">
          <ValidationAsyncExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ValidationAsyncExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
