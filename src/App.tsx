import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function App() {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = people[index];
  const randomPerson = () => {
    let num =Math.floor(Math.random()*people.length);
    if(num===index){
      num=index+1
    }
    const newNum = num%people.length;
    setIndex(newNum)
  }
  const nextPer = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex+1)%people.length;
      return newIndex;
    });
  };
  const prevPer = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex-1+people.length)%people.length;
      return newIndex;
    });
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            {' '}
            <FaQuoteRight />{' '}
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPer}>
            {' '}
            <FaChevronLeft />{' '}
          </button>
          <button className="next-btn" onClick={nextPer}>
            {' '}
            <FaChevronRight />{' '}
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}> surprise me </button>
      </article>
    </main>
  );
}
export default App;
