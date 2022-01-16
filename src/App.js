import './App.css'
import Comment from './components/Comment/Comment'
import Card from './ui/Cards/Card'
import Samara from './ui/img/image.png'


const comment = {
  date: new Date(),
  text: "Let's learn React together, join us. Learning JS is awersome!",
  author: {
    name: 'I am a student of peaksoft school Samara.',
    avatarUrl: Samara,
  },
};

function App() {
  return (
    <div className='App'>
      <div>
        <Card>
          <Comment author={comment.author} date={comment.date} text={comment.text} />
        </Card>

      </div>

    </div>
  );
}

export default App;
