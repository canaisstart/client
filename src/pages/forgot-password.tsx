import Auth from 'templates/Auth'
import FormForgotPassword from 'components/FormForgotPassword'

export default function ForgotPassword() {
  return (
    <Auth title="Solicitar nova senha">
      <FormForgotPassword />
    </Auth>
  )
}
