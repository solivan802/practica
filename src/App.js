import { useState, useRef, useEffect } from 'react';
import './App.css';
import FormInput from './Components/FormInput/FormInput';
import apiRick from './request/apiRick'


function loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

function Buttons({ dataText, urlInfo }) {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-3 '>
          {
            <button onClick={() => urlInfo()} type="button" className="btn btn-light">{dataText}</button>
          }
        </div>
      </div>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    try {
      apiRick(url)
        .then((response) => {
          setData(response);
        })
    } catch (error) {
      console.log(error)
    }

    return () => setData(null);
  }, [url]);

  function onClickUrl(urlData) {
    setUrl(urlData)
  }

  function renderPrueba() {

    return (
      <div className='container-fluid  pt-5'>
        <h1 className='text-center text-white'>Rick and Morty</h1>
        <div className='text-center d-flex align-items-center  justify-content-around'>
          {data?.data?.info?.prev &&
            <Buttons
              dataText={"Anterior"}
              urlInfo={() => onClickUrl(data?.data?.info?.prev)}
            />}
          {data?.data?.info?.next &&
            <Buttons
              dataText={"Siguiente"}
              urlInfo={() => onClickUrl(data?.data?.info?.next)}
            />}
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
          {
            data?.data?.results?.map((item, key) => {
              return (
                <div className="card col-12 col-md-3 m-3 h-100 bgCard"  key={key}>
                  <img src={item?.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">{item?.name}</h5>
                    <div className='d-flex flex-row ml-2 text-white w-100 align-items-center'>
                      <div className='statusCharacter'></div>
                      <p className="infoStatus">{item?.status}-{item?.species}</p>
                    </div>
                    <div className='d-flex flex-column'>
                      <p className="locationCard">{"Last known location:"}</p>
                      <a className="a-card ">{item?.location?.name}</a>
                    </div>
                    <a href="#" className="btn btn-light w-100 mt-5">{"Go to..."}</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  // const [values, setValues] = useState({
  //   username: {value: "", isValid: false},
  //   email:  {value: "", isValid: false},
  //   birthday:  {value: "", isValid: false},
  //   password:  {value: "", isValid: false},
  //   confirmPassword:  {value: "", isValid: false}
  // });
  // const inputRef = useRef(null);


  // const inputs = [
  //   {
  //     id: 1,
  //     name: 'username',
  //     type: 'text',
  //     placeholder: 'Username',
  //     errorMassage: "username debe tener una longitud de 3-6 caracteres",
  //     label: 'Username',
  //     pattern: "^[A-Za-z0-9]{3, 16}$",
  //     required: true
  //   },
  //   {
  //     id: 2,
  //     name: 'birthday',
  //     type: 'date',
  //     placeholder: 'Birthday',
  //     errorMassage: "",
  //     label: 'Birthday'
  //   },
  //   {
  //     id: 3,
  //     name: 'email',
  //     type: 'text',
  //     placeholder: 'Email',
  //     errorMassage: "Debe incluir un email valido",
  //     label: 'Email',
  //     required: true
  //   },
  //   {
  //     id: 4,
  //     name: 'password',
  //     type: 'password',
  //     placeholder: 'Password',
  //     errorMassage: "Debe incluir 8-16 carecteres y una mayuscula y 1 caracter especial",
  //     label: 'Password',
  //     required: true
  //   },
  //   {
  //     id: 5,
  //     name: 'confirmPassword',
  //     type: 'password',
  //     placeholder: 'Confirm Password',
  //     errorMassage: "Contraseñas no coinciden",
  //     label: 'Confirm Password',
  //     required: true
  //   }
  // ]

  // function handleSubmit(e) {
  //   debugger
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // }

  // function onBlur(e){
  //   debugger
  //   let inputText;
  //   const nameValue = e.target.name;
  //   setValues({...values, [nameValue]:{value: e.target.value}});

  //     inputText = values[e.target.name]

  //   for (let item of inputs){
  //       const regexInput = item?.pattern;
  //       const regex = new RegExp(regexInput);
  //       const isValidInput = regex.test(inputText);
  //       setValues({...values, [nameValue]:{isValid: isValidInput}});
  //   }
  // }

  return (
    <div className="container">
      {data ? renderPrueba() : loader()}
      {/* <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} id={input.id}
            {...input} 
            value={values[input.name]} 
            onBlur={(e) => onBlur(e)} 
            inputRef={inputRef}
            test={values}
            />
        ))}
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
