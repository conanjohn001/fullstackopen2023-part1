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

const Eachpart =(props)=>{
    return(
      <p>
        {props.eachpart.name}, {props.eachpart.exercises}
      </p>
    );
  }

const Content =(props)=>{
  const content_views = [];  

  props.content_parts.forEach(i => {
    content_views.push(<Eachpart eachpart={i} />)    
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
