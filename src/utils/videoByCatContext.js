import { createContext} from 'react';

  const videoByCatContext = createContext({
    value: null, 
    statusVal:null
  })

export default videoByCatContext;