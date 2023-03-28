// import logo from './logo.svg';
// import './App.css';

const course ={
  title: 'Half Stack application development',
  content: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

const Header =(props) => {
  return(
    <h1>{props.course}</h1>
  );
}

const Content =(props)=>{
  let content_views = [];

  const Eachpart =(props)=>{
    return(
      <p>
        {props.eachpart.name}, {props.eachpart.exercises}
      </p>
    );
  }

  props.content_parts.forEach(element => {
    content_views.push(<Eachpart eachpart={element} />)    
  });

  return(
    <div>
      {content_views}
    </div>
  );
}

const Total =(props)=>{
  let sum_ex = props.total_ex.reduce(
    (accum,current) => accum + current.exercises, 0
  );
  
  return(
    <p>Total number of exercises is {sum_ex} </p>
  );
}

const App =() => {

  return (
    <div className="App">
      
      <Header course={course.title} />
      <Content content_parts={course.content} />
      <Total  total_ex={course.content}  />

    </div>
  );
}

export default App;
