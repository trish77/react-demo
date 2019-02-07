import React, { Component } from 'react';
import { styled, Provider, Group, Field, Label, Input, Button } from 'reakit';
import theme  from 'reakit-theme-default';

// Set custom styles using styled()
const StyledField = styled(Field)`
  padding: 5px 10px;
`;
const StyledInput = styled(Input)`
  border: 1px solid #777;
  margin-top: 3px;
`;
const StyledButton = styled(Button)`
  margin: 5px 10px 10px;
`;


class CustomerInfo extends Component {
    render() {
        return (
            <Provider theme={theme}>
              <Group vertical> {/* Groups the entire form as a single child */}
                <Field> {/* Groups label and input as a field */}
                  <Label>
                    First name <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    Last name <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    Email <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    <Input type="checkbox" /> Subscribe to our newsletter!
                  </Label>
                </Field>
                <Field>
                  <Label>
                    Address <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    City <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    State <Input />
                  </Label>
                </Field>
                <Field>
                  <Label>
                    Zip <Input />
                  </Label>
                </Field>
                <Button>Submit</Button>
             
          <StyledField> {/* Use the styled version of Field */}
            <Label>
              First name <StyledInput /> {/* Use the styled version of Input */}
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              Last name <StyledInput />
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              Email <StyledInput />
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              <StyledInput type="checkbox" /> Subscribe to our newsletter!
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              Address <StyledInput />
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              City <StyledInput />
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              State <StyledInput />
            </Label>
          </StyledField>
          <StyledField>
            <Label>
              Zip <StyledInput />
            </Label>
          </StyledField>
          <StyledButton>Submit</StyledButton> {/* Use the styled version of Button */}
        </Group>
            </Provider>
          );
        }
      }
  
  export default CustomerInfo;
