export default {
  en: {
    auth: {
      form: {
        placeholder: {
          username: 'username',
          password: 'password'
        },
        button: {
          login: 'Login',
          signup: 'Sign up'
        },
        hint: 'Hint: pass1'
      },
      logout: {
        button: 'Logout'
      }
    },
    page: {
      login: {
        title: 'Login'
      },
      signup: {
        title: 'Sign up'
      }
    },
    validation: {
      required: `Please fill out {prop, select,
        username {username}
        password {password}
        other {'{prop}'}
      }.`,
      email: `Email address is not valid.`,
      password: `Password must contain at least {minLength} characters.`
    },
    notFound: {
      title: 'Page Not Found',
      header: 'This page isn\'t available',
      message: 'The link may be broken, or the page may have been removed.',
      continueMessage: 'Continue here please.'
    }
  }
};
