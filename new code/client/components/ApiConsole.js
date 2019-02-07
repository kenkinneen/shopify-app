import React, { Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Stack, Card, TextField, Button, DisplayText, Subheading, TextStyle, FormLayout, RangeSlider} from '@shopify/polaris';
import ObjectInspector from 'react-object-inspector';
import { updatePath, updateParams, sendRequest } from '../actions';

import VerbPicker from './VerbPicker';

class ApiConsole extends Component {

  state = {
    value: 12,
    firstText: 'Order within ',
    secondText: 'to recieve your order in 3 business days'
  }

  handleChange = (value) => {
    this.setState({value});
    localStorage.setItem('value', value);
  };

  handleFirstTextChange = (value) => {
    this.setState({ firstText: value });
    localStorage.setItem('firstText', value);
  };

  handleSecondTextChange = (value) => {
    this.setState({ secondText: value });
    localStorage.setItem('secondText', value);
  };

  buttonPressed = (value) => {
    console.log("pressed");
    console.log(value);
  };

  render() {

    return (
      <Layout sectioned>
        { this.renderForm() }
        { this.renderResponse() }
      </Layout>
    )
  }

  renderForm() {
    const { dispatch, requestFields } = this.props;
       
    const suffixStyles = {
      minWidth: '24px',
      textAlign: 'right',
    };

    return (
      <div>
        <Layout.Section>

            <Card title="Text Settings" sectioned>

            <Card.Section>
              <DisplayText size="small">{this.state.firstText}<TextStyle variation="strong">1 hour and 23 minutes </TextStyle>
               {this.state.secondText}</DisplayText>
            </Card.Section>

            <Card.Section>
            <FormLayout>

              <TextField
                value={this.state.firstText}
                onChange={this.handleFirstTextChange}
              />

              <TextField
                value={this.state.secondText}
                onChange={this.handleSecondTextChange}
              />

              <RangeSlider
                label="Cut Off Time"
                min={0}
                max={24}
                value={this.state.value}
                onChange={this.handleChange}
                suffix={<p style={suffixStyles}>{this.state.value}:00 Hours</p>}
              />

              <Button primary onClick={this.buttonPressed} >Save theme</Button>

              </FormLayout>
            </Card.Section>
         
            </Card>

            <Stack>

            <VerbPicker verb={requestFields.verb} />
            <TextField
              value='Order within'
              onChange={path => dispatch(updatePath(path))}
            />
            <TextField
              value={requestFields.path}
              onChange={path => dispatch(updatePath(path))}
            />
            <Button primary onClick={() => dispatch(sendRequest(requestFields))}>
              Sends
            </Button>
          </Stack>
        </Layout.Section>

        {this.renderParams()}
      </div>
    )
  }

  renderParams() {
    const { dispatch, requestFields } = this.props;

    if (requestFields.verb === 'GET') {
      return null;
    } else {
      return (
        <Layout.Section>
          <TextField
            label="Request Params"
            value={requestFields.params}
            onChange={params => dispatch(updateParams(params))}
            multiline={12}
          />
        </Layout.Section>
      );
    }
  }

  renderResponse() {
    const { requestInProgress, requestError, responseBody } = this.props;

    if (responseBody === '') {
      return null;
    }

    if (requestInProgress) {
      return (
        <Layout.Section>
          'requesting...';
        </Layout.Section>
      )
    }

    const data = JSON.parse(responseBody)

    return (
      <Layout.Section>
        <Card>
          <div style={{margin: '15px 15px'}}>
            <ObjectInspector data={data} initialExpandedPaths={['root', 'root.*']}/>
          </div>
        </Card>
      </Layout.Section>
    )
  }
}

function mapStateToProps({
  requestFields,
  requestInProgress,
  requestError,
  responseBody,
}) {
  return {
    requestFields,
    requestInProgress,
    requestError,
    responseBody,
  };
}

export default connect(mapStateToProps)(ApiConsole);
