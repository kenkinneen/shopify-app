import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
  DisplayText,
  RangeSlider
} from '@shopify/polaris';

import store from 'store-js';

console.log(store);

const shopify = new Shopify({
  shopName: 'eken-2',
  accessToken: 'your-oauth-token'
});


class AnnotatedLayout extends React.Component {

  state = {
    discount: '10%',
    enabled: false,
    value: 12,
    firstText: 'Order within ',
    secondText: 'to recieve your order in 3 business days'
  }

  handleChanges = (value) => {
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

    Shopify.get('/admin/products.json', query_data, function(err, data, headers){
      console.log(data); // Data contains product json information
      console.log(headers); // Headers returned from request
    });

  };

  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';

    console.log("gotten");

    const suffixStyles = {
      minWidth: '24px',
      textAlign: 'right',
    };

    return (
       <Page>
        <Layout>

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
                onChange={this.handleChanges}
                suffix={<p style={suffixStyles}>{this.state.value}:00 Hours</p>}
              />

              <Button primary onClick={this.buttonPressed} >Save theme</Button>

              </FormLayout>
            </Card.Section>
         
            </Card>
          </Layout.Section>

          <Layout.AnnotatedSection
            title="Default discount"
            description="When you add a product to Sample App, it will automatically be discounted by this percentage."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
           <Layout.AnnotatedSection
             title="Price updates"
             description="Temporarily disable all Sample App price updates"
           >
             <SettingToggle
               action={{
                 content: contentStatus,
                 onAction: this.handleToggle,
               }}
               enabled={enabled}
             >
               This setting is{' '}
               <TextStyle variation="strong">{textStatus}</TextStyle>.
             </SettingToggle>
           </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
 handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  };
  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };
    handleToggle = () => {
     this.setState(({ enabled }) => {
       return { enabled: !enabled };
     });
   };
}

export default AnnotatedLayout;