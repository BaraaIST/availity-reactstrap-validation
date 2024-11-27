/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Use SyntaxHighlighter from react-syntax-highlighter
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // You can pick a theme that suits your needs
import Helmet from 'react-helmet';

import CheckboxExample from '../examples/Checkbox';
const CheckboxExampleSource = require('!!raw!../examples/Checkbox.js');
import CheckboxTrueValueExample from '../examples/CheckboxTrueValue';
const CheckboxTrueValueExampleSource = require('!!raw!../examples/CheckboxTrueValue.js');
import CheckboxFalseValueExample from '../examples/CheckboxFalseValue';
const CheckboxFalseValueExampleSource = require('!!raw!../examples/CheckboxFalseValue.js');
import CheckboxDefaultExample from '../examples/CheckboxDefault';
const CheckboxDefaultExampleSource = require('!!raw!../examples/CheckboxDefault.js');

export default class CheckboxPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Checkboxes" />
        <h3>Checkboxes</h3>
        <p>
          Checkboxes are slightly special as the user cannot define a value, but only check and uncheck the box.
          There are special props, <code>trueValue</code> and <code>falseValue</code> which allow you to determine what
          the value returned will be when the box is checked or not checked respectively. <code>trueValue</code> will
          default to <code>true</code> and <code>falseValue</code> will default to <code>false</code>.
        </p>
        <div className="docs-example">
          <CheckboxExample />
        </div>
        <pre>
          <SyntaxHighlighter language="jsx" style={solarizedlight}>
            {CheckboxExampleSource}
          </SyntaxHighlighter>
        </pre>

        <h4>True Value</h4>
        <p>
          Checking the boxes and submitting the form, you will see the value passed is the <code>trueValue</code> for
          the checkbox; <code>true</code> by default.
        </p>
        <div className="docs-example">
          <CheckboxTrueValueExample />
        </div>
        <pre>
          <SyntaxHighlighter language="jsx" style={solarizedlight}>
            {CheckboxTrueValueExampleSource}
          </SyntaxHighlighter>
        </pre>

        <h4>False Value</h4>
        <p>
          Leaving the boxes unchecked and submitting the form, you will see the value passed is the
          <code>falseValue</code> for the checkbox; <code>false</code> by default.
        </p>
        <div className="docs-example">
          <CheckboxFalseValueExample />
        </div>
        <pre>
          <SyntaxHighlighter language="jsx" style={solarizedlight}>
            {CheckboxFalseValueExampleSource}
          </SyntaxHighlighter>
        </pre>

        <h4>Model Default Values</h4>
        <p>
          Using the model prop on the form, you can indicate if the checkboxes should be checked or unchecked when
          initialized by providing the trueValue or falseValue in the model prop on the form.
        </p>
        <div className="docs-example">
          <CheckboxDefaultExample />
        </div>
        <pre>
          <SyntaxHighlighter language="jsx" style={solarizedlight}>
            {CheckboxDefaultExampleSource}
          </SyntaxHighlighter>
        </pre>
      </div>
    );
  }
}
