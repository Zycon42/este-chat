// import config from './config';
import messages from '../client/messages';

const initialLocale = 'en';

export default {
  pendingActions: {},
  auth: {
    forms: {
      login: {
        fields: {
          username: '',
          password: ''
        },
        error: null
      },
      signUp: {
        fields: {
          name: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        },
        error: null
      }
    }
  },
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  threads: {
    1: {id: 1, name: 'Jing', avatarUrl: 'https://www.gravatar.com/avatar/fb95c7605368c85c5efbf91bd21a3777?d=identicon',
      lastMessage: {
        id: 3, author: {name: 'Jing'}, text: 'Sounds good.  Will they be serving dessert?', date: Date.now() - 79999
    }},
    2: {id: 2, name: 'Dave', avatarUrl: 'https://www.gravatar.com/avatar/3b5348792185b5bdea1dee3290f33ab7?d=identicon',
      lastMessage: {
        id: 5, author: {name: 'Dave'}, text: 'Totally!  Meet you at the hotel bar.', date: Date.now() - 59999
    }},
    3: {id: 3, name: 'Brian', avatarUrl: 'https://www.gravatar.com/avatar/fa95f818614298b5a4e2e8706dc135a7?d=identicon',
      lastMessage: {
        id: 7, author: {name: 'Zycon'}, text: 'At ForwardJS?  Yeah, of course.  See you there!', date: Date.now() - 39999
    }}
  },
  messages: {
    1: [
      {id: 1, author: {name: 'Zycon'}, text: 'Hey Jing, want to give a Flux talk at ForwardJS?', date: Date.now() - 99999},
      {id: 2, author: {name: 'Zycon'}, text: 'Seems like a pretty cool conference.', date: Date.now() - 89999},
      {id: 3, author: {name: 'Jing'}, text: 'Sounds good.  Will they be serving dessert?', date: Date.now() - 79999}
    ],
    2: [
      {id: 4, author: {name: 'Zycon'}, text: 'Hey Dave, want to get a beer after the conference?',
        date: Date.now() - 69999},
      {id: 5, author: {name: 'Dave'}, text: 'Totally!  Meet you at the hotel bar.', date: Date.now() - 59999}
    ],
    3: [
      {id: 6, author: {name: 'Brian'}, text: 'Hey Zycon, are you going to be talking about functional stuff?',
        date: Date.now() - 49999},
      {id: 7, author: {name: 'Zycon'}, text: 'At ForwardJS?  Yeah, of course.  See you there!', date: Date.now() - 39999}
    ]
  },
  user: {
    authData: null
  }
};
