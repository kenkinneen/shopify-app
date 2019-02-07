import React, { Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Stack, Card, TextField, Button, DisplayText, Subheading, TextStyle, FormLayout, RangeSlider} from '@shopify/polaris';
import ObjectInspector from 'react-object-inspector';
import { updatePath, updateFirstText, updateSecondText, sendRequest, saveSnippet, updateHTMLoutput } from '../actions';

import VerbPicker from './VerbPicker';


  var htmlString1 = ' {"asset":{"key":"snippets/order-within-snippet.liquid","value":"<p>' 

  var htmlString2 = "<span id='hours' class='blue-bold'></span>" 

  var htmlString3 = 
  "<span class='blue-bold'> 2 business days</span>.</p>" +     
  "<script>(function() {var start = new Date;start.setHours(16, 0, 0); function pad(num) {return ('0' + parseInt(num)).substr(-2);}" +
  "function tick() {var now = new Date;if (now > start) { start.setDate(start.getDate() + 1);}" +
  "var remain = ((start - now) / 1000); var hh = pad((remain / 60 / 60) % 60); var newhh = parseInt(hh, 10);" +
  "var mm = pad((remain / 60) % 60); var ss = pad(remain % 60); document.getElementById('hours').innerHTML =' '+ newhh + ' hours and ' + mm + ' minutes ';" +
  "setTimeout(tick, 10000);} document.addEventListener('DOMContentLoaded', tick);})();</script>" +
  '<style> .countdown-timer { text-align:center } .blue-bold { color:blue; font-weight:600; } </style>"}}'


class ApiConsole extends Component {

  state = {
    value: 12,
    firstText: 'Order within ',
    secondText: 'to recieve your order in 3 business days'
  }

  render() {

    return (
      <Layout sectioned>
        { this.renderForm() }
        { this.renderResponse() }
      </Layout>
    )
  }

  renderForm() {
    const { dispatch, requestFields, htmlOptions } = this.props;
       
    const suffixStyles = {
      minWidth: '24px',
      textAlign: 'right',
    };

    const htmlOutput = "sdfsdfsd";

    return (
      <div>
        <Layout.Section>

            <Card title="Text Settings" sectioned>

            <Card.Section>
              <DisplayText size="small">{htmlOptions.firstText}<TextStyle variation="strong"> 1 hour and 23 minutes </TextStyle>
               {htmlOptions.secondText}</DisplayText>
            </Card.Section>

            <Card.Section>
            <FormLayout>

              <TextField
                value={htmlOptions.firstText}
                onChange={firstText => dispatch(updateFirstText(firstText))}
              />

              <TextField
                value={htmlOptions.secondText}
                onChange={secondText => dispatch(updateSecondText(secondText))}
              />

              <RangeSlider
                label="Cut Off Time"
                min={0}
                max={24}
                value={this.state.value}
                onChange={this.handleChange}
                suffix={<p style={suffixStyles}>{this.state.value}:00 Hours</p>}
              />

              <Button primary onClick={() => dispatch(
                updateHTMLoutput( htmlString1 + htmlOptions.firstText + htmlString2 +  htmlOptions.secondText + htmlString3))} > 
                Update Message </Button>
            </FormLayout>
            </Card.Section>
         
            </Card>

            <Stack>

            <VerbPicker verb={requestFields.verb} />

            <TextField
              value='/storefront_access_tokens.json'
              onChange={path => dispatch(updatePath('/storefront_access_tokens.json'))}
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
    const { dispatch, requestFields, htmlOptions} = this.props;

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
  htmlOptions,
  requestFields,
  requestInProgress,
  requestError,
  responseBody,
}) {
  return {
    htmlOptions,
    requestFields,
    requestInProgress,
    requestError,
    responseBody,
  };
}

export default connect(mapStateToProps)(ApiConsole);
