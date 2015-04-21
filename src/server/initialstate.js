// import config from './config';
import messages from '../client/messages';

const initialLocale = 'en';

export default {
  $pendingActions: {},
  auth: {
    form: {
      fields: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  threads: {
    1: {id: 1, name: 'Jing and Bill', lastMessage: {
      id: 3, authorName: 'Jing', text: 'Sounds good.  Will they be serving dessert?', date: Date.now() - 79999
    }},
    2: {id: 2, name: 'Dave and Bill', lastMessage: {
      id: 5, authorName: 'Dave', text: 'Totally!  Meet you at the hotel bar.', date: Date.now() - 59999
    }},
    3: {id: 3, name: 'Functional Heads', lastMessage: {
      id: 7, authorName: 'Brian', text: 'At ForwardJS?  Yeah, of course.  See you there!', date: Date.now() - 39999
    }}
  },
  messages: {
    1: [
      {id: 1, authorName: 'Bill', text: 'Hey Jing, want to give a Flux talk at ForwardJS?', date: Date.now() - 99999 },
      {id: 2, authorName: 'Bill', text: 'Seems like a pretty cool conference.', date: Date.now() - 89999 },
      {id: 3, authorName: 'Jing', text: 'Sounds good.  Will they be serving dessert?', date: Date.now() - 79999}
    ],
    2: [
      {id: 4, authorName: 'Bill', text: 'Hey Dave, want to get a beer after the conference?', date: Date.now() - 69999},
      {id: 5, authorName: 'Dave', text: 'Totally!  Meet you at the hotel bar.', date: Date.now() - 59999}
    ],
    3: [
      {id: 6, authorName: 'Bill', text: 'Hey Brian, are you going to be talking about functional stuff?',
        date: Date.now() - 49999},
      {id: 7, authorName: 'Brian', text: 'At ForwardJS?  Yeah, of course.  See you there!', date: Date.now() - 39999}
    ]
  },
  newTodo: {
    title: ''
  },
  todos: [
    {id: 1, title: 'consider ‘stop doing’ app'},
    {id: 2, title: 'relax'}
  ],
  user: {
    authData: null
  }
};
