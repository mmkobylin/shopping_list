const [ darkTheme, setDarkTheme ] = useState(true); 

function toggleTheme () {
  setDarkTheme( prevTheme => !prevTheme ); 

  console.log(darkTheme)
}

rcf