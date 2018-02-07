import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Form, Message, Button, Checkbox, Divider, Icon } from 'semantic-ui-react'
import { DateTimePicker } from 'react-widgets'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer()

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const minLength1 = minLength(1)
const maxLength50 = maxLength(50)
const maxLength500 = maxLength(500)

const pageTypes = [
  { key: 't1', text: 'Menu', value: 0 },
  { key: 't2', text: 'Events', value: 1 },
  { key: 't3', text: 'Content', value: 2 }
]

const  renderTextField = ({input, label, placeholder, meta: { touched, error } }) => (
  <Form.Field>
    <Form.Input {...input} fluid label={label} placeholder={placeholder} type='text' required /> 
    {touched && ((error && <span>{error}</span>))}
  </Form.Field> 
)

const renderTextAreaField = ({input, label, placeholder, meta: { touched, error }}) => (
  <Form.Field>
    <Form.TextArea {...input} label={label} placeholder={placeholder}/>
    {touched && ((error && <span>{error}</span>))}
  </Form.Field>
)

const renderSelectField = ({input, label, placeholder,options, meta: { touched, error }, children,}) => (
  <Form.Field>
    <Form.Select fluid label={label} options={options} placeholder={placeholder} defaultValue={input.value} onChange={(e,{value}) => (input.onChange(value))} required /> 
    {touched && (error && <span>{error}</span>)}
  </Form.Field>
)

const renderCheckBoxField = ({input, value, label}) => (
  <Form.Field>
    <Checkbox label={label} checked={input.value ? true : false} onChange={(e, { checked }) => input.onChange(checked)}/>
  </Form.Field>
)

const renderDatePicker = ({ input: { onChange, value }, showTime, label }) => (
  <Form.Field>
    <label>{label}</label>
    <DateTimePicker
      onChange = {onChange}
      format = "MMMM, DD YYYY"
      time = {showTime}
      value = {!value ? null : new Date(value)}
      min = {new Date()}
    /> 
  </Form.Field>
)

class FormForValidation extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting} = this.props
    
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
            <Field name="title" type="text" component={renderTextField} placeholder='Enter title' label="Title" validate={[ required, minLength1, maxLength50 ]}/>          
            <Field name="type" component={renderSelectField} placeholder='Select Type' label='Page Type' options={pageTypes} validate={[required]}/>
          </Form.Group>
      
          <Field name="description" component={renderTextAreaField} label="Description" placeholder='Enter a description...' validate={[minLength1, maxLength500]}/>

          <Field name="publishedOn" showTime={false} component={renderDatePicker} label = 'Publish Date'/>

          <Field name="isActive" component={renderCheckBoxField} type="checkbox" label='Is page active ?'/>

          <Divider/>
      
          <Form.Field className='submitRow'>
            <div className='homeBtnDiv'>
              <Button as={Link} to="/" content='Dashboard' icon='home' labelPosition='left' className="homeBtn" />
            </div>
      
            <Button color='red' disabled={pristine || submitting} onClick={reset}>Clear Page</Button>
      
            <Button animated='fade' disabled={pristine || submitting} basic color='grey' type='submit' className='formBtn'>
              <Button.Content hidden>Save Page</Button.Content>
              <Button.Content visible>
                <Icon name='send' color="black"/>
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </div>
    )
  }
}
  
export default reduxForm({
  form: 'PageForm'
})(FormForValidation)
